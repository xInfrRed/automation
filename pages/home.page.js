import { Selector } from 'testcafe'


class Home {
  constructor() {
    this.homeLogo = Selector ('#header_logo [alt="My Store"]')
  }
}

export default new Home()
