import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { BasePage } from './base.page.ts';

export class AccountsOverviewPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToAccountsOverview() {
    // Click the 'Accounts Overview' link in the navigation
    await this.page.getByRole('link', { name: 'Accounts Overview' }).click();
  }

  async verifyAccountsOverviewTableVisible() {
    const table = this.page.locator('table#accountTable');
    await table.waitFor({ state: 'visible', timeout: 5000 });
    await expect(table).toBeVisible();
  }

  async verifyAtLeastOneAccountListed() {
    const rows = this.page.locator('table#accountTable tbody tr');
    await rows.first().waitFor({ state: 'visible', timeout: 15000 });
    const count = await rows.count();
    expect(count).toBeGreaterThan(0);
  }
}
