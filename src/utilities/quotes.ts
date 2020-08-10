import { MongoClient } from 'mongodb'

export default class Quotes {
  private client: any

  constructor() {
    this.setup()
  }

  private async setup(uri = 'mongodb://localhost:27017') {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
    }).catch((err) => console.log(err))
  }

  async getQuotes() {}
}
