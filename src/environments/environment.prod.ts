export const environment = {
  production: true,
  resources: {
    base_img: './assets/images/'
  },
  api: {
    server_url: 'https://backend-202112-21.herokuapp.com',
    services: {
      collectors: {
        base: '/collectors',
        add_musician: '/collectors/{collectorId}/musicians/{musicianId}',
        add_album: '/collectors/{collectorId}/albums/{albumId}'
      },
      artists: '/musicians',
      bands: {
        base: '/bands',
        add_musician: '/bands/{bandId}/musicians/{musicianId}'
      },
      albums: '/albums',
      comments: '/albums/{albumId}/comments'
    }
  }
};
