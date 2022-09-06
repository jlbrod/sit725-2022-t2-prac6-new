var expect = require("chai").expect; 
var request = require("request");

//it test add two numbers
describe("Add Two Numbers", function() {
    var url = "http://localhost:3000/addTwoNumbers/3/5";
    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });


//it test api result
it("returns statusCode key in body to check if api give right result should be 200", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.statusCode).to.equal(200);
        done()
      });
});


//it return result as number
it("returns the result as number", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.result).to.be.a('number');
        done()
      });
});

//it test returns result = 8
it("returns the result equal to 8", function(done) {
  request(url, function(error, response, body) {
      body = JSON.parse(body)
      expect(body.result).to.equal(8);
      done()
    });
});

//returns result not = 15
it("returns the result not equal to 15", function(done) {
request(url, function(error, response, body) {
    body = JSON.parse(body)
    expect(body.result).to.not.equal(15);
    done()
  });
});
});

//it test add two strings
describe("Add Two strings", function() {
var url = "http://localhost:3000/addTwoNumbers/a/b";
it("should return status 200", function(done) {
    request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done()
      });
});

//it test check if api gives right result
it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.statusCode).to.equal(400);
        done()
      });
});

//it test result returns as null
it("returns the result as null", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.result).to.be.a('null');
        done()
      });
});
});

//it test Add two strings
describe("Add Two strings", function() {
var url = "http://localhost:3000/api/projects";
it("should return status 200", function(done) {
    request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done()
      });
});
it("returns the result as array", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.data).to.be.an('array');
        done()
      });
});
});