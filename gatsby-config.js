module.exports = {
    siteMetadata: {
        title: `a blog`,
        description: `a blog`,
        twitter: `HCoronado`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`
            }
        },
        `gatsby-plugin-mdx`
    ]
}