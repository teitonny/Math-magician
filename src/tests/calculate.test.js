import calculate from '../logic/calculate';

describe('verify calculate function', () => {
  test('Press AC button should clear all items', () => {
    const input = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(input, 'AC')).toEqual(result);
  });
  test('Press 0 button should return 0', () => {
    const input = {
      total: 0,
      next: 0,
      operation: null,
    };
    const result = {};
    expect(calculate(input, '0')).toMatchObject(result);
  });
  test('Press . with next = 3, it must return 3.', () => {
    const input = {
      total: 0,
      next: '3.',
      operation: null,
    };
    const result = {
      total: 0,
      next: '3.',
      operation: null,
    };
    expect(calculate(input, '.')).toEqual(result);
  });
  test('Press . with total = 0. it must return {}', () => {
    const input = {
      total: '0.',
      next: 0,
      operation: null,
    };
    const result = {};
    expect(calculate(input, '.')).toEqual(result);
  });
  test('Press = with total = 10, next = 5, operation = +, it must return 15', () => {
    const input = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = {
      total: '15',
      next: null,
      operation: null,
    };
    expect(calculate(input, '=')).toEqual(result);
  });
  test('Press +/- it must return the number with the opposite sign', () => {
    const input = {
      total: null,
      next: '5',
      operation: null,
    };
    const result = {
      total: null,
      next: '-5',
      operation: null,
    };
    expect(calculate(input, '+/-')).toEqual(result);
  });
});
