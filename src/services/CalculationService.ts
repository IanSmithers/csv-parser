import ICosts from "../interfaces/ICosts";
import IHeaders from "../interfaces/IHeaders";

export default class CalculationService {
    public static getJobsFromInputData(data: Array<object>): object[] {
        if (!data) return null;
        const headers = {
            totalPages: "Total Pages",
            colourPages: "Color Pages",
            doubleSided: "Double Sided",
            size: "Size",
        };
        const costs = {
            singleSided: {
                bw: 0.15,
                colour: 0.25,
            },
            doubleSided: {
                bw: 0.1,
                colour: 0.2,
            },
        };
        const jobs: object[] = [];

        for (let row of data) {
            jobs.push(this.processRow(row, headers, costs));
        }

        return jobs;
    }

    private static processRow(row: object, headers: IHeaders, costs: ICosts): object {
        const job = {};
        job["colourPages"] = parseInt(row[headers.colourPages]);
        job["doubleSided"] = Boolean(JSON.parse(row[headers.doubleSided]));
        job["totalPages"] = parseInt(row[headers.totalPages]);
        job["bwPages"] = job["totalPages"] - job["colourPages"];

        const cost = job["doubleSided"] ? costs.doubleSided : costs.singleSided;
        const jobCost: number = cost.colour * job["colourPages"] + cost.bw * job["bwPages"];

        job["cost"] = parseFloat(jobCost.toFixed(2));
        return job;
    }

}
