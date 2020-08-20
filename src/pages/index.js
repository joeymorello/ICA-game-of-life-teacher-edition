import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Topics from "../components/topicFeed/topicFeed"
import Quotes from "../components/quoteFeed/quoteFeed"

const AppPage = () => (
  <Layout>
    <SEO title="Home" />
    <Topics />
    <Quotes />
  </Layout>
)

export default AppPage
