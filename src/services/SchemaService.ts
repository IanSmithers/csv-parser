const fs = require('fs').promises;
import path = require("path");

const SCHEMA_PATH = '../../assets/schema';

const supportedSchemas = [
    'papercut',
    'knifecut'
];

export default class SchemaService {
    public static async loadSchema(schemaName: string) {
        if(!schemaName) {
            console.log('Schema is null/undefined');
            return null;
        }
        
        if (!supportedSchemas.includes(schemaName)) {
            console.log(`Schema "${schemaName}" not supported`);
            return null;
        }

        const filePath = path.join(__dirname, SCHEMA_PATH, `${schemaName}.json`)

        return await this.loadSchemaDataFromDisk(filePath)
          .then((data) => {
              return data;
          });
    }

    private static async loadSchemaDataFromDisk<T>(path: string): Promise<T> {
        const file = await fs.readFile(path, "utf8");

        return JSON.parse(file);
    }
}