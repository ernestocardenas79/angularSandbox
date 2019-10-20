// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyDCIWhFeE9t5DkKRtUHwm-xRLfBPRe4A7g',
  authDomain: 'ingresoegresoapp-de05d.firebaseapp.com',
  databaseURL: 'https://ingresoegresoapp-de05d.firebaseio.com',
  projectId: 'ingresoegresoapp-de05d',
  storageBucket: 'ingresoegresoapp-de05d.appspot.com',
  messagingSenderId: '944897827732',
  appId: '1:944897827732:web:6cf8f2b8db3eaf2c9e2581'
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
