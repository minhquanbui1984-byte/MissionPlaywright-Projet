import { test, expect } from './Fixtures';

test('Disconnect from account', async ({ login }) => {
    await login.page.goto(process.env.URL!);

    await test.step('Login', async () => {
        await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    });

    await test.step('Logout', async () => {
        await login.logout();
    });
});