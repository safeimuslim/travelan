import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/my-header"
import Content from "../components/my-content"
import KalenderLibur from "../components/kalender-libur"
import Kontak from "../components/kontak"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header siteTitle='Travelan' />
    <Content />
    <KalenderLibur />
    <Kontak />
  </Layout>
)

export default IndexPage
