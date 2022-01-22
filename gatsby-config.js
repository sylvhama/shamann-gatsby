module.exports = {
  siteMetadata: {
    title: 'Sylvain Hamann',
    description: 'Web Developer',
    site: '@sylvhama',
    image: 'https://shamann.dev/shamann.png',
    navLinks: [
      { name: 'About Me', path: '/' },
      { name: 'Relevant Experience', path: '/relevant-experience/' },
      { name: 'Showcase', path: '/showcase/' },
      { name: 'Talks & OSS', path: '/talks-open-source/' },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sylvain Hamann',
        short_name: 'shamann',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/shamann-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto+Mono:300,700', 'Roboto:400,700&display=swap'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/LayoutPortfolio.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/src/pages/portfolio`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-remove-serviceworker',
  ],
};
