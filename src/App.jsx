import { asyncGetQuote, thenGetQuote } from './services/promise-me';

export default function App() {
  return (
    <>
      <button onClick={async () => await asyncGetQuote()}>
        async get quote
      </button>
      <button onClick={() => thenGetQuote()}>then get quote</button>
    </>
  );
}
