import { BtPage } from './app.po';

describe('bt App', () => {
  let page: BtPage;

  beforeEach(() => {
    page = new BtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
