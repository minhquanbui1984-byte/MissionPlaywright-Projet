import { test, expect } from '@playwright/test';

test('select menu', async ({ page }) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/select-dropdowns');
    const Framework = page.getByTestId('select-framework');
    const Language = page.getByTestId('select-languages');
    const Niveau = page.getByTestId('select-level');
    const Niveauvaleur = page.getByTestId('level-option-intermediaire');

    await Framework.selectOption('selenium');
    await Language.selectOption(['java', 'python']);
    await Niveau.click();
    await Niveauvaleur.click();

    await page.getByTestId('select-submit').click();

    await expect(Framework).toHaveValue('selenium');
    await expect(Language).toHaveValues(['python', 'java']);
    //await expect(Niveau).toHaveRole('combobox', { name: 'Intermédiaire' });
    await expect (Niveau).toHaveText('Intermédiaire');
    await expect(page.getByText('Configuration enregistrée')).toBeVisible();
});