declare var require: any;

export const environment = {
  backendUrl: 'http://localhost:3000',

  production: false,
  version: require('../../package.json').version,
};
