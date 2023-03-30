<<<<<<< HEAD
const request = require("supertest");
const app = require("../src/app");

test("/jobs/:word", (done) => {
  request(app)
    .get("/jobs/cook")
    .expect(200)
    .expect("Content-Type", /json/)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body.length).toBeGreaterThan(2);
      done();
    });
});
=======
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
>>>>>>> e31ec503513895bc1cec7f100f35cbf6fbe70e04
