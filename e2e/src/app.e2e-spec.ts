import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('Artist List', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  xit('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('rocklist app is running!');
  });

  it('should be able to create new playlists', async () => {
    await page.navigateTo();
    const menuBtn = element(by.css('[aria-label="menu button"]'));
    menuBtn.click();
    element(by.buttonText('Playlists')).click();
    element(by.id('newList')).sendKeys('Test Lijst!');
    element(by.buttonText('Create')).click();
    // expect(element(by.tagName('span')).getText()).toEqual('Test Lijst!');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
