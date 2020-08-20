import React, { useState } from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './topicFeed.scss'

export default () => {
  const [cardIndex, setCardIndex] = useState(0)
  const getRandomCardIndexBetween = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min

  const [isClicked, setAnim] = useState(false);
  const toggleAnim = () => {
    setAnim(!isClicked);
    console.log(isClicked);

    // return () => {
    //   setAnim(!isClicked);
    // }
  };

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
        <section id="feed-section">
          <div className="feed--container">
            <ul className='topic__item--stack'>
              <li className='topic__item--top-card'></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            {data.allContentfulTopic.edges.map((edge, index) => index === cardIndex
            ? (
                <div key={edge.node.id} className={isClicked ? 'draw-card--anim topic__item' : 'topic__item'} onAnimationEnd={() => setCardIndex(getRandomCardIndexBetween(0, data.allContentfulTopic.edges.length - 1))}>
                  <h2 className='card__title'>{edge.node.cardTitle}</h2>
                  <div className="card__desc--container">
                    <p className='card__desc'>{edge.node.cardDescription.cardDescription}</p>
                  </div>
                  <div className='card__link' onClick={() => navigate(`/topic/${edge.node.slug}`)}>
                    <p>Learn More</p>
                  </div>
                </div>
              ) : null)}
              <div className="spin-wheel--container">
                  <button className={isClicked ? 'spin-wheel--anim' : null} onClick={toggleAnim} onAnimationEnd={toggleAnim}>   
                      <svg xmlns="http://www.w3.org/2000/svg" id="spin-wheel" viewBox="0 0 401.1 401">
                          <title>Click to spin</title>
                          <path id="space8" class="cls-1" d="M59 342l47.9-47.9C64.4 248.9 68.2 200.5 68.2 200.5L0.5 200.8S-3.2 281 59 342Z"/>
                          <path id="space6" class="cls-2" d="M342 59l-47.9 48C336.6 152.1 332.8 200.5 332.8 200.5l67.7-0.3S404.2 120 342 59Z"/>
                          <path id="space5" class="cls-3" d="M59 59l47.9 48C64.4 152.1 68.2 200.5 68.2 200.5L0.5 200.2S-3.2 120 59 59Z"/>
                          <path id="space4" class="cls-4" d="M59 59l48 47.9C152.1 64.4 200.5 68.2 200.5 68.2L200.2 0.5S120-3.2 59 59Z"/>
                          <path id="space3" class="cls-5" d="M59 342l48-47.9C152.1 336.6 200.5 332.8 200.5 332.8L200.2 400.5S120 404.2 59 342Z"/>
                          <path id="space2" class="cls-6" d="M342 342l-47.9-47.9C248.9 336.6 200.5 332.8 200.5 332.8l0.3 67.7S281 404.2 342 342Z"/>
                          <path id="space1" class="cls-7" d="M342 59l-47.9 47.9C248.9 64.4 200.5 68.2 200.5 68.2L200.8 0.5S281-3.2 342 59Z"/>
                          <path id="space8-2" data-name="space8" class="cls-8" d="M400.5 200.7h-67.8c-1.8 62.1-38.8 93.6-38.8 93.6l48.1 47.6S401.5 287.8 400.5 200.7Z"/>
                          <circle class="cls-9" cx="200.5" cy="200.5" r="200"/>
                          <circle class="cls-9 white-fill" cx="200.5" cy="200.5" r="132.7"/>
                      </svg>
                  </button>
              </div>
          </div>      
        </section>
      )}
    />
  )
}