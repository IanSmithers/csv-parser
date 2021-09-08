import CalculationService from "../services/CalculationService";
import TestData from "../services/__tests__/TestData";
import FileService from "../services/FileService";
import App from "../App";

describe("App", () => {
  it("run: Should call all expected functions and return correct result", async () => {
    FileService.readCSVToJSONArray = jest.fn().mockResolvedValue(TestData.PARSED_DEFAULT_CSV);
    CalculationService.getJobsFromInputData = jest.fn().mockReturnValue(TestData.DEFAULT_RESULT);

    const totalCost = await App.generateOutput(TestData.ARG_ARRAY_WITH_PATH);

    expect(FileService.readCSVToJSONArray).toBeCalledWith(TestData.ARG_ARRAY_WITH_PATH[2]);
    expect(CalculationService.getJobsFromInputData).toBeCalledWith(TestData.PARSED_DEFAULT_CSV);

    expect(totalCost).toEqual(64.1);
  });

});
