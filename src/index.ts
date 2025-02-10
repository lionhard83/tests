import axios from "axios";
import { Character, Episode } from "./types";
type User = {
  id: number;
  name: string;
};
try {
  const response1 = await axios.get<Character>(
    "https://rickandmortyapi.com/api/character/1"
  );
  const response2 = axios.get<Episode>(response1.data.episode[0]);
  console.log((await response2).data);
} catch (err) {
  console.log(err);
}
