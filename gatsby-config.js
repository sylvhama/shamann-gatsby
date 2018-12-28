module.exports = {
  siteMetadata: {
    title: 'Sylvain Hamann',
    description: 'Web Developer',
    author: '@sylvhama',
    navLinks: [
      { name: 'About Me', path: '' },
      { name: 'Relevant Experience', path: '/relevant-experience/' },
      { name: 'Showcase', path: '/showcase/' },
      { name: 'Talks & OS', path: '/talks-open-source/' },
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
    'gatsby-plugin-workbox',
    'gatsby-plugin-styled-components',
  ],
};
