import { MovieDatabasePage } from './app.po';

describe('movie-database App', function() {
  let page: MovieDatabasePage;

  beforeEach(() => {
    page = new MovieDatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
