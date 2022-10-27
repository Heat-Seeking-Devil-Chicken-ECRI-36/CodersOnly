const request = require("supertest");

const server = "http://localhost:3000";

describe("Route integration", () => {
  describe("/", () => {
    describe("GET", () => {
      xit("responds with 200 status and text/html content type", () => {
        return request(server)
          .get("/")
          .expect("Content-Type", "text/html; charset=utf-8")
          .expect(200);
      });
    });
  });
});

describe("Route integration", () => {
  describe("/api/verification", () => {
    describe("POST", () => {
      it("responds with 201 status and application/json content type", () => {
        return request(server)
          .post("/api/verification")
          .send({ username: "chris", password: "chris" })
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(201)
      });
      it("responds with appropriate json body", () => {
        return request(server)
          .post("/api/verification")
          .send({ username: "chris", password: "chris" })
          .set("accept", "application/json")
          .then((res) => {
            expect(res.body).toEqual({
              age: 23,
              comment: "hi",
              location: "New York",
              name: "wendy",
              prolang: "javascript",
              url: "nothing",
            });
          });
      });
    });
  });
});
