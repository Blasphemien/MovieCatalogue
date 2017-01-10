import { BlackWidowMovieIndexerPage } from './app.po';

describe('black-widow-movie-indexer App', function() {
  let page: BlackWidowMovieIndexerPage;

  beforeEach(() => {
    page = new BlackWidowMovieIndexerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
