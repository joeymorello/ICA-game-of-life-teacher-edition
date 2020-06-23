import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

// import './topic.scss';

const TopicTemplate = (props) => {
    return (
        <Layout>
        {/* <SEO title={props.data.contentfulTopic.seoTitle} description={props.data.contentfulTopic.seoDescription} keywords={props.data.contentfulTopic.seoKeywords} /> */}


        {/* <div className='project__header'>
            
            <div className='project__hero'>
              <div className='project__desc'>            
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulProject.projectDescription.childMarkdownRemark.html}`}
                } />
              </div>
              <h1 className='project__title'>{props.data.contentfulProject.pageTitle}</h1>
            </div>
            <HomeReturn />
        </div>
        <div id='project__wrapper'>
            <div className='project__content'>
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulProject.content.childMarkdownRemark.html}`}
                } />
            </div>
        </div> */}

        <h1 className='project__title'>{props.data.contentfulTopic.pageTitle}</h1>

        <div id='project__wrapper'>
            <div className='project__content'>
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulTopic.pageContent.childMarkdownRemark.html}`}
                } />
            </div>
        </div>
        
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