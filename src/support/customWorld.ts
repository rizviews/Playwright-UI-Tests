// src/support/custom-world.ts
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Page, Browser, BrowserContext } from '@playwright/test';
import { LandingPage } from '../pageObjects/pages/landing.page.ts';

export class CustomWorld extends World {
  page!: Page;
  browser!: Browser;
  context!: BrowserContext;
  landingPage!: LandingPage;
  accountsOverviewPage!: any;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async initPages() {
    this.landingPage = new LandingPage(this.page as Page);
  }
}

setWorldConstructor(CustomWorld);
