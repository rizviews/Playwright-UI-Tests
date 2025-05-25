import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../src/support/customWorld.ts';
import { AccountsOverviewPage } from '../../src/pageObjects/pages/accountsOverview.page.ts';

Given('I am logged in as a valid user', async function (this: CustomWorld) {
  await this.landingPage.navigateToLandingPage();
  await this.landingPage.loginWithValidCredentials();
});

When('I navigate to the Accounts Overview page', async function (this: CustomWorld) {
  this.accountsOverviewPage = new AccountsOverviewPage(this.page);
  await this.accountsOverviewPage.navigateToAccountsOverview();
});

Then('I should see the accounts overview table', async function (this: CustomWorld) {
  await this.accountsOverviewPage.verifyAccountsOverviewTableVisible();
});

Then('I should see at least one account listed', async function (this: CustomWorld) {
  await this.accountsOverviewPage.verifyAtLeastOneAccountListed();
});
