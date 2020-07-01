import React, { useState } from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './topicFeed.scss'

export default () => {
  const [cardIndex, setCardIndex] = useState(0)
  const getRandomCardIndexBetween = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min

  const cardStack = [];

  for (let i = 0; i < 5; i++) {
    cardStack.push(<li></li>);
  }

  return (
    <StaticQuery
      query={graphql` 
          query TopicFeed {
              allContentfulTopic(filter: {featured: {eq: true}}) {
                  edges {
                      node {
                          cardDescription {
                              cardDescription
                          }
                          cardTitle
                          id
                          slug
                      }
                  }
              }
          }
      `}
      render={data => ( 
        <div>
          <div className='feed'>
          
          <ul className='topic__item--stack'>{cardStack}</ul>

            {data.allContentfulTopic.edges.map((edge, index) => index === cardIndex
              ? (
                <div key={edge.node.id} className='topic__item'>
                  <h2 className='card__title'>{edge.node.cardTitle}</h2>
                  <div className="card__desc--container">
                    <p className='card__desc'>{edge.node.cardDescription.cardDescription}</p>
                  </div>
                  <div className='card__link' onClick={() => navigate(`/topic/${edge.node.slug}`)}>
                    <p>Learn More</p>
                  </div>
                </div>
              ) : null)}
          </div>
          <button onClick={() => setCardIndex(getRandomCardIndexBetween(0, data.allContentfulTopic.edges.length - 1))}>SPIN</button>
        </div>
      )}
    />
  )
}