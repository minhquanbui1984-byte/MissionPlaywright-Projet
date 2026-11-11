import { test, expect } from './Fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ login }) => {
    await login.page.goto(process.env.URL!);
});

test ('Login to account', async ({ login }) => {
    await test.step('Login', async () => {
        await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    });
});

test('Login to account with wrong credentials', async ({ login }) => {
    await test.step('Login with wrong credentials', async () => {
        await login.failedLogin(process.env.EMAIL!, faker.internet.password());
    });
});

test('Login to inexistent account', async ({ login }) => {
        await test.step('Login with inexistent account', async () => {
        await login.failedLogin(faker.internet.email(), faker.internet.password());
    });
});

