import ErrorRepository from '../app';

const repo = new ErrorRepository();

test.each([
  [200, 'Успешно'],
  [300, 'Unknown error'],
])('translate', (code, expected) => {
  expect(repo.translate(code)).toBe(expected);
});
