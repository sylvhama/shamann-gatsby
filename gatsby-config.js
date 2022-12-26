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
      { name: 'Articles & Talks', path: '/articles-talks/' },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
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
        icon: 'src/images/shamann-icon.png', // This path is relative to the root of the site.
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
