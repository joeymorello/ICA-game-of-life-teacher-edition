import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from 'gatsby'
import './quoteFeed.scss'

export default () => {
    const [quoteIndex, setQuoteIndex] = useState(0)
    const getRandomQuoteIndexBetween = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
  
    const [quote, getQuote] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        getQuote(!quote);
      }, 5000);
      // clearing interval
      return () => {
        clearInterval(timer);
        getQuote(!quote);
      }
    });

  return (
    <StaticQuery
      query={graphql` 
          query QuoteFeed {
            allContentfulQuote {
                edges {
                node {
                    id
                    quote {
                    quote
                    }
                }
                }
            }
          }
      `}
      render={data => ( 
        <div>
              {data.allContentfulQuote.edges.map((edge, index) => index === quoteIndex ? (
                  <div key={edge.node.id} className="quote-container">
                    <p>{edge.node.quote.quote}</p>
                  </div> 
                ) : null)}
                {setQuoteIndex(getRandomQuoteIndexBetween(0, data.allContentfulQuote.edges.length - 1))}
        </div>
      )}
    />
  )
}