import axios from "axios";
import { Episode } from "./types";
const baseUrl = "https://rickandmortyapi.com/api/episode";

let episodes: Episode[] = [];
console.time();

const responses = await Promise.all(
  [1, 2, 3].map((page) =>
    axios.get<{ results: Episode[] }>(`${baseUrl}?page=${page}`)
  )
);
episodes = responses.map((item) => item.data.results).flat();
console.log(episodes.length);
console.timeEnd();
// episodes = episodes.concat(response3.data.results);

// console.log(episodes.length);

const findByName = (title: string) =>
  episodes.filter((item) =>
    item.name.toLowerCase().includes(title.toLowerCase())
  );

const findByRange = (from: string, to: string) =>
  episodes.filter(
    (item) =>
      Date.parse(from) <= Date.parse(item.air_date) &&
      Date.parse(to) >= Date.parse(item.air_date)
  );

// console.log(findByName("Rick").length);
// console.log(findByRange("May 29, 2020", "May 31, 2020").length);
