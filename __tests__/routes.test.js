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
