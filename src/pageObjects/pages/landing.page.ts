import { Page } from 'playwright';
import config from '../../../playwright.config.ts';
import { expect } from '@playwright/test';
import { BasePage } from './base.page.ts';

export class LandingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToLandingPage() {
    await this.page.goto(config.use?.baseURL ?? '');
  }

  async verifySectionVisible(sectionTitle: string) {
    const section = await this.page.locator('h2', { hasText: sectionTitle });
    await section.waitFor({ state: 'visible' });
    expect(section).toBeVisible();
  }

  async verifyItemHeaderVisible(itemHeaderText: string) {
    const itemHeader = await this.page.locator('li', { hasText: itemHeaderText });
    expect(itemHeader.first()).toBeVisible({ timeout: 30000 });
  }

  async verifyLeftNavigationLinks() {
    const leftNavLinks = this.page.locator('.leftmenu a');
    await leftNavLinks.waitFor({ state: 'visible' });
    expect(leftNavLinks).toBeVisible();
  }

  async verifyRegisterLinkVisible() {
    const registerLink = this.page.getByRole('link', { name: 'Register' });
    await registerLink.waitFor({ state: 'visible' });
    expect(registerLink).toBeVisible();
  }
}
