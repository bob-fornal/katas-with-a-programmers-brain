class FizzBuzz {
  generate = (n) => {
    let result = [];
    for (let i = 1, len = n; i <= len; i++) {
      let value = '' + i;
      if (i % 15 === 0) value = 'FizzBuzz';
      else if (i % 5 === 0) value = 'Buzz';
      else if (i % 3 === 0) value = 'Fizz';
      result.push(value);
    }
    return result;
  }
}

describe("FizzBuzz Test Suite", () => {
  let fb;

  beforeEach(() => {
    fb = new FizzBuzz();
  });

  it('expects "generate" to return an array of 1 to 15', () => {
    const expected = [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz' ];

    const result = fb.generate(15);
    expect(result).toEqual(expected);
  });
});