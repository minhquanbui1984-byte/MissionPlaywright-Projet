import { test, expect } from './Fixtures';

test('Disconnect from account', async ({ login }) => {
    await login.page.goto(process.env.URL!);
    await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    await login.logout();
});