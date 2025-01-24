import CalculationService from "../../services/CalculationService";
import TestData from "../../__tests__/TestData";

const VALID_CLIENT_NAME = "papercut";

describe("CalculationService", () => {
  it("getJobsFromInputData: Should handle no data", () => {
    expect.assertions(1);
    const jobs = CalculationService.getJobsFromInputData(null, null, null);

    expect(jobs).toBeNull();
  });

  it("getJobsFromInputData: Should process default test data", () => {
    expect.assertions(1);
    const jobs = CalculationService.getJobsFromInputData(TestData.DEFAULT_DATA, TestData.DEFAULT_SCHEMA, VALID_CLIENT_NAME);

    expect(jobs).toEqual(TestData.DEFAULT_RESULT);
  });
});
