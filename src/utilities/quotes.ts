import { MongoClient } from 'mongodb'

interface Quote {
  _id: string
  QUOTE: string
  AUTHOR: string
  GENRE: string
}

export default class Quotes {
  private client: any
  private uri = 'mongodb://localhost:27017'

  constructor(uri?: string) {
    if (uri) this.uri = uri
  }

  async getRandomQuote(): Promise<Quote> {
    try {
      if (this.client === undefined) {
        this.client = await MongoClient.connect(this.uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }).catch((err: any) => console.log(err))
      }

      const collection = await this.client.db('bot').collection('Quotes')
      const record = await collection
        .aggregate([{ $sample: { size: 1 } }])
        .toArray()

      return record[0] as Quote
    } catch (error) {
      throw new Error(error)
    }
  }

  async close(): Promise<void> {
    await this.client.close()
  }
}
