import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () =>{
  const expected = 5;
  const got = mut.div(30, 6);
  expect(got).toBe(expected);
});

test('Testing contains -- true', () => {
  const expected = true;
  const got = mut.containsNumbers("hello1");
  expect(got).toBe(expected);
});

test('Testing contains -- false', () => {
  const expected = false;
  const got = mut.containsNumbers("hello");
  expect(got).toBe(expected);
});

test('Testing contains -- empty text', () => {
  const expected = false;
  const got = mut.containsNumbers("");
  expect(got).toBe(expected);
});

test('Testing contains -- null parameter', () => {
  const expected = false;
  const got = mut.containsNumbers();
  expect(got).toBe(expected);
});


