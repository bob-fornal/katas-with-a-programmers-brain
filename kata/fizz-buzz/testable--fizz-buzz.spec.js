
class FizzBuzz {
  isMod3 = i => i % 3 === 0;
  isMod5 = i => i % 5 === 0;
  isMod15 = i => i % 15 === 0;

  handleIndividual = (i) => {
    let value = '' + i;
    if (this.isMod15(i)) value = 'FizzBuzz';
    else if (this.isMod5(i)) value = 'Buzz';
    else if (this.isMod3(i)) value = 'Fizz';
    return value;
  }

  generate = (n) => {
    let result = [];
    for (let i = 1, len = n; i <= len; i++) {
      result.push(this.handleIndividual(i));
    }
    return result;
  }
}

describe("FizzBuzz Test Suite", () => {
  let fb;

  beforeEach(() => {
    fb = new FizzBuzz();
  });

  it('exect "isMod15" to return true if given 15 divisible', () => {
    expect(fb.isMod15(15)).toEqual(true);
    expect(fb.isMod15(30)).toEqual(true);
    expect(fb.isMod15(45)).toEqual(true);
  });

  it('exect "isMod15" to return false if given non-15 divisible', () => {
    expect(fb.isMod15(1)).toEqual(false);
    expect(fb.isMod15(2)).toEqual(false);
    expect(fb.isMod15(3)).toEqual(false);
    expect(fb.isMod15(4)).toEqual(false);
    expect(fb.isMod15(5)).toEqual(false);
    expect(fb.isMod15(6)).toEqual(false);
    expect(fb.isMod15(7)).toEqual(false);
    expect(fb.isMod15(8)).toEqual(false);
    expect(fb.isMod15(9)).toEqual(false);
    expect(fb.isMod15(10)).toEqual(false);
    expect(fb.isMod15(11)).toEqual(false);
    expect(fb.isMod15(12)).toEqual(false);
    expect(fb.isMod15(13)).toEqual(false);
    expect(fb.isMod15(14)).toEqual(false);
    expect(fb.isMod15(16)).toEqual(false);
  });

  it('exect "isMod5" to return true if given 5 divisible', () => {
    expect(fb.isMod5(5)).toEqual(true);
    expect(fb.isMod5(10)).toEqual(true);
    expect(fb.isMod5(15)).toEqual(true);
  });

  it('exect "isMod5" to return false if given 5 non-divisible', () => {
    expect(fb.isMod5(1)).toEqual(false);
    expect(fb.isMod5(2)).toEqual(false);
    expect(fb.isMod5(3)).toEqual(false);
    expect(fb.isMod5(4)).toEqual(false);
    expect(fb.isMod5(6)).toEqual(false);
  });

  it('exect "isMod3" to return true if given 3 divisible', () => {
    expect(fb.isMod3(3)).toEqual(true);
    expect(fb.isMod3(6)).toEqual(true);
    expect(fb.isMod3(9)).toEqual(true);
  });

  it('exect "isMod3" to return false if given 3 non-divisible', () => {
    expect(fb.isMod15(1)).toEqual(false);
    expect(fb.isMod15(2)).toEqual(false);
    expect(fb.isMod15(4)).toEqual(false);
  });

  it('expects "handleIndividual" to return number to string if not divisible by 3 or 5', () => {
    expect(fb.handleIndividual(1)).toEqual('1');
    expect(fb.handleIndividual(2)).toEqual('2');
    expect(fb.handleIndividual(4)).toEqual('4');
    expect(fb.handleIndividual(7)).toEqual('7');
    expect(fb.handleIndividual(8)).toEqual('8');
    expect(fb.handleIndividual(11)).toEqual('11');
    expect(fb.handleIndividual(13)).toEqual('13');
    expect(fb.handleIndividual(14)).toEqual('14');
  });

  it('expects "handleIndividual" to return Fizz for divisible by 3 (not 15)', () => {
    expect(fb.handleIndividual(3)).toEqual('Fizz');
    expect(fb.handleIndividual(6)).toEqual('Fizz');
    expect(fb.handleIndividual(9)).toEqual('Fizz');
    expect(fb.handleIndividual(12)).toEqual('Fizz');
  });

  it('expects "handleIndividual" to return Buzz for divisible by 5 (not 15)', () => {
    expect(fb.handleIndividual(5)).toEqual('Buzz');
    expect(fb.handleIndividual(10)).toEqual('Buzz');
  });

  it('expects "handleIndividual" to return FizzBuzz for divisible by 15', () => {
    expect(fb.handleIndividual(15)).toEqual('FizzBuzz');
  });

  it('expects "generate" to return an array of 1 to 15, base logic', () => {
    spyOn(fb, 'handleIndividual').and.returnValue('1');
    const expected = [ '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1' ];

    const result = fb.generate(15);
    expect(result).toEqual(expected);
  });

});
