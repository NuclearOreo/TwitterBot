import Bot from './bot'
import Quotes from './utilities/quotes'

//const bot = new Bot()
//bot.run()
const yup = async () => {
  const test = new Quotes()
  await test.getQuotes()
}

yup()
