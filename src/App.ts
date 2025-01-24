import CalculationService from "./services/CalculationService";
import FileService from "./services/FileService";
import SchemaService from "./services/SchemaService";
import PdfFileService from "./services/PdfFileService";

export default class App {
    public static async generateOutput(processArgs: Array<any>) {
        const filename: string = processArgs[2];
        const client: string = processArgs[3];

        const fileContents = await FileService.readCSVToJSONArray(filename);
        const schema = await SchemaService.loadSchema(client);
        
        const jsonArray: object[] = CalculationService.getJobsFromInputData(fileContents, schema, client);
        
        // Send to PDF service to create a file
        PdfFileService.CreatePdfDocument(jsonArray);

        let totalCost = 0;
        for (let job of jsonArray) totalCost += job["cost"];
        totalCost = parseFloat(totalCost.toFixed(2));

        console.table(jsonArray);
        console.log(`Total Cost = $${totalCost}`);
        
        return totalCost;
    }
}
