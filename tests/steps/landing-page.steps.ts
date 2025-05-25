import { Given, Then, Before } from '@cucumber/cucumber';
import { CustomWorld } from '../../src/support/customWorld.ts';

Given('I navigate to the Parabank landing page', async function (this: CustomWorld) {
  await this.landingPage.navigateToLandingPage();
});

Then('I should see the {string} section', async function (this: CustomWorld, sectionTitle) {
  await this.landingPage.verifySectionVisible(sectionTitle);
});

Then('I should see the {string} item header', async function (this: CustomWorld, linkText) {
  await this.landingPage.verifyItemHeaderVisible(linkText);
});

Then('I should see the {string} link', async function (this: CustomWorld, linkText) {
  await this.landingPage.verifyRegisterLinkVisible();
});
