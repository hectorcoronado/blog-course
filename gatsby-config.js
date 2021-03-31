module.exports = {
    siteMetadata: {
        title: `a blog`,
        description: `a blog`,
        twitter: `HCoronado`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`
            }
        },
        {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
                preset: `@theme-ui/preset-future`,
                prismPreset: `prism-okaidia`
            }
        }
    ]
}