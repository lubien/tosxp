import cheerio from 'cheerio';
import fs from 'fs';
import co from 'co';
import doTheThingZhuLi from './utils/do-the-thing-zhu-li';
import convertNumber from './utils/convert-number';

const xpCardUrls = [
  'http://www.tosbase.com/database/items/640080/',
  'http://www.tosbase.com/database/items/640081/',
  'http://www.tosbase.com/database/items/640082/',
  'http://www.tosbase.com/database/items/640084/',
  'http://www.tosbase.com/database/items/640085/',
  'http://www.tosbase.com/database/items/640086/',
  'http://www.tosbase.com/database/items/640113/',
  'http://www.tosbase.com/database/items/640114/',
  'http://www.tosbase.com/database/items/640126/',
  'http://www.tosbase.com/database/items/640127/',
  'http://www.tosbase.com/database/items/640128/',
  'http://www.tosbase.com/database/items/640129/',
];

function findXpValues(rawHtml) {
  const $ = cheerio.load(rawHtml);
  let desc = $('meta[name=description]').attr('content');
  desc = desc.split(' ').filter(v => !isNaN(v)).map(n => convertNumber(n));
  return {
    base: desc[0],
    class: desc[1],
    lvmin: desc[2],
  };
}

co(function* main() {
  const result = yield xpCardUrls.map((url) => doTheThingZhuLi(url, findXpValues));

  fs.writeFile('./src/data/xp-cards.json', JSON.stringify(result), (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log('XP cards updated');
  });
});

