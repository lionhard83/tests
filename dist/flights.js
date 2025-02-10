import * as fs from "fs";
import Papa from "papaparse";
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
const parsedData = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
});
const flights = parsedData.data;
export const showAllCompanies = () => {
    const set = flights.reduce((acc, item) => {
        acc.add(item.company);
        return acc;
    }, new Set());
    return Array.from(set);
};
export const showFlights = (from, to) => {
    if (from === undefined && to === undefined) {
        return flights;
    }
    else if (to === undefined) {
        return flights.filter((item) => item.from === from);
    }
    else {
        return flights.filter((item) => item.from === from && item.to === to);
    }
};
console.log(showFlights("MXP"));
console.log(showFlights("MXP", "DXB"));
