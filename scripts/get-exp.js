/*
* The only purpose of this is to easily update values
* of require XP from tosbase.com
* I'm not raping this site.
* I say the same for get-cards.js script.
*/

import cheerio from 'cheerio';
import fs from 'fs';
import co from 'co';
import doTheThingZhuLi from './utils/do-the-thing-zhu-li';
import convertNumber from './utils/convert-number';

function baseParser(rawHtml) {
  const $ = cheerio.load(rawHtml);
  const xp = [];

  $('.db_table tr').each((i, elem) => {
    xp.push(convertNumber($('td', elem).eq(1).text()));
  });

  return xp;
}

function classParser(rawHtml) {
  const $ = cheerio.load(rawHtml);
  const xp = [];

  $('.db_table').each((i, elem) => {
    const table = [];

    $('tr', elem).each((j, row) => {
      const value = $('td', row).eq(1).text();
      table.push(convertNumber(value));
    });

    // Remove the "level 0" xp aka table header :p
    table.shift();

    xp.push(table);
  });

  // No need to the total xps table
  xp.pop();

  return xp;
}

co(function* main() {
  const result = yield [
    doTheThingZhuLi('http://www.tosbase.com/game/exp-tables/base/', baseParser),
    doTheThingZhuLi('http://www.tosbase.com/game/exp-tables/class/', classParser),
  ];

  fs.writeFile('./src/data/base-xp.json', JSON.stringify(result[0]), (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log('Base XP updated');
  });

  fs.writeFile('./src/data/class-xp.json', JSON.stringify(result[1]), (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log('Class XP updated');
  });
});
