export const environment = {
  production: true,
  tracer: { 
    url: 'http://localhost:3000'
  },
  google: {
    geocoding: {
      url: 'http://localhost:4200/api/geocode',
      key: 'GEOCODING-API-KEY'
    }
  }
};