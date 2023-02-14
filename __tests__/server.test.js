const { app } = require("../server.js");
const supertest = require('supertest');
const mockRequest = supertest(app);

describe("API server", () => {
    // you can use it or test
    it("handle the root path", async () => {
        const response = await mockRequest.get("/");
        //test server.js
        expect(response.status).toBe(200);
        expect(response.text).toBeTruthy();
        expect(response.text).toEqual("this is the logger");
    });

    //test notFound(500.js)

    test("handles invalid requests", async () => {
        const response = await mockRequest.get("/foo");
        expect(response.status).toEqual(404);
    });

    test("handles error", async () => {
        const response = await mockRequest.get("/bad");
        console.log(response);
        expect(response.status).toEqual(500);
        expect(response.body.route).toEqual("/bad");
    });

});