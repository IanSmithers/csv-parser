import FileService from "../FileService";
import TestData from "./TestData";

describe("FileService", () => {
  it("readCSVToJSONArray: Should read and parse a csv to JSON", async () => {
    expect.assertions(1);

    const parsedCSV = await FileService.readCSVToJSONArray(TestData.ARG_ARRAY_WITH_PATH[2]);
    expect(parsedCSV).toEqual(TestData.PARSED_DEFAULT_CSV);
  });

});
