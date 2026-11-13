import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const directory = path.resolve('.audit-screenshots/current-portfolio');
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const checks = [];

async function panelSettled(page, id, open) {
  await page.waitForFunction(({ id, open }) => {
    const panel = document.getElementById(id);
    if (!open) return panel.getBoundingClientRect().height < 1;
    return panel.getBoundingClientRect().height > 0 && Math.abs(panel.getBoundingClientRect().height - panel.firstElementChild.scrollHeight) < 2;
  }, { id, open });
}

try {
  for (const width of [320, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, locale: 'es-AR', serviceWorkers: 'block', reducedMotion: 'no-preference' });
    await context.addInitScript(() => { localStorage.setItem('portfolio-language', 'es'); localStorage.setItem('portfolio-theme', 'dark'); });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.getByRole('heading', { level: 1 }).textContent(), 'Ignacio Ferreyra');
    await page.getByRole('heading', { name: 'Experiencia laboral', exact: true }).waitFor();
    assert.equal(await page.locator('#proyectos article').count(), 4);
    assert.equal(await page.locator('aside img').evaluate(image => getComputedStyle(image).filter), 'none');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    if (width === 390 || width === 1440) await page.screenshot({ path: path.join(directory, `profile-${width}.png`), animations: 'disabled' });
    await page.getByRole('button', { name: 'Mostrar 4 más', exact: true }).click();
    assert.equal(await page.locator('#proyectos article').count(), 8);
    const previews = page.locator('#proyectos article > div:first-child img');
    assert.equal(await previews.count(), 8);
    for (const image of await previews.all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate(image => image.complete && image.naturalWidth > 0 ? Promise.resolve() : new Promise((resolve, reject) => { image.onload = resolve; image.onerror = () => reject(new Error('Image failed')); }));
    }
    const admin = page.locator('#proyectos article').filter({ has: page.getByRole('heading', { name: 'Estética CG — Admin', exact: true }) });
    const toggle = admin.locator('button[aria-controls]');
    await toggle.click();
    const panelId = await toggle.getAttribute('aria-controls');
    await panelSettled(page, panelId, true);
    const frame = admin.getByRole('button', { name: 'Ampliar captura', exact: true });
    const thumbs = admin.getByRole('group', { name: 'Capturas del proyecto' }).getByRole('button');
    const frameBefore = await frame.boundingBox();
    const before = await frame.locator('img').getAttribute('src');
    await thumbs.nth(1).click();
    assert.notEqual(await frame.locator('img').getAttribute('src'), before);
    assert.ok(Math.abs((await frame.boundingBox()).height - frameBefore.height) < 1);
    assert.equal(await frame.locator('img').evaluate(image => getComputedStyle(image).objectFit), 'contain');
    if (width === 390 || width === 1440) await page.locator(`#${panelId}`).screenshot({ path: path.join(directory, `gallery-portrait-${width}.png`), animations: 'disabled' });
    await thumbs.first().click();
    if (width === 390 || width === 1440) await page.locator(`#${panelId}`).screenshot({ path: path.join(directory, `gallery-landscape-${width}.png`), animations: 'disabled' });

    const tabsBefore = context.pages().length;
    await frame.click();
    const viewer = page.getByRole('dialog', { name: 'Estética CG — Admin', exact: true });
    await viewer.waitFor();
    await page.waitForFunction(() => document.querySelector('dialog img')?.getBoundingClientRect().width > 0);
    assert.equal(context.pages().length, tabsBefore, 'image stays on the same page');
    assert.equal(await page.evaluate(() => document.body.style.overflow), 'hidden');
    assert.ok(await viewer.getByRole('button', { name: 'Cerrar vista previa' }).evaluate(button => button === document.activeElement));
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press('Tab');
      assert.ok(await viewer.evaluate(dialog => dialog.contains(document.activeElement)), 'focus stays in viewer');
    }
    const imageBeforeZoom = await viewer.locator('img').boundingBox();
    await viewer.getByRole('button', { name: 'Acercar imagen' }).click();
    await viewer.getByRole('button', { name: 'Acercar imagen' }).click();
    assert.ok((await viewer.locator('img').boundingBox()).width > imageBeforeZoom.width * 1.5);
    const stage = viewer.locator('[class*="viewerStage"]');
    assert.ok(await stage.evaluate(element => element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight));
    if (width === 1440) {
      const box = await stage.boundingBox();
      const scrollBefore = await stage.evaluate(element => element.scrollTop);
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2 - 80, { steps: 8 });
      await page.mouse.up();
      assert.ok(await stage.evaluate((element, before) => element.scrollTop > before, scrollBefore), 'zoomed image can be dragged');
    }
    if (width === 390 || width === 1440) await viewer.screenshot({ path: path.join(directory, `image-viewer-zoom-${width}.png`), animations: 'disabled' });
    await page.keyboard.press('ArrowRight');
    await page.waitForFunction(() => document.querySelector('dialog img')?.getAttribute('src')?.includes('mobile'));
    assert.equal(await viewer.getByRole('button', { name: 'Restablecer zoom' }).textContent(), '1×');
    if (width === 390 || width === 1440) await viewer.screenshot({ path: path.join(directory, `image-viewer-portrait-${width}.png`), animations: 'disabled' });
    await page.keyboard.press('Escape');
    await viewer.waitFor({ state: 'detached' });
    assert.ok(await frame.evaluate(button => document.activeElement === button));
    assert.equal(await page.evaluate(() => document.body.style.overflow), '');
    assert.equal(await page.evaluate(() => window.getSelection().toString()), '');
    await admin.getByRole('button', { name: 'Ocultar detalles', exact: true }).click();
    await panelSettled(page, panelId, false);
    await page.getByRole('button', { name: 'Mostrar menos', exact: true }).click();
    assert.equal(await page.locator('#proyectos article').count(), 4);
    await page.waitForFunction(() => document.activeElement.id === 'projects-title');
    await page.getByRole('button', { name: 'Web', exact: true }).click();
    assert.equal(await page.locator('#proyectos article').count(), 4);
    await page.getByRole('button', { name: 'Todos', exact: true }).click();
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    const rows = await page.locator('#contacto dl > div').evaluateAll(rows => rows.map(row => ({ top: row.getBoundingClientRect().top, bottom: row.getBoundingClientRect().bottom })));
    assert.ok(rows[1].top >= rows[0].bottom && rows[2].top >= rows[1].bottom);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    if (width === 390 || width === 1440) await page.locator('#contacto').screenshot({ path: path.join(directory, `contact-${width}.png`), animations: 'disabled' });
    assert.deepEqual(errors, []);
    checks.push({ width, passed: true, defaultProjects: 4, expandedProjects: 8, imageViewer: 'zoom, keyboard, focus and same-page navigation passed', overflow: false, runtimeErrors: 0 });
    console.log(JSON.stringify(checks.at(-1)));
    await context.close();
  }
  const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const page = await reduced.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  assert.equal(await page.locator('[class*="detailsCollapse"]').first().evaluate(element => getComputedStyle(element).transitionDuration), '0s');
  assert.equal(await page.locator('#proyectos article').first().evaluate(element => getComputedStyle(element).animationName), 'none');
  await page.getByRole('button', { name: /^Ver imágenes de/ }).first().click();
  assert.equal(await page.getByRole('dialog').evaluate(element => getComputedStyle(element).animationName), 'none');
  await page.keyboard.press('Escape');
  await reduced.close();
  console.log('Reduced motion: transitions and entry animations disabled.');
  const english = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  await english.addInitScript(() => { localStorage.setItem('portfolio-language', 'en'); localStorage.setItem('portfolio-theme', 'light'); });
  const englishPage = await english.newPage();
  await englishPage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await englishPage.getByRole('button', { name: /^View images of/ }).first().click();
  await englishPage.getByRole('button', { name: 'Close image preview', exact: true }).waitFor();
  assert.equal(await englishPage.getByRole('dialog').evaluate(element => getComputedStyle(element).backgroundColor), 'rgb(255, 255, 255)');
  await englishPage.mouse.click(2, 2);
  await englishPage.getByRole('dialog').waitFor({ state: 'detached' });
  await english.close();
  console.log('English/light theme and backdrop close passed.');
} finally {
  await browser.close();
  await writeFile(path.join(directory, 'verification.json'), JSON.stringify(checks, null, 2));
}
