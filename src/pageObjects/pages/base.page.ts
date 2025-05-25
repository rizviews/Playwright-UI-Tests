// src/pages/base_page.ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}
}
