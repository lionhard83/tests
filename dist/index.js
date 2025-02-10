import axios from "axios";
try {
    const response1 = await axios.get("https://rickandmortyapi.com/api/character/1");
    const response2 = axios.get(response1.data.episode[0]);
    console.log((await response2).data);
}
catch (err) {
    console.log(err);
}
