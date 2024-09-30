import axios from 'axios'

export const BASE_URL = 'http://localhost:4000/api/'

export const baseAxios = axios.create({
  baseURL: BASE_URL,
})
