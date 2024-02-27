import { useEffect } from "react"
import { useState } from "react"

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" })

  // useEffect(() => {
  //   async function getInitialQuote() {
  //     const response = await fetch(RANDOM_QUOTE_URL)
  //     const jsonResponse = await response.json()
  //     const randomQuote = jsonResponse.quote
  //     setQuote(randomQuote)
  //   }
  //   getInitialQuote()
  // }, [])

  useEffect(() => {
    fetchAndSetQuote()
  }, [])

  async function fetchAndSetQuote() {
    const response = await fetch(RANDOM_QUOTE_URL)
    const jsonResponse = await response.json()
    const randomQuote = jsonResponse.quote
    setQuote(randomQuote)
  }
  return (
    <div>
      <h1>&quot;{quote.text}&quot;</h1>
      <h2>-{quote.author}</h2>
      <button onClick={fetchAndSetQuote}>Get Quote Using handler</button>
    </div>
  )
}

export default QuoteFetcher
