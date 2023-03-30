const request = require('supertest');
const router = require("express").Router();
const app =  require("./app")

// describe ("test error files", () => 
    test('/puplic/index.html expect status to be 200', (done) => 
         request(app)
           .get("/puplic/index.html")
           .expect(200)
           .end((err, res) => {
               if(err)return done(err);
           expect(res.statusCode).toBe(200);
           return done();
           }));


    // test('/puplic/index.html/ff expect status to be 404', (done) => {
    //     request(app)
    //        .get("/puplic/index.html/ff")
    //        .expect(404)
    //        .end((err, res) => {
    //            if(err)return done(err);
    //        expect(res.statusCode).toBe(404);
    //        return done();
    //        });
    //    });

    // });