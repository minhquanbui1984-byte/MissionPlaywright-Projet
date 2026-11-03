import { test, expect } from '@playwright/test';

test('checkboxes', async ({ page }) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');
    const checkbox1 = page.getByTestId('label-html');
    const checkbox2 = page.getByTestId('label-javascript');
    const checkbox3 = page.getByTestId('label-selenium');
    const validation = page.getByTestId('checkbox-submit');
    await checkbox1.check();
    await checkbox2.uncheck();
    await checkbox3.check();
    await validation.click();

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox3).toBeChecked();
    await expect(page.getByText('Compétences enregistrées')).toBeVisible();
});