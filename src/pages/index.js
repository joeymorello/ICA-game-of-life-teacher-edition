import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Game of Life: Teacher&#39;s Edition</h1>
    <p>desc section</p>
    <Link  to="/game">Get Tips</Link>
  </Layout>
)

export default IndexPage
