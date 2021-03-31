import * as React from 'react'
import {graphql, Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

// markup
const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Seo title={'homepage'}/>
      <StaticImage
        src='https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        alt='Code on a computer monitor'
        layout='fullWidth'
        aspectRatio={21/9}
      />
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
