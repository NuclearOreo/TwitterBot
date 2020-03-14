import axios, { AxiosInstance } from 'axios'

export default class Quotes {
  client: AxiosInstance

  constructor() {
    this.client = axios.create()
  }
}
