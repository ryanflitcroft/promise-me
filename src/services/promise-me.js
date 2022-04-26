import { response } from 'msw';

const url = 'https://programming-quotes-api.herokuapp.com/Quotes/random';
/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuote() {
  console.log('1: this function is blocking');
  const res = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });
  console.log('2: ', res);
  const json = await res.json();
  console.log('3:', json);

  return json;
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */

export function thenGetQuote() {
  console.log('1: this function is non-blocking');
  const res = fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => console.log('2: this is the fetch response', res));

  console.log('3: this line comes after fetch .then chain');

  return res;
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */

export async function tryAsyncGetQuote() {
  try {
    console.log('1: this function is blocking');
    const res = await fetch(url, {
      method: 'GET',
      headers: { accept: 'application/json' },
    });
    console.log('2: ', res);
    const json = await res.json();
    console.log('3:', json);

    return json;
  } catch (error) {
    console.error('nope!', error);
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

export function catchThenGetQuote() {
  console.log('1: this function is non-blocking');
  const res = fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => console.log('2: this is the fetch response', res))
    .catch((error) => console.error('oops!', error));

  console.log('3: this line comes after fetch .then chain');

  return res;
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

export async function tryFinallyAsyncGetQuotes() {
  try {
    console.log('1: this function is blocking');
    const res = await fetch(url, {
      method: 'GET',
      headers: { accept: 'application/json' },
    });
    console.log('2: ', res);
    const json = await res.json();
    console.log('3:', json);

    return json;
  } catch (error) {
    console.error('nope!', error);
  } finally {
    console.log('4: All done!');
  }
}

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

export function finallyThenGetQuote() {
  console.log('1: this function is non-blocking');
  const res = fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => console.log('2: this is the fetch response', res))
    .catch((error) => console.error('oops!', error))
    .finally(() => console.log('4: All done!'));

  console.log('3: this line comes after fetch .then chain');

  return res;
}

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

export function thenAsyncGetQuote() {
  return tryFinallyAsyncGetQuotes().then((res) =>
    console.log('5: one More!', res)
  );
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

export async function asyncThenGetQuote() {
  console.log('1: this function is non-blocking');
  const res = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  })
    .then((res) => res.json())
    .then((res) => console.log('2: this is the fetch response', res))
    .catch((error) => console.error('oops!', error))
    .finally(() => console.log('4: All done!'));

  console.log('3: this line comes after fetch .then chain');

  return res;
}
