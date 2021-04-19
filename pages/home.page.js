import { Selector } from 'testcafe'
import BasePage from './base.page'

class Home extends BasePage {
  constructor () {
    super()
    this.homeLogo = Selector('header .logo.img-responsive')
  }
}

export default new Home()
