const request = require('supertest');
const app =  require("../src/app");

test('/route', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('content-type', /html/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
test('/route', (done) => {
    request(app)
      .get('/gggg')
      .expect(404)
      .expect('content-type', /html/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });