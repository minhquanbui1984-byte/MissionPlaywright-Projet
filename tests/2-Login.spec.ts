import { test, expect } from './Fixtures';

test ('Login to account', async ({ login }) => {
    await login.page.goto(process.env.URL!);
    await login.login(process.env.EMAIL!, process.env.PASSWORD!);
});