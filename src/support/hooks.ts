// src/support/hooks.ts
import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
import { CustomWorld } from './customWorld.ts';

// let browser: Browser;

Before(async function (this: CustomWorld, scenario) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.initPages();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `test-results/screenshots/${scenario.pickle.name}.png`,
      fullPage: true,
    });
    this.attach(screenshot, 'image/png');
  }
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
