
class CoinChanger {
  convert = (cents) => {
    let coins = [];
    while (cents > 0) {
      switch (true) {
        case (cents >= 25):
          cents -= 25;
          coins.push('quarter');
          break;
        case (cents >= 10):
          cents -= 10;
          coins.push('dime');
          break;
        case (cents >= 5):
          cents -= 5;
          coins.push('nickel');
          break;
        case (cents >= 1):
          cents -= 1;
          coins.push('penny');
          break;
      }
    }
    return coins;
  };
}

describe('Coin Changer Test Suite', () => {
  let cc;

  beforeEach(() => {
    cc = new CoinChanger();
  });

  it('expects 100 cents to return four quarters', () => {
    const cents = 100;
    const expected = [ 'quarter', 'quarter', 'quarter', 'quarter' ];
  
    const result = cc.convert(cents);
    expect(result).toEqual(expected);  
  });

  it('expects 60 cents to return two quarters and one dime', () => {
    const cents = 60;
    const expected = [ 'quarter', 'quarter', 'dime' ];
  
    const result = cc.convert(cents);
    expect(result).toEqual(expected);  
  });

  it('expects 41 cents to return one quarters, one dime, one nickel, and one penny', () => {
    const cents = 41;
    const expected = [ 'quarter', 'dime', 'nickel', 'penny' ];
  
    const result = cc.convert(cents);
    expect(result).toEqual(expected);  
  });

  it('expects 20 cents to return two dimes', () => {
    const cents = 20;
    const expected = [ 'dime', 'dime' ];
  
    const result = cc.convert(cents);
    expect(result).toEqual(expected);  
  });

  it('expects 5 cents to return one nickel', () => {
    const cents = 5;
    const expected = [ 'nickel' ];
  
    const result = cc.convert(cents);
    expect(result).toEqual(expected);  
  });

  it('expects 4 cents to return four pennies', () => {
    const cents = 4;
    const expected = [ 'penny', 'penny', 'penny', 'penny' ];
  
    const result = cc.convert(cents);
    expect(result).toEqual(expected);  
  });

});
