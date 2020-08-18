import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from "gatsby-image"

import './topic.scss';

const TopicTemplate = (props) => {
  return (
    <Layout>
      <SEO title={props.data.contentfulTopic.seoTitle} description={props.data.contentfulTopic.seoDescription} keywords={props.data.contentfulTopic.seoKeywords} />
      <div className='topic__header'>  
            <h1 className='topic__title'>{props.data.contentfulTopic.pageTitle}</h1>
      </div>
      <div id='topic__wrapper'>
          <div className='topic__content'>
              <div dangerouslySetInnerHTML={
                  {__html: `${props.data.contentfulTopic.pageContent.childMarkdownRemark.html}`}
              } />
          </div>
      </div>   
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="http://www.ilclassroomsinaction.org/">Illinois Classrooms In Action</a>
      </footer>
    </Layout>
  )
}

export default TopicTemplate;

export const query = graphql`
query TopicTemplate($id: String!) {
    contentfulTopic(id: {eq: $id}) {
      cardTitle
      id
      pageContent {
        childMarkdownRemark {
          html
        }
      }
      cardDescription {
        childMarkdownRemark {
          html
        }
      }
      pageTitle
      seoDescription
      seoKeywords
      seoTitle
      slug
    } 
  }
`