import axios from "axios"

export const api = axios.create({
  baseURL: "https://food-explorer-backend-production-df7b.up.railway.app"
})