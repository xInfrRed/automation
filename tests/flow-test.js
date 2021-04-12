import cartPage from '../pages/cart.page'
import catalogPage from '../pages/catalog.page'
import signIn from "../pages/sign-in.page"


fixture`Getting Started`
  .page`http://automationpractice.com/index.php`
  
  
  test('Site Flow', async t => {
    await signIn.withAccount("testemail123@hotmail.com", "password1")
    await catalogPage.filters()
    await catalogPage.addItem()
    await cartPage.buyItem()

})
