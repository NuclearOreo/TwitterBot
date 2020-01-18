import Twitter from 'twitter'

require('dotenv').config()

// Setting Up the Client
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_TOKEN_SECRET || ''
})

// Created a stream Object to stream from twitter
const stream = client.stream('statuses/filter', { track: 'javascript' })

// Printing tweets
stream.on('data', event => {
  console.log(event && event.text)
})

//If anything goes wrongs
stream.on('error', error => {
  throw error
})
