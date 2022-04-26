import {
  asyncGetQuote,
  thenGetQuote,
  tryAsyncGetQuote,
  catchThenGetQuote,
  tryFinallyAsyncGetQuotes,
  finallyThenGetQuote,
  thenAsyncGetQuote,
  asyncThenGetQuote,
} from './services/promise-me';

export default function App() {
  return (
    <>
      <button onClick={async () => await asyncGetQuote()}>
        async get quote
      </button>

      <button onClick={() => thenGetQuote()}>then get quote</button>

      <button onClick={async () => await tryAsyncGetQuote()}>
        try async get quote
      </button>

      <button onClick={() => catchThenGetQuote()}>catch then get quote</button>

      <button onClick={async () => await tryFinallyAsyncGetQuotes()}>
        try finally async get quote
      </button>

      <button onClick={() => finallyThenGetQuote()}>
        finally then get quote
      </button>

      <button onClick={async () => thenAsyncGetQuote()}>
        then async get quote
      </button>

      <button onClick={async () => await asyncThenGetQuote()}>
        async then get quote
      </button>
    </>
  );
}
