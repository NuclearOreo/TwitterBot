import { MongoClient } from 'mongodb'

export default class Quotes {
  private client: any
  private uri = 'mongodb://localhost:27017'

  constructor(uri?: string) {
    if (uri) this.uri = uri
  }

  async getQuotes(): Promise<void> {
    if (this.client === undefined) {
      this.client = await MongoClient.connect(this.uri, {
        useNewUrlParser: true,
      }).catch((err: any) => console.log(err))
    }

    const db = await this.client.db('bot')
  }

  async close(): Promise<void> {
    await this.client.close()
  }
}
