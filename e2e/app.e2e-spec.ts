import { FrontendArchPage } from './app.po';

describe('frontend-arch App', () => {
  let page: FrontendArchPage;

  beforeEach(() => {
    page = new FrontendArchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
