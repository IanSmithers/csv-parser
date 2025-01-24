import SchemaService from "../SchemaService";
import TestData from "../../__tests__/TestData";

const UNSUPPORTED_SCHEMA_STRING = "unsupported_schema_string";
const SUPPORTED_SCHEMA_STRING = "papercut";

describe("BrandingService", () => {
  it("loadSchema: unsupported schema", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    expect.assertions(2);

    const schema = await SchemaService.loadSchema(UNSUPPORTED_SCHEMA_STRING);

    expect(consoleSpy).toHaveBeenCalledWith("Schema \"unsupported_schema_string\" not supported");
    expect(schema).toBeNull();
  });

  it("loadSchema: null", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    expect.assertions(2);

    const schema = await SchemaService.loadSchema(null);

    expect(consoleSpy).toHaveBeenCalledWith("Schema is null/undefined");
    expect(schema).toBeNull();
  });

  // NOTE: This was raised in the interview as needing a mock to avoid needing access to actual valid client schema and costings.
  it("loadSchema: supported schema", async () => {
    expect.assertions(1);

    const schema = await SchemaService.loadSchema(SUPPORTED_SCHEMA_STRING);

    expect(schema).toEqual(TestData.GOOD_SCHEMA_RESULT);
  });
})