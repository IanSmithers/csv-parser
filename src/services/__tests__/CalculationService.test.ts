import CalculationService from "../CalculationService";
import TestData from "./TestData";

describe("CalculationService", () => {
  it("getJobsFromInputdata: Should handle no data", () => {
    expect.assertions(1);
    const jobs = CalculationService.getJobsFromInputData(null);

    expect(jobs).toBeNull();
  });

  it("getJobsFromInputdata: Should process default test data", () => {
    expect.assertions(1);
    const jobs = CalculationService.getJobsFromInputData(TestData.DEFAULT_DATA);

    expect(jobs).toEqual(TestData.DEFAULT_RESULT);
  });
});
