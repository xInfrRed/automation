import { Selector, t } from 'testcafe'
import signIn from "./sign-in.page"
import Home from "./home.page"


class Catalog {
  constructor() {
    this.womenOption = Selector ('header a').withText('WOMEN')
    this.topsOption = Selector ('#subcategories .replace-2x')
    this.exampleShirtOption = Selector ('#center_column .replace-2x.img-responsive')
    this.cartAddButton = Selector ('#add_to_cart span').withText('Add to cart')
    this.cartButton = Selector ('header a').withText('Cart 1 Product')
    this.continueShoppingButton = Selector ('header span').withText('Continue shopping').nth(1)
    this.proceedButton = Selector ('#center_column span').withText('Proceed to checkout')
    this.proceedFormButton = Selector ('#form span').withText('Proceed to checkout')
    this.bankWirePayButton = Selector ('#HOOK_PAYMENT span').withText('(order processing will be longer)')
    this.iframe = Selector ("iframe")
    this.agreeTermsButton = Selector ('#form label').withText('I agree to the terms of service and will adhere to')
    this.confirmOrderButton = Selector ('#cart_navigation span').withText('I confirm my order')
  }

 
  async flowSite() {
      await signIn.withAccount("testemail123@hotmail.com", "password1")
      await t 
      .click(Home.homeLogo)
      .click(this.womenOption)
      .click(this.topsOption)
      .click(this.exampleShirtOption)
      .switchToIframe(this.iframe)
      .click(this.cartAddButton)
      .switchToMainWindow()
    //   .debug()
      .click(this.continueShoppingButton)
      .click(this.cartButton)
      .click(this.proceedButton)
      .click(this.proceedButton)
      .click(this.agreeTermsButton)
      .click(this.proceedFormButton)
      .click(this.bankWirePayButton)
      .click(this.confirmOrderButton)
    


      .wait(3000) 
  }
}

export default new Catalog()
// this.cartAddButton = Selector ('#add_to_cart span').withText('Add to cart')



