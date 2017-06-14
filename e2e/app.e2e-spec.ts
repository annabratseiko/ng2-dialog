import { Ng2DialogPage } from './app.po';

describe('ng2-dialog App', () => {
  let page: Ng2DialogPage;

  beforeEach(() => {
    page = new Ng2DialogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
