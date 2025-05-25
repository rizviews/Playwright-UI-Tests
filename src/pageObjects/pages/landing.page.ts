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

  async clickButton(buttonText: string) {
    const button = this.page.getByRole('button', { name: buttonText });
    await button.click();
  }

  async verifyLoginErrorMessage() {
    const error = this.page.locator('.error');
    await error.waitFor({ state: 'visible', timeout: 5000 });
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Please enter a username and password.');
  }

  async loginWithValidCredentials() {
    // Replace with your actual test credentials
    await this.page.locator('[name="username"]').fill('rizwan582@gmail.com');
    await this.page.locator('[name="password"]').fill('Abc1234');
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}
