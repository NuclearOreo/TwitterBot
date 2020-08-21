import { MongoClient } from 'mongodb'

interface Quote {
  _id: string
  QUOTE: string
  AUTHOR: string
  GENRE: string
}

export default class Quotes {
  private client: any
  private uri: string

  constructor(uri?: string) {
    if (process.env.NODE_ENV === 'production')
      this.uri = 'mongodb://mongodb:27017'
    else this.uri = 'mongodb://localhost:27017'

    console.log('*****************************************' + this.uri)

    if (uri) this.uri = uri
  }

  // Grab Random Quote from MongoDB
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

  // Close MongoDB Connection
  async close(): Promise<void> {
    await this.client.close()
  }
}
