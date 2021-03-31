import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage, getSrc} from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import Layout from '../components/Layout'

const BlogPostPage = ({data}) => {
  const post = data.mdx
  const image = getImage(post.frontmatter.image)
  const seoImage = getSrc(post.frontmatter.image)
  
  return(
    <Layout>
      <article>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={seoImage}
          imageAlt={post.frontmatter.imageAlt}
        />
        <GatsbyImage
          image={image}
          alt={post.frontmatter.imageAlt}
        />
        <h2>{post.frontmatter.title}</h2>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        imageAlt
      }
      body
    }
  }
`

export default BlogPostPage