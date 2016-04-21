/*
* Didn't get the reference?
* https://youtu.be/YneYiO1r0Ow
*/

import es6Promise from 'es6-promise';
es6Promise.polyfill();
import 'isomorphic-fetch';

export default function doTheThingZhuLi(url, parse) {
  return new Promise((fulfill, reject) => {
    fetch(url)
      .then(res => res.text())
      .then(res => {
        fulfill(parse(res));
      })
      .catch(err => { reject(err); });
  });
}
