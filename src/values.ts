export type Stop = {
  start: number; // Date string number
  stop?: number;
  plate: string;
  amount?: number;
};

export const stops: Stop[] = [
  {
    start: 1706680200000,
    plate: "AB123CD",
  },
  {
    start: 1706687400000,
    stop: 1706691000000,
    plate: "EF456GH",
    amount: 34.5,
  },
  {
    start: 1706694600000,
    stop: 1706698200000,
    plate: "IJ789KL",
    amount: 78.9,
  },
  {
    start: 1706701800000,
    stop: 1706705400000,
    plate: "MN012OP",
    amount: 22.4,
  },
  {
    start: 1706709000000,
    stop: 1706712600000,
    plate: "QR345ST",
    amount: 67.8,
  },
  {
    start: 1706716200000,
    stop: 1706719800000,
    plate: "UV678WX",
    amount: 19.99,
  },
  {
    start: 1706723400000,
    stop: 1706727000000,
    plate: "YZ901AB",
    amount: 55.5,
  },
  {
    start: 1706730600000,
    stop: 1706734200000,
    plate: "CD234EF",
    amount: 49.0,
  },
  {
    start: 1706737800000,
    stop: 1706741400000,
    plate: "GH567IJ",
    amount: 88.3,
  },
  {
    start: 1706745000000,
    stop: 1706748600000,
    plate: "KL890MN",
    amount: 23.75,
  },
  {
    start: 1706752200000,
    stop: 1706755800000,
    plate: "OP123QR",
    amount: 39.99,
  },
  {
    start: 1706759400000,
    stop: 1706763000000,
    plate: "ST456UV",
    amount: 62.0,
  },
  {
    start: 1706766600000,
    stop: 1706770200000,
    plate: "WX789YZ",
    amount: 18.9,
  },
  {
    start: 1706773800000,
    stop: 1706777400000,
    plate: "AB012CD",
    amount: 75.2,
  },
  {
    start: 1706781000000,
    stop: 1706784600000,
    plate: "EF345GH",
    amount: 33.0,
  },
  {
    start: 1706788200000,
    stop: 1706791800000,
    plate: "IJ678KL",
    amount: 52.7,
  },
  {
    start: 1706795400000,
    stop: 1706799000000,
    plate: "MN901OP",
    amount: 29.99,
  },
  {
    start: 1706802600000,
    stop: 1706806200000,
    plate: "QR234ST",
    amount: 41.5,
  },
  {
    start: 1706809800000,
    stop: 1706813400000,
    plate: "UV567WX",
    amount: 89.4,
  },
  {
    start: 1706817000000,
    stop: 1706820600000,
    plate: "YZ890AB",
    amount: 27.8,
  },
];
