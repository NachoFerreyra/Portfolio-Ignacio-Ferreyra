import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';
import { getProjects } from '../src/data/projects.js';

// DOM interaction checks. These do not certify browser selection gestures or layout.
test('personal portfolio interactions', async (t) => {
  const dom = new JSDOM('<!doctype html><html><head><meta name="description" content=""></head><body><div id="root"></div></body></html>', { url: 'http://localhost/', pretendToBeVisual: true });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  window.matchMedia = () => ({ matches: false });
  window.HTMLElement.prototype.scrollIntoView = () => {};
  globalThis.requestAnimationFrame = window.requestAnimationFrame.bind(window);
  window.localStorage.setItem('portfolio-language', 'es');
  window.localStorage.setItem('portfolio-theme', 'dark');
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(document.getElementById('root'));
  const click = async (element) => { assert.ok(element, 'control exists'); await act(async () => element.click()); };
  try {
    await t.test('all visible projects have current images with valid metadata in both languages', () => {
      for (const language of ['es', 'en']) {
        for (const project of getProjects(language)) {
          assert.ok(project.media.length > 0, project.id);
          for (const media of project.media) {
            const png = readFileSync('public' + media.src);
            assert.equal(png.readUInt32BE(16), media.width, media.src);
            assert.equal(png.readUInt32BE(20), media.height, media.src);
            assert.ok(media.alt && media.caption, media.src);
          }
        }
      }
    });
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const { LanguageProvider } = await server.ssrLoadModule('/src/contexts/LanguageContext.jsx');
    const { ThemeProvider } = await server.ssrLoadModule('/src/contexts/ThemeContext.jsx');
    await act(async () => root.render(createElement(LanguageProvider, null, createElement(ThemeProvider, null, createElement(App)))));
    await t.test('every referenced CSS module class exists', async () => {
      const { default: classes } = await server.ssrLoadModule('/src/App.module.scss');
      for (const file of ['src/App.jsx', 'src/components/ProjectDetails.jsx', 'src/components/ProjectCard.jsx', 'src/components/ImageViewer.jsx']) {
        for (const [, name] of readFileSync(file, 'utf8').matchAll(/styles\.(\w+)/g)) {
          assert.ok(classes[name], `${file}: missing CSS class ${name}`);
        }
      }
    });
    await t.test('contact channels have independent rows and matching compiled styles', () => {
      const contact = document.getElementById('contacto');
      const rows = [...contact.querySelectorAll('dl > div')];
      assert.equal(rows.length, 3);
      assert.deepEqual(rows.map(row => row.querySelector('dt').textContent), ['Email', 'LinkedIn', 'GitHub']);
      for (const row of rows) {
        assert.equal(row.querySelectorAll('dd > a').length, 1);
        assert.equal(row.querySelector('svg'), null);
      }
      assert.equal(rows[0].querySelector('a').getAttribute('href'), 'mailto:ignaciooferreyraa@gmail.com');
      const style = document.createElement('style');
      style.textContent = readdirSync('dist/assets').filter(file => file.endsWith('.css')).map(file => readFileSync('dist/assets/' + file, 'utf8')).join('\n');
      document.head.append(style);
      const listStyle = window.getComputedStyle(contact.querySelector('dl'));
      assert.equal(listStyle.display, 'grid');
      assert.notEqual(listStyle.gap, '');
      for (const row of rows) assert.equal(window.getComputedStyle(row).display, 'grid');
      style.remove();
    });
    await t.test('profile, languages and allowed projects', () => {
      assert.equal(document.querySelectorAll('h1').length, 1);
      assert.equal(document.querySelector('h1').textContent, 'Ignacio Ferreyra');
      assert.match(document.body.textContent, /B1/);
      assert.equal(document.querySelector('#perfil article h4 a').textContent, 'ZondaLogic');
      assert.match(document.querySelector('#perfil article').textContent, /2025/);
      const educationHeading = [...document.querySelectorAll('#perfil h3')].find(heading => heading.textContent === 'Formación');
      assert.ok(educationHeading);
      assert.doesNotMatch(educationHeading.parentElement.textContent, /ZondaLogic/);
      assert.match(document.body.textContent, /Python/);
      assert.equal(document.querySelector('aside img').getAttribute('src'), '/cv/avatar.jpg');
      assert.equal(document.querySelectorAll('#proyectos article').length, 4);
      assert.doesNotMatch(document.body.textContent, /Nacho Clicker|La Esquina Bistro|Del problema al producto|puesta en contexto|De la idea a una|experiencia que funciona|SELECTED INTERFACE|[✳✦✧]/);
      assert.equal(document.querySelector('dialog'), null);
    });
    await t.test('accordion exposes only the requested project and keeps closed controls inert', async () => {
      const toggles = document.querySelectorAll('#proyectos button[aria-controls]');
      const panel = document.getElementById(toggles[0].getAttribute('aria-controls'));
      assert.equal(panel.hasAttribute('inert'), true);
      await click(toggles[0]);
      assert.equal(toggles[0].getAttribute('aria-expanded'), 'true');
      assert.equal(panel.hasAttribute('inert'), false);
      await click(toggles[1]);
      assert.equal(toggles[0].getAttribute('aria-expanded'), 'false');
      assert.equal(panel.hasAttribute('inert'), true);
      assert.equal(toggles[1].getAttribute('aria-expanded'), 'true');
      assert.equal(document.body.style.overflow, '');
      await click(toggles[1]);
      assert.equal(toggles[1].getAttribute('aria-expanded'), 'false');
    });
    await t.test('gallery changes only the chosen image without creating text selection', async () => {
      const article = [...document.querySelectorAll('#proyectos article')].find(node => node.querySelector('h3').textContent === 'TaskDesk');
      await click(article.querySelector('button[aria-controls]'));
      const image = article.querySelector('figure img');
      const before = image.getAttribute('src');
      window.getSelection().removeAllRanges();
      const buttons = article.querySelectorAll('[aria-label="Capturas del proyecto"] button');
      await click(buttons[1]);
      assert.notEqual(image.getAttribute('src'), before);
      assert.equal(buttons[1].getAttribute('aria-pressed'), 'true');
      assert.equal(buttons[0].getAttribute('aria-pressed'), 'false');
      assert.equal(window.getSelection().toString(), '');
      assert.equal(document.querySelector('dialog'), null);
    });
    await t.test('project list expands and collapses without hiding the contact section', async () => {
      const findButton = name => [...document.querySelectorAll('#proyectos button')].find(button => button.textContent === name);
      await click(findButton('Mostrar 4 más'));
      assert.equal(document.querySelectorAll('#proyectos article').length, 8);
      assert.ok(document.querySelector('#contacto a[href^="mailto:"]'));
      await click(findButton('Mostrar menos'));
      assert.equal(document.querySelectorAll('#proyectos article').length, 4);
      await new Promise(resolve => window.requestAnimationFrame(resolve));
      assert.equal(document.activeElement.id, 'projects-title');
    });
    await t.test('filters show the requested categories and reset the compact list', async () => {
      const controls = document.querySelectorAll('[aria-label="Filtrar proyectos"] button');
      await click(controls[1]);
      assert.equal(document.querySelectorAll('#proyectos article').length, 4);
      assert.match(document.querySelector('#proyectos article').textContent, /Estética CG — Admin/);
      await click(controls[2]);
      assert.equal(document.querySelectorAll('#proyectos article').length, 4);
      assert.match(document.querySelector('#proyectos article').textContent, /Estética CG — Web/);
      await click(controls[0]);
      assert.equal(document.querySelectorAll('#proyectos article').length, 4);
    });
    await t.test('theme and language buttons preserve the personal profile', async () => {
      await click(document.querySelector('[aria-label="Cambiar tema"]'));
      assert.equal(document.documentElement.dataset.theme, 'light');
      await click(document.querySelector('[aria-label="Cambiar idioma"]'));
      assert.equal(document.documentElement.lang, 'en');
      assert.match(document.querySelector('a[download]').getAttribute('href'), /Resume/);
      assert.equal(document.querySelectorAll('#proyectos article').length, 4);
      assert.equal(document.querySelector('h1').textContent, 'Ignacio Ferreyra');
      assert.doesNotMatch(document.body.textContent, /From an idea to an|experience that works|SELECTED INTERFACE|[✳✦✧]/);
    });
    await t.test('production bundle excludes removed private projects', () => {
      for (const file of readdirSync('dist/assets').filter(file => file.endsWith('.js'))) assert.doesNotMatch(readFileSync('dist/assets/' + file, 'utf8'), /nacho.clicker|la.esquina.bistro|De la idea a una|SELECTED INTERFACE|[✳✦✧]/i);
    });
  } finally {
    await act(async () => root.unmount());
    await server.close();
    dom.window.close();
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.HTMLElement;
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
    delete globalThis.requestAnimationFrame;
  }
});
