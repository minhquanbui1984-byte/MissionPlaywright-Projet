import { test, expect } from './FixturesCheckout';

test.beforeEach(async ({ login }) => {
    await login.page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
    await login.page.getByTestId('login-link').click();
    await login.login('email_compte', 'mot_de_passe_compte');
    await expect(login.page.getByText('Mon compte')).toBeVisible();
});

test('Fill form using Fixtures', async ({ coordonnees }) => {
    await coordonnees.page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
    await coordonnees.fillCoordonnees('Marco Polo', '123 Main St', 'Venice', '30100');
    await expect(coordonnees.page.getByText('Payment')).toBeVisible();
});