import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Seo = ({title, description, image, imageAlt, meta=[]}) => {
  // create site object:
  const {site} = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            twitter
            siteUrl
          }
        }
      }
    `
  )

  const META_DESCRIPTION = description || site.siteMetadata.description
  const IMAGE_URL = `${site.siteMetadata.siteUrl}${image}`

  return (
    <Helmet
      title={title}
      htmlAttributes={{lang: `en`}}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: META_DESCRIPTION,
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: META_DESCRIPTION
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `twitter:title`,
          content: title
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata.twitter || ``
        },
        {
          property: `twitter: description`,
          content: META_DESCRIPTION
        },
      ]
      .concat(
        image
          ? [
            {
              name: `og:image`,
              content: IMAGE_URL
            },
            {
              name: `og:image:alt`,
              content: imageAlt || title
            },
            {
              name: `twitter:image`,
              content: IMAGE_URL
            },
            {
              name: `twitter:image:alt`,
              content: imageAlt || title
            },
            {
            property: `twitter: card`,
            content: `summary_large_image`
            }
          ]
          : [
            {
            property: `twitter: card`,
            content: `summary`
            }
          ]
      )
      .concat(meta)
      }
    />
  )
}

export default Seo