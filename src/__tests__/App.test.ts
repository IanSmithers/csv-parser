import CalculationService from "../services/CalculationService";
import TestData from "./TestData";
import FileService from "../services/FileService";
import App from "../App";

const VALID_CLIENT_NAME = "papercut";

describe("App", () => {
  it("run: Should call all expected functions and return correct result", async () => {
    FileService.readCSVToJSONArray = jest.fn().mockResolvedValue(TestData.PARSED_DEFAULT_CSV);
    CalculationService.getJobsFromInputData = jest.fn().mockReturnValue(TestData.DEFAULT_RESULT);

    const totalCost = await App.generateOutput(TestData.ARG_ARRAY_WITH_PATH);

    expect(FileService.readCSVToJSONArray).toBeCalledWith(TestData.ARG_ARRAY_WITH_PATH[2]);
    expect(CalculationService.getJobsFromInputData).toBeCalledWith(TestData.PARSED_DEFAULT_CSV, TestData.DEFAULT_SCHEMA, VALID_CLIENT_NAME);

    expect(totalCost).toEqual(64.1);
  });

});
