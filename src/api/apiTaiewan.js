import axios from "axios";

const useTaiwanArea = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});
//台灣縣市鄉鎮區api
export const apiGetTaiwanArea = () => useTaiwanArea.get("/courses/list");
//  baseURL: "https://demeter.5fpro.com/tw/zipcodes.json"
