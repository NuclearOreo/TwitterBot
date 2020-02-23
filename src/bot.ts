import Twitter from 'twitter'
import config from 'config'
import Cities from './types/cities'

require('dotenv').config()

// Grabbing all the bounding boxes for each city
const cities: Cities = config.get('cities')

// Setting Up the Client
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_TOKEN_SECRET || ''
})

// Created a stream Object to stream from twitter
const stream = client.stream('statuses/filter', {
  locations: cities.chicago
})

// Printing tweets
stream.on('data', event => {
  console.log(event && event.text)
})

//If anything goes wrongs
stream.on('error', error => {
  throw error
})
