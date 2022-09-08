import axios from "axios";

const useTaiwanArea = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/",
});
//台灣縣市鄉鎮區api
export const apiGetTaiwanArea = () => useTaiwanArea.get("/city/list");
//  baseURL: "https://demeter.5fpro.com/tw/zipcodes.json"
