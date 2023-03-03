import operate from '../logic/operate';

describe('Verify operate function', () => {
  test('Should return 2 when 1 + 1', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('Should return 2 when 5 - 3', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });
  test('Should return 4 when 2 x 2', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('Should return 2 when 4/2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  test('Should return 1 when 4 % 3', () => {
    expect(operate(4, 3, '%')).toBe('1');
  });
});
