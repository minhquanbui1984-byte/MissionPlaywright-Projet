import { test, expect } from './Fixtures';
import { faker } from '@faker-js/faker';

const FirstName = faker.person.firstName();
const LastName = faker.person.lastName();
const PhoneNumber = faker.phone.number();
const Address = faker.location.streetAddress();
const City = faker.location.city();
const PostalCode = faker.location.zipCode();
const CardNumber = faker.finance.creditCardNumber();
const CardHolder = `${FirstName} ${LastName}`;
const CardExpiry = faker.date.future().toISOString().split('T')[0];
const CardCvv = faker.number.int({ min: 100, max: 999 }).toString();

test.beforeEach(async ({addToCart}) => {
    await addToCart.addToCartBestSeller();
});

test('Checkout without account connected', async ({ shipping, login, payment }) => {
    
    await test.step('Access checkout', async () => {
        await shipping.accessCheckout();
    });

    await test.step('Login from checkout', async () => {
        await login.loginFromCheckout(process.env.EMAIL!, process.env.PASSWORD!);
    });

    await test.step('Access checkout', async () => {
        await shipping.accessCheckout();
    });

    await test.step('Fill shipping form', async () => {
        await expect(shipping.page.getByTestId('shipping-email-input')).toHaveValue(process.env.EMAIL!);
        await shipping.fillShippingForm(FirstName, LastName, PhoneNumber, Address, City, PostalCode);
    });

    await test.step('Fill payment form', async () => {
        await payment.fillPaymentForm(CardNumber, CardHolder, CardExpiry, CardCvv);
    });
});

test('Checkout with account connected', async ({ shipping, login, payment }) => {

    await test.step('Login', async () => {
        await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    });

    await test.step('Access checkout', async () => {
        await shipping.accessCheckout();
    });

    await test.step('Fill shipping form', async () => {
        await expect(shipping.page.getByTestId('shipping-email-input')).toHaveValue(process.env.EMAIL!);
        await shipping.fillShippingForm(FirstName, LastName, PhoneNumber, Address, City, PostalCode);
    });

    await test.step('Fill payment form', async () => {
        await payment.fillPaymentForm(CardNumber, CardHolder, CardExpiry, CardCvv);
    });
});


