const app = require('../../src/app');

describe('\'elk\' service', () => {
  it('registered the service', () => {
    const service = app.service('elk');
    expect(service).toBeTruthy();
  });
});
