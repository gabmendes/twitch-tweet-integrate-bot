import axios from 'axios'
import cheerio from 'cheerio'

async function getHTML(url) {
  const { data: html } = await axios.get(
    'https://twitter.com/NandoSangenetto/status/1511691884514750465'
  )

  return html
}

async function getTwitterFollowers(html) {
  const $ = cheerio.load(html)
  const test = $('h1')

  console.log(test)
}

export { getHTML, getTwitterFollowers }
