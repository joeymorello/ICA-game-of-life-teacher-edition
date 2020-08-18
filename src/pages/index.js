import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Topics from "../components/topicFeed/topicFeed"
import SpinWheel from "../components/spinWheel/spinWheel"
import Quotes from "../components/quoteFeed/quoteFeed"

const AppPage = () => (
  <Layout>
    <SEO title="Home" />
    <Topics />
    <Quotes />
  </Layout>
)

export default AppPage
