import * as fs from "fs";
import Papa from "papaparse";

type Flight = {
  from: string;
  to: string;
  timeToDeparture: string;
  timeToArrival: string;
  flightDuration: string;
  cityFrom: string;
  cityTo: string;
  company: string;
  airplane: string;
};

let csvData = fs.readFileSync("./flights.csv", "utf-8");

csvData = csvData
  .replace("Aeroporto di Partenza", "from")
  .replace("Aeroporto di Arrivo", "to")
  .replace("Orario di Partenza", "timeToDeparture")
  .replace("Orario di Arrivo", "timeToArrival")
  .replace("Durata Volo (minuti)", "flightDuration")
  .replace("Città di Partenza", "cityFrom")
  .replace("Città di Arrivo", "cityTo")
  .replace("Compagnia", "company")
  .replace("Aeromobile", "Airplane");

const parsedData = Papa.parse<Flight>(csvData, {
  header: true, // se il tuo file CSV ha un header
  skipEmptyLines: true,
});

const flights = parsedData.data;

export const showAllCompanies = () => {
  const set = flights.reduce((acc, item) => {
    acc.add(item.company);
    return acc;
  }, new Set<string>());
  return Array.from(set);
};

export const showFlights = (from?: string, to?: string) => {
  if (from === undefined && to === undefined) {
    return flights;
  } else if (to === undefined) {
    return flights.filter((item) => item.from === from);
  } else {
    return flights.filter((item) => item.from === from && item.to === to);
  }
};

console.log(showFlights("MXP"));

console.log(showFlights("MXP", "DXB"));
