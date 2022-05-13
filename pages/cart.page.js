import { Selector, t } from 'testcafe'
import BasePage from './base.page'
import catalogPage from './catalog.page'

class Cart extends BasePage {
  constructor () {
    super()
    this.agreeTermsButton = Selector('#form label').withText('I agree to the terms of service and will adhere to')
    this.confirmOrderButton = Selector('#cart_navigation span').withText('I confirm my order')
    this.proceedButton = Selector('#center_column span').withText('Proceed to checkout')
    this.proceedFormButton = Selector('#form span').withText('Proceed to checkout')
    this.bankWirePayButton = Selector('#HOOK_PAYMENT span').withText('(order processing will be longer)')
  }

  async buyItem () {
    await t
      .click(catalogPage.cartButton)
      .click(this.proceedButton)
      .click(this.proceedButton)
      .click(this.agreeTermsButton)
      .click(this.proceedFormButton)
      .click(this.bankWirePayButton)
      .click(this.confirmOrderButton)
  }
}

export default new Cart()
