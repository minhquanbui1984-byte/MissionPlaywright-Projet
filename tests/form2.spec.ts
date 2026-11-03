import { test, expect } from '@playwright/test';

test('fill form', async ({ page }) => {
  await page.goto('https://practice.missionplaywright.fr/exercises/login-form');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.getByText('Welcome')).toBeVisible();
});
