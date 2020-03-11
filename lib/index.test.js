const moifetch = require('./index');

describe('moifetch', () => {
  describe('GET Requests', () => {
      test('should be a 200 Status Code', () => {
        moifetch('https://httpbin.org/get').then(res => {
          expect(res.statusCode).toBe(200);
        });
      });
  });

  test('should make a post request', () => {
    moifetch('https://httpbin.org/post', { method: 'POST' }).then(res => {
      expect(res.statusCode).toBe(200);
    });
  });

  test('should make a put request', () => {
    moifetch('https://httpbin.org/put', { method: 'PUT' }).then(res => {
      expect(res.statusCode).toBe(200);
    });
  });

  test('should make a delete request', () => {
    moifetch('https://httpbin.org/delete', { method: 'DELETE' }).then(res => {
      expect(res.statusCode).toBe(200);
    });
  });
});
