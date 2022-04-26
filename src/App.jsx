import {
  asyncGetQuote,
  thenGetQuote,
  tryAsyncGetQuote,
  catchThenGetQuote,
  tryFinallyAsyncGetQuotes,
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
      <button onClick={async () => await catchThenGetQuote()}>
        catch then get quote
      </button>
      <button onClick={async () => await tryFinallyAsyncGetQuotes()}>
        try finally async get quote
      </button>
    </>
  );
}
