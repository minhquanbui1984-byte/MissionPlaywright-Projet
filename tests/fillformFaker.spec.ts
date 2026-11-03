import { faker } from '@faker-js/faker';
import { test, expect } from './FixturesCheckout';

test.beforeEach(async ({ login }) => {
    await login.page.goto(process.env.URL!);
    await login.page.getByTestId('login-link').click();
    await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    await expect(login.page.getByText('Mon compte')).toBeVisible();
});

test('Fill registration form using Faker', async ({ page }) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
    await page.getByTestId('checkout-name').fill(faker.person.fullName());
    await page.getByTestId('checkout-address').fill(faker.location.streetAddress());
    await page.getByTestId('checkout-city').fill(faker.location.city());
    await page.getByTestId('checkout-zip').fill(faker.location.zipCode());
    await page.getByTestId('checkout-next').click();
    await expect(page.getByText('Payment')).toBeVisible();
});
