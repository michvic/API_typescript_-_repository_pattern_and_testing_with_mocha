import { expect } from 'chai';
import supertest from 'supertest'
import app from "./../../src/server"


const request = supertest(app);

describe("API Route index", () => {

    // before((done) => {})
    // beforeEach((done) => {})
    // after((done) => {})
    // afterEach((done) => {})

    describe('GET / ', () => {

        it("Return message It's Work", (done) => {
            request.get('/')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body.message).to.eql("It's Work");
                    done(err);
                });
        });

    });
})

