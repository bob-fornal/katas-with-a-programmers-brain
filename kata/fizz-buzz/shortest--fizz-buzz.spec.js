class FizzBuzz {
  generate = (n) => {
    let result = [];
    for (let i = 0; i < n;) result.push((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
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