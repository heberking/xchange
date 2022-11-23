declare var require: any;

export const environment = {
  backendUrl: 'http://localhost:3000',

  ENDPOINT_SYMBOLS: '/symbols',
  ENDPOINT_CONVERT: '/exchange-rates',
  ENDPOINT_CHANGE_RATE: '/change-rate',

  production: true,
  version: require('../../package.json').version,
};
