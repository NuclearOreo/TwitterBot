import Twitter from 'twitter'
import Event from './types/event'
import randomCity from './utilities/randomCity'
import Quotes from './utilities/quotes'

require('dotenv').config()

export default class Bot {
  private client: Twitter
  private quotes: Quotes

  constructor() {
    // Setting Up the Client
    this.client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token_key: process.env.TWITTER_TOKEN_KEY || '',
      access_token_secret: process.env.TWITTER_TOKEN_SECRET || '',
    })
    this.quotes = new Quotes()
  }

  run(): void {
    // Created a stream Object to stream from twitter
    const stream = this.client.stream('statuses/filter', {
      locations: randomCity(),
    })
    // Printing tweets
    stream.on('data', async (event: Event) => {
      console.log(event.text)
      console.log(await this.quotes.getRandomQuote())
    })
    //If anything goes wrongs
    stream.on('error', (error) => {
      throw error
    })
  }
}
