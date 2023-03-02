import operate from '../logic/operate';

describe('Verify operate function', () => {
  test('Should return 2 when 1 + 1', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
});
