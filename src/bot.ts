import Twitter from 'twitter'
import Event from './types/event'
import randomCity from './utilities/randomCity'
import Quotes from './utilities/quotes'
import EventEmitter from 'events'

require('dotenv').config()

export default class Bot {
  private client: Twitter
  private quotes: Quotes
  private numberOfTweets = 30
  private stream: EventEmitter.EventEmitter

  constructor() {
    // Setting Up the Client
    this.client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token_key: process.env.TWITTER_TOKEN_KEY || '',
      access_token_secret: process.env.TWITTER_TOKEN_SECRET || '',
    })
    this.quotes = new Quotes()

    // Created a stream Object to stream from twitter
    this.stream = this.client.stream('statuses/filter', {
      locations: randomCity(),
    })

    //If anything goes wrongs
    this.stream.on('error', (error) => {
      throw new Error(error)
    })
  }

  // Able to to tweet with this function
  async tweet(text: string): Promise<void> {
    await this.client
      .post('statuses/update', {
        status: text,
      })
      .catch((error) => {
        console.log(error)
        if (error[0].code === 186) this.numberOfTweets += 1
      })
  }

  // Call this to run the both
  run(): void {
    this.stream.on('data', async (event: Event) => {
      try {
        const quote = await this.quotes.getRandomQuote()
        const myTweet = `@${event.user.screen_name} \n ${quote.QUOTE} - ${quote.AUTHOR}`

        console.log(myTweet + '\n')

        await this.tweet(myTweet)

        this.numberOfTweets -= 1
        if (!this.numberOfTweets) {
          this.quotes.close()
          process.exit()
        }
      } catch (error) {
        throw new Error(error)
      }
    })
  }
}
