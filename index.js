import { getHTML, getTwitterFollowers } from './lib/scraper'

console.log(getHTML())

async function go() {
  getTwitterFollowers(await getHTML('https://twitter.com/alucarde'))
}

go()
