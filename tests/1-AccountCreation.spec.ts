import { test, expect } from './Fixtures';
import { faker } from '@faker-js/faker';

test ('Create account', async ({ registration }) => {
    await registration.register(faker.person.fullName(), faker.internet.email(), faker.internet.password());
    await expect(registration.page.getByText('Inscription réussie !', { exact: true })).toBeVisible();
});