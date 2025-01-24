import Calculator from "../Calculator";
import { KnifecutSchema } from "../../interfaces/knifecut/KnifecutSchema";

export default class KnifeCalculator extends Calculator<KnifecutSchema> {
    processRow: (row: object, schema: KnifecutSchema) => {
        // do some specific things here that only knifecut does when calculating costs
    };
}