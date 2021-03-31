import * as React from 'react'
import {graphql, Link} from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

// markup
const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Seo title={'homepage'}/>
      {
        posts.map(post => {
          return (
            <Link
              to={post.slug}
              key={post.slug}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
          )
        })
      }
    </Layout>
  )
}

export const pageQuery = graphql`
{
  allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
    nodes {
      slug
      frontmatter {
        title
      }
    }
  }
}
`

export default IndexPage
