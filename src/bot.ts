import Twitter from 'twitter'
import config from 'config'
import Cities from './types/cities'

require('dotenv').config()

export default class Bot {
  client: Twitter
  cities: Cities
  stream: NodeJS.EventEmitter

  constructor() {
    // Grabbing all the bounding boxes for each city
    this.cities = config.get('cities')

    // Setting Up the Client
    this.client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token_key: process.env.TWITTER_TOKEN_KEY || '',
      access_token_secret: process.env.TWITTER_TOKEN_SECRET || ''
    })

    // Created a stream Object to stream from twitter
    this.stream = this.client.stream('statuses/filter', {
      locations: this.cities.chicago
    })
  }

  run(): void {
    // Printing tweets
    this.stream.on('data', event => {
      console.log(event && event.text)
    })

    //If anything goes wrongs
    this.stream.on('error', error => {
      throw error
    })
  }
}
