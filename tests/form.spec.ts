import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
});

test('fill form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').fill('John Doe');
  await page.getByPlaceholder('name@example.com').fill('john.doe@example.com');
  
  await expect(page.getByPlaceholder('Full Name')).toHaveValue('John Doe');
  await expect(page.getByPlaceholder('name@example.com')).toHaveValue('john.doe@example.com');
});

