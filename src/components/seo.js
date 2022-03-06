import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, title }) => {
    // query data (title, decription && author) via graphql
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                tags
                image
              }
            }
          }
        `
    )

    const tags = site.siteMetadata.tags
    const metaDescription = description || site.siteMetadata.description
    const image = site.siteMetadata.image

    return (
        <Helmet
        htmlAttributes={{ lang: `en`}}
        title={title || metaDescription}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
            {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `tags`,
                content: tags,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: image,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:image`,
                content: image,
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)} />
    )
}


export default SEO

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

