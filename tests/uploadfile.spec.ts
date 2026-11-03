import { test, expect } from '@playwright/test';

test('select menu', async ({ page }) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/file-upload');

    const fileInput = page.getByTestId('file-input');

    await fileInput.setInputFiles("C:/Users/Minh/Pictures/Screenshots/Capture d'écran 2026-10-28 134142.png");

    await expect(page.getByText('Capture d\'écran 2026-10-28 134142.png')).toBeVisible();
});
