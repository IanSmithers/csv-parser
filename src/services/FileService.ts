import csv from "csv-parser";
import { createReadStream } from "fs";

export default class FileService {
  static async readCSVToJSONArray(filename: string): Promise<Array<object>> {
    const results = [];
    return new Promise((resolve, reject) => {
      const readStream = createReadStream(filename);

      readStream.pipe(
        csv({
          mapHeaders: ({ header, index }) => header.trim(),
          mapValues: ({ header, index, value}) => value.trim()
        })
          .on("data", (data) => results.push(data))
          .on("end", () => {
            resolve(results);
          })
      );
    });
  }
}
