import { Stop, stops } from "./values";

const newParking = (newPlate: string) => {
  stops.push({ plate: newPlate, start: Date.now() });
};

const closeParking = (newPlate: string) => {
  const park = stops.find(
    (item) => item.plate === newPlate && item.stop === undefined
  );
  if (park) {
    park.stop = Date.now();
    park.amount = (park.stop - park.start) * 0.02;
  }
};

const findCurrent = (current: boolean) => {
  return stops.filter((item) =>
    current ? item.stop === undefined : item.stop !== undefined
  );
};

const findByPlate = (plate: string) => {
  return stops.filter((item) => item.plate === plate);
};

const findByPlateAndCurrent = (current?: boolean, plate?: string) => {};

type OptionFilter = { current?: boolean; plate?: string };

const show = (option?: OptionFilter) => {
  if (!option) {
    return stops;
  }
  let filteredStops: Stop[] = [...stops];

  if (option.plate) {
    filteredStops = filteredStops.filter((item) => item.plate === option.plate);
  }
  if (option.current) {
    filteredStops = filteredStops.filter((item) => !item.stop);
  }
  return filteredStops;
};

newParking("GG005VA");

// console.log(show({ current: true }));

// console.log(show({ current: true, plate: "GG005VA" }));

// console.log(show());

console.log(show({ plate: "GG005VA" }));

closeParking("GG005VA");

// console.log(show());

// const arr = [5, 5, 6];

// let v = arr.find((item) => item % 2 === 0);
// if (v) {
//   v++;
// }
// console.log(arr); // 5 5 6 o 5 5 7?
