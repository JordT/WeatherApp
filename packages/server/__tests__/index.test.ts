import app from "../index";
import request from "supertest";

describe("GET /api/weather/", () => {
  it("successfully returns weather for Paris", async () => {
    const result = await request(app).get("/api/weather/48.85341/7.41667");
    expect(result.text).toContain("timezone\":\"Europe/Paris\"");
    expect(result.statusCode).toEqual(200);
  });
});