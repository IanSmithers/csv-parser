export default class TestData {
  static DEFAULT_DATA = [
    { "Total Pages": "25", "Color Pages": " 10", "Double Sided": " false" },
    { "Total Pages": "55", "Color Pages": " 13", "Double Sided": " true" },
    { "Total Pages": "502", "Color Pages": " 22", "Double Sided": " true" },
    { "Total Pages": "1", "Color Pages": " 0", "Double Sided": " false" },
  ];

  static BAD_TOTAL = [{ "Total Pages": "25", "Color Pages": "40", "Double Sided": " false" }];

  static DEFAULT_RESULT = [
    { bwPages: 15, colourPages: 10, cost: 4.75, doubleSided: false, totalPages: 25 },
    { bwPages: 42, colourPages: 13, cost: 6.8, doubleSided: true, totalPages: 55 },
    { bwPages: 480, colourPages: 22, cost: 52.4, doubleSided: true, totalPages: 502 },
    { bwPages: 1, colourPages: 0, cost: 0.15, doubleSided: false, totalPages: 1 },
  ];

  static PARSED_DEFAULT_CSV = [
    { "Color Pages": " 10", "Double Sided":"false", "Total Pages": "25" },
    { "Color Pages": " 13", "Double Sided":"true", "Total Pages": "55" },
    { "Color Pages": " 22", "Double Sided":"true", "Total Pages": "502" },
    { "Color Pages": " 0", "Double Sided":"false", "Total Pages": "1" },
  ];

  static GOOD_RESULT = [
    {
      colourPages: 10,
      doubleSided: false,
      totalPages: 25,
      bwPages: 15,
      cost: 4.75,
    },
    {
      colourPages: 13,
      doubleSided: true,
      totalPages: 55,
      bwPages: 42,
      cost: 12.3,
    },
  ];

  static ARG_ARRAY_NO_PATH = ["node", "folder-to-script"];
  static ARG_ARRAY_WITH_PATH = ["node", "folder-to-script", "./assets/input/sample-1.csv"];
}
