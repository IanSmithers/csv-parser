export type PapercutSchema = {
  brand: string,
  headers: Headers,
  costs: Costs
}

export type Headers = {
  totalPages: string;
  colourPages: string;
  doubleSided: string;
  size: string;
}

export type Costs = {
    singleSided: {
      bw: number;
      colour: number;
    };
    doubleSided: {
      bw: number;
      colour: number;
    };
}