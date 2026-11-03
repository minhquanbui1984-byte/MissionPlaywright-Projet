import { test, expect } from './FixturesRegistration';

test('Fill registration form using Fixtures', async ({ registration }) => {
    await registration.page.goto('https://practice.missionplaywright.fr/exercises/registration-form');
    await registration.register('John Doe', 'john.doe@example.com', 'password123', 'password123');
    await expect (registration.page.getByText('Registration complete')).toBeVisible();
});