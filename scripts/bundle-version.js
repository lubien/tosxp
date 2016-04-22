import cheerio from 'cheerio';
import fs from 'fs';
import { version } from '../package.json';

fs.readFile('dist/index.html', (err, rawHtml) => {
  if (err) throw err;
  const $ = cheerio.load(rawHtml);
  $('#main-script').attr('src', `./bundle.js?v=${version}`);

  fs.writeFile('dist/index.html', $.html(), (saveErr) => {
    if (saveErr) throw saveErr;
    // eslint-disable-next-line
    console.log('Updated bundle version at index.html!');
  });
});
