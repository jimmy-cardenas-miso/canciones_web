// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
