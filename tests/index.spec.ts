import { chromium } from '@playwright/test';

(async () => {
  // Inicia o navegador Chromium
  const browser = await chromium.launch();

  // Cria uma nova página
  const page = await browser.newPage();

  // Navega até a página desejada
  await page.goto('https://eluvju.github.io/astrobit.github.io/');

  // Tira um screenshot da página após o carregamento
  await page.screenshot({ path: 'pagina.png' });

  // Fecha o navegador
  await browser.close();
})();

