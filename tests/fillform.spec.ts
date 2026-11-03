import { test, expect } from '@playwright/test';

test('fill form', async ({ page }) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/registration-form');

    const Name = page.getByTestId('registration-name');
    const Email = page.getByTestId('registration-email');
    const Password = page.getByTestId('registration-password');
    const ConfirmPassword = page.getByTestId('registration-confirmPassword');
    const TermsCheckbox = page.getByTestId('registration-terms');
    const SubmitButton = page.getByTestId('registration-submit');

    await Name.fill('Marco Polo');
    await Email.fill('marco.polo@example.com');
    await Password.fill('MonMotDePasse123');
    await ConfirmPassword.fill('MonMotDePasse123');
    await TermsCheckbox.check();
    
    await expect(Name).toHaveValue('Marco Polo');
    await expect(Email).toHaveValue('marco.polo@example.com');
    await expect(Password).toHaveValue('MonMotDePasse123');
    await expect(ConfirmPassword).toHaveValue('MonMotDePasse123');
    await expect(TermsCheckbox).toBeChecked();

    await SubmitButton.click();

    await expect(page.getByText('Registration complete')).toBeVisible();
});