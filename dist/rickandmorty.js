import axios from "axios";
let episodes = [];
console.time();
const responses = await Promise.all([
    axios.get("https://rickandmortyapi.com/api/episode?page=1"),
    axios.get("https://rickandmortyapi.com/api/episode?page=2"),
    axios.get("https://rickandmortyapi.com/api/episode?page=3"),
]);
episodes = responses.map((item) => item.data.results).flat();
console.log(episodes.length);
console.timeEnd();
// episodes = episodes.concat(response3.data.results);
// console.log(episodes.length);
// const findByName = (title: string) =>
//   episodes.filter((item) =>
//     item.name.toLowerCase().includes(title.toLowerCase())
//   );
// const findByRange = (from: string, to: string) =>
//   episodes.filter(
//     (item) =>
//       Date.parse(from) <= Date.parse(item.air_date) &&
//       Date.parse(to) >= Date.parse(item.air_date)
//   );
// console.log(findByName("Rick").length);
// console.log(findByRange("May 29, 2020", "May 31, 2020").length);
