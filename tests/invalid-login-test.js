import signIn from '../pages/sign-in.page'


fixture`Getting Started`
  .page`http://automationpractice.com/index.php`

  
  test('Valid Credentials Login Test', async t => {
    await signIn.withAccount("testemail123", "password1")
  
})
