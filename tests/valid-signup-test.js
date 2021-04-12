import signUp from '../pages/sign-up.page'


fixture`Getting Started`
  .page`http://automationpractice.com/index.php`


test('Valid Credentials Login Test', async t => {
      await signUp.createAccount()
    }) 

