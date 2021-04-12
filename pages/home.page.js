import { Selector } from 'testcafe'
import BasePage from './base.page'


class Home extends BasePage{
  constructor() {
    super()
    this.homeLogo = Selector ('#header_logo [alt="My Store"]')
  }
  
}

export default new Home()
