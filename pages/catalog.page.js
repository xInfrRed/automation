import { Selector, t } from 'testcafe'
import Home from './home.page'
import BasePage from './base.page'

class Catalog extends BasePage {
  constructor () {
    super()
    this.womenOption = Selector('header a').withText('WOMEN')
    this.topsOption = Selector('#subcategories .replace-2x')
    this.exampleShirtOption = Selector('#center_column .replace-2x.img-responsive')
    this.cartAddButton = Selector('#add_to_cart span').withText('Add to cart')
    this.cartButton = Selector('header a').withText('Cart 1 Product')
    this.continueShoppingButton = Selector('header span').withText('Continue shopping').nth(1)
    this.iframe = Selector('iframe', { timeout: 60000 })
  }

  async filters () {
    await t
      .click(Home.homeLogo)
      .click(this.womenOption)
      .click(this.topsOption)
  }

  async addItem () {
    const iframeElement =
        await this.iframe.with({ visibilityCheck: true })
    await t
      .click(this.exampleShirtOption)
    await t.switchToIframe(iframeElement)

      .click(this.cartAddButton)
      .switchToMainWindow()
      .click(this.continueShoppingButton)
  }
}
export default new Catalog()
