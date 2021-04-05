import page from './page-model'

fixture`Getting Started`
  .page`http://automationpractice.com/index.php`

test('Valid Credentials Login Test', async t => {
  await t
    .click(page.loginButton)
    .typeText(page.emailTextField, 'testemail123@hotmail.com')
    .typeText(page.passwordTextField, 'password1')
    .click(page.submitButton)
})
