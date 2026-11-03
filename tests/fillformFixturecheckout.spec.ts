import { test, expect } from './FixturesCheckout';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ login }) => {
    await login.page.goto(process.env.URL!);
    await login.page.getByTestId('login-link').click();
    await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    await expect(login.page.getByText('Mon compte')).toBeVisible();
});

test('Fill form using Fixtures', async ({ coordonnees }) => {
    await coordonnees.page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
    await coordonnees.fillCoordonnees('Marco Polo', '123 Main St', 'Venice', '30100');
    await expect(coordonnees.page.getByText('Payment')).toBeVisible();
});