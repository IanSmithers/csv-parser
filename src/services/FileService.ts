import * as csv from "csv-parser";
import * as fs from "fs";

export default class FileService {
  static async readCSVToJSONArray(filename: string): Promise<Array<object>> {
    const results = [];
    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(filename);

      readStream.pipe(
        csv({
          mapHeaders: ({ header, index }) => header.trim(),
        })
          .on("data", (data) => results.push(data))
          .on("end", () => {
            resolve(results);
          })
      );
    });
  }
}
