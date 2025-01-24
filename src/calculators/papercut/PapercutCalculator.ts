import Calculator from "../Calculator";
import { PapercutSchema } from "../../interfaces/papercut/PapercutSchema";

export default class PapercutCalculator extends Calculator<PapercutSchema> {
    public processRow = (row: object, schema: PapercutSchema) => {
        const headers = schema.headers;
        const costs = schema.costs;
        
        const calculatedCosts = {};
        calculatedCosts["colourPages"] = parseInt(row[headers.colourPages]);
        calculatedCosts["doubleSided"] = Boolean(JSON.parse(row[headers.doubleSided]));
        calculatedCosts["totalPages"] = parseInt(row[headers.totalPages]);
        calculatedCosts["bwPages"] = calculatedCosts["totalPages"] - calculatedCosts["colourPages"];

        const cost = calculatedCosts["doubleSided"] ? costs.doubleSided : costs.singleSided;
        const jobCost: number = cost.colour * calculatedCosts["colourPages"] + cost.bw * calculatedCosts["bwPages"];

        calculatedCosts["cost"] = parseFloat(jobCost.toFixed(2));
        return calculatedCosts;
    }
}