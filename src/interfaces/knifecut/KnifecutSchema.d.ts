export type KnifecutSchema = {
  brand: string,
  headers: Headers,
  costs: Costs
}

export type Headers = {
  pagesTotal: string;
  colourTotal: string;
  duplex: string;
}

export type Costs = {
  singleSidedColour: number;
  singleSidedBw: number;
  doubleSidedColour: number;
  doubleSidedBw: number;
}