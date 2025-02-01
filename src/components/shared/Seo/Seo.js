import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useFrenchUrl } from 'hooks/useFrenchUrl';

import { useSiteMetaData } from 'hooks/useSiteMetaData';

export function Seo({ description, lang, meta, keywords, title }) {
  const location = useLocation();
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    site,
  } = useSiteMetaData();
  const siteTitle = `${title} | ${defaultTitle}`;
  const metaDescription = description || defaultDescription;
  const currentUrl = site + location.pathname;
  const frenchUrl = useFrenchUrl();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      link={[
        {
          rel: 'canonical',
          href: currentUrl,
        },
        {
          rel: 'alternate',
          hrefLang: 'en',
          href: currentUrl,
        },
        {
          rel: 'alternate',
          hrefLang: 'fr',
          href: frenchUrl,
        },
      ]}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: currentUrl,
        },
        {
          property: 'og:title',
          content: siteTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        { property: 'og:image:width', content: '500' },
        { property: 'og:image:height', content: '500' },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:url',
          content: currentUrl,
        },
        {
          name: 'twitter:title',
          content: siteTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};
