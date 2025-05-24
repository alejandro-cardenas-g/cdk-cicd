import { handler } from "../services/hello";

describe("hello", () => {
  test("should return 200", async () => {
    const result = await handler({}, {});
    expect(result.statusCode).toBe(200);
  });
});
