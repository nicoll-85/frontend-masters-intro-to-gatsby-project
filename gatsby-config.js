module.exports = {
    siteMetadata: {
        siteUrl:'https://www.hellofellas.tld',
        title: 'Gatsby fellas',
        description: 'Intro to Gatsby fellas',
        image:'https://images.pexels.com/photos/1988693/pexels-photo-1988693.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },

    // This set of plugins is to enable creating MDX blog post from the src/posts folder
    plugins:[
        'gatsby-plugin-react-helmet',
        {
            resolve:'gatsby-source-filesystem',
            options:{
                name: 'posts',
                path: `${__dirname}/src/posts`
            },
        },

        {
            resolve:'gatsby-plugin-page-creator',
            options:{
                path: `${__dirname}/src/posts`
            },
        },

        {
            resolve:'gatsby-plugin-mdx',
            options:{
                defaultLayouts:{
                    posts: require.resolve('./src/components/posts-layout.js')
                }
            },
        },

        //End of MDX

    ],
};