import Twitter from 'twitter'
import Event from './types/event'
import randomCity from './utilities/randomCity'

require('dotenv').config()

export default class Bot {
  private client: Twitter

  constructor() {
    // Setting Up the Client
    this.client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token_key: process.env.TWITTER_TOKEN_KEY || '',
      access_token_secret: process.env.TWITTER_TOKEN_SECRET || ''
    })
  }

  run(): void {
    // Created a stream Object to stream from twitter
    const stream = this.client.stream('statuses/filter', {
      locations: randomCity()
    })
    // Printing tweets
    stream.on('data', (event: Event) => {
      console.log(event.text)
    })
    //If anything goes wrongs
    stream.on('error', error => {
      throw error
    })
  }
}
