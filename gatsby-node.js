const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
 // Query for nodes to use in creating pages.
 resolve(
   graphql(request).then(result => {
     if (result.errors) {
       reject(result.errors)
     }
     return result;
   })
 )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
 const { createPage } = actions;

// Create pages for each topic.
 const getTopic = makeRequest(graphql, `
   {
     allContentfulTopic (
       sort: { fields: [createdAt], order: DESC }
       filter: {
         node_locale: {eq: "en-US"}},)
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `).then(result => {
   result.data.allContentfulTopic.edges.forEach(({ node }) => {
     createPage({
       path: `topic/${node.slug}`,
       component: path.resolve(`src/templates/topic.js`),
       context: {
         id: node.id,
       },
     })
   })
});

 return Promise.all([
   getTopic,
  ])
};
