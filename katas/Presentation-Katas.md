# Find the Capitals

Challenge [HERE](https://www.codewars.com/kata/539ee3b6757843632d00026b)

## Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

## Example

```javascript
Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);
```

## My First Solution

```javascript
var capitals = function (word) {
  var result = new Array();
  for (var i=0, len=word.length; i<len; i++) {
    if (word.charAt(i)==word.charAt(i).toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};
```

## Improved First Solution (Readable)

```javascript
const capitals = (word) => {
  let caps = [];
  for (let i = 0, len = word.length; i < len; i++) {
    if (word[i] === word[i].toUpperCase()) caps.push(i);
  }
  return caps;
};
```

## Testable

```javascript
const isUpperCase(letter) => letter === letter.toUpperCase();
const capitals = (word) => {
  let caps = [];
  for (let i = 0, len = word.length; i < len; i++) {
    if (isUpperCase(word[i])) caps.push(i);
  }
  return caps;
};
```

## Shortest

```javascript
const capitals = word => word.match(/[A-Z]/g).map(x => word.indexOf(x));
```

## Suspected Fastest

```javascript
const capitals = word => [...word].map(x => x == x.toUpperCase()).map(x => word.indexOf(x));
```

## Fastest

```javascript
const capitals = word => word.split().map(x => x == x.toUpperCase()).map(x => word.indexOf(x));
```
