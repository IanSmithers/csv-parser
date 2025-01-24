import PapercutCalculator from "../calculators/papercut/PapercutCalculator";
import KnifecutCalculator from "../calculators/knifecut/KnifecutCalculator";
import Calculator from "../calculators/Calculator";

type BrandCalculators = {[key: string]: Calculator<unknown>};

// Function map of clients -> client cost calculators
const brandCalculators: BrandCalculators = {
    "papercut": new PapercutCalculator(),
    "knifecut": new KnifecutCalculator(),
}

export default class CalculationService {
    public static getJobsFromInputData(printReport: Array<object>, schema: unknown, client: string): object[] {
        if (!printReport || !schema) return null;

        const calculator = this.getBrandingCalculator(client);
        
        const jobs: object[] = [];

        for (let row of printReport) {
            jobs.push(calculator.processRow(row, schema));
        }

        return jobs;
    }
    
    private static getBrandingCalculator(clientName: string) {
        try {
            return brandCalculators[clientName];
        }
        catch (e) {
            console.error(e);
        }
    }
}
