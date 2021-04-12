import catalogPage from '../pages/catalog.page'


fixture`Getting Started`
  .page`http://automationpractice.com/index.php`
  
  
  test('Site Flow', async t => {
    await catalogPage.flowSite()

})
