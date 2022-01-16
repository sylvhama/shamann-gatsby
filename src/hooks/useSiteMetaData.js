import { useStaticQuery, graphql } from 'gatsby';

export function useSiteMetaData() {
  const { site } = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          description
          site
          image
          navLinks {
            name
            path
          }
        }
      }
    }
  `);

  return site.siteMetadata;
}
