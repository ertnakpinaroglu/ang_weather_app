const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../App_Server/Server");

describe('WEATHER API TEST ', () => {
    it("GET WEATHER TEST", (done) => {
        chai.request(server).get("/getWeather").end((err, response) => {
            response.should.have.status(200);
            done();
        });
    });
});

