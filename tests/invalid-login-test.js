import basePage from '../pages/base.page'
import signIn from '../pages/sign-in.page'

fixture`Getting Started`
  .page`http://automationpractice.com/index.php`

test('Invalid Credentials Login Test', async t => {
  await t
    .click(signIn.loginButton)
    .typeText(signIn.emailTextField, 'fakehotmail.com')
    .typeText(signIn.passwordTextField, 'password1')
    .click(signIn.submitButton)
})
