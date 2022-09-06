var expect = require("chai").expect; 
var request = require("request");

describe("Add Two Numbers", function(){
    var url = "https://localhost:3000/addNumber/2/3";
    it("return status 200 to check if the api works", function(done){
        request(url, function(err, res, body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});