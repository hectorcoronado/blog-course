import * as React from "react"

import Layout from '../components/Layout'
import Seo from '../components/Seo'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title={'homepage'}/>
      <div>Hello world</div>
    </Layout>
  )
}

export default IndexPage
