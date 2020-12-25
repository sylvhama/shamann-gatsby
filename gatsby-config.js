module.exports = {
  siteMetadata: {
    title: 'Sylvain Hamann',
    description: 'Web Developer',
    author: '@sylvhama',
    navLinks: [
      { name: 'About Me', path: '/' },
      { name: 'Relevant Experience', path: '/relevant-experience' },
      { name: 'Showcase', path: '/showcase' },
      { name: 'Talks & OSS', path: '/talks-open-source' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
};
