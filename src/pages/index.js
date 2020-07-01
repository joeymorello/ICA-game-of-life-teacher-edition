import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Topics from "../components/topicFeed/topicFeed"
import SpinWheel from "../components/spinWheel/spinWheel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Game of Life: Teachers Edition</h1>
    <Topics />
    <SpinWheel />
  </Layout>
)

export default IndexPage
