import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Seo = ({title, description, meta=[]}) => {
  // create site object:
  const {site} = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            twitter
          }
        }
      }
    `
  )

  const META_DESCRIPTION = description || site.siteMetadata.description

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
          propoerty: `twitter: description`,
          content: META_DESCRIPTION
        },
        {
          propoerty: `twitter: card`,
          content: `summary`
        },
      ].concat(meta)
      }
    />
  )
}

export default Seo