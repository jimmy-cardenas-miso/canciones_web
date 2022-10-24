import { ArtistListPage } from './artist-list.po';

describe(' Artist Lists Pages', () => {
  let page: ArtistListPage;
  beforeEach(() => {
    page = new ArtistListPage();
  });
  it('should Artists list', () => {
    page.navigateTo();

    expect(page.getArtistList()).toEqual('Queen');
  });
});
