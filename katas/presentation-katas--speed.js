
const capitals1 = word => word.match(/[A-Z]/g).map(x => word.indexOf(x));
const capitals2 = word => [...word].map(x => x == x.toUpperCase()).map(x => word.indexOf(x));
const capitals3 = word => word.split().map(x => x == x.toUpperCase()).map(x => word.indexOf(x));

console.time('First');
for (let i = 0, len = 10000; i < len; i++) {
  let result = capitals1('Leading EDJE, Inc.');
}
console.timeEnd('First');

console.time('Second');
for (let i = 0, len = 10000; i < len; i++) {
  let result = capitals2('Leading EDJE, Inc.');
}
console.timeEnd('Second');

console.time('Third');
for (let i = 0, len = 10000; i < len; i++) {
  let result = capitals3('Leading EDJE, Inc.');
}
console.timeEnd('Third');
