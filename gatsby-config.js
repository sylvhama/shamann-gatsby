module.exports = {
  siteMetadata: {
    title: 'Sylvain Hamann',
    description: 'Senior Front-End Developer',
    site: 'https://shamann.dev',
    navLinks: [
      { name: 'About Me', path: '/' },
      { name: 'Relevant Experience', path: '/relevant-experience/' },
      { name: 'Showcase', path: '/showcase/' },
      { name: 'Articles & Talks', path: '/articles-talks/' },
    ],
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sylvain Hamann',
        short_name: 'shamann',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: 'src',
          components: 'src/components',
          contexts: 'src/contexts',
          hooks: 'src/hooks',
          wrappers: 'src/wrappers',
        },
        extensions: ['js'],
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
