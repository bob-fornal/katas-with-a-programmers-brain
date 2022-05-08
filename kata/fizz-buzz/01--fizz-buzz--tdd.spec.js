
class FizzBuzz {
  generate = () => {}
}

describe("FizzBuzz Test Suite", () => {
  let fb;

  beforeEach(() => {
    fb = new FizzBuzz();
  });

  it('expects "generate" to return an array of 1 to 15', () => {
    const expected = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ];

    const result = fb.generate(15);
    expect(result).toEqual(expected);
  });
});
