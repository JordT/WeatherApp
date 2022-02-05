import app from "../index";
import request from "supertest";

describe("GET /api/weather/Paris", () => {
  it("successfully returns weather for Paris", async () => {
    const result = await request(app).get("/api/weather/Paris");
    expect(result.text).toContain("timezone\":\"Europe/Paris\"");
    expect(result.statusCode).toEqual(200);
  });
});