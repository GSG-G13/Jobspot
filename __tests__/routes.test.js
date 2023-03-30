const request = require('supertest');
const app =  require("../src/app");

test('/route', (done) => {
    requset(app)
      .get('/')
      .expect(200)
      .expect('content-type', /html/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
test('/route', (done) => {
    requset(app)
      .get('/')
      .expect(200)
      .expect('content-type', /html/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });