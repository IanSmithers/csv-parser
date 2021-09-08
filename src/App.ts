import CalculationService from "./services/CalculationService";
import FileService from "./services/FileService";

export default class App {
    public static async generateOutput(processArgs: Array<any>) {
        const filename = processArgs.slice(2)[0];

        const fileContents = await FileService.readCSVToJSONArray(filename);
        const jobs: object[] = CalculationService.getJobsFromInputData(fileContents);

        let totalCost = 0;
        for (let job of jobs) totalCost += job["cost"];

        console.table(jobs);
        console.log(`Total Cost = $${totalCost.toFixed(2)}`);
        return totalCost;
    }
}
