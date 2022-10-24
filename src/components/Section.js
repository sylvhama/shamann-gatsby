import React from 'react';
import PropTypes from 'prop-types';

import { VisuallyHidden } from './shared/VisuallyHidden';
import Seo from './shared/Seo';

const ID = 'page-title';

function Section({ title, children, ...seo }) {
  return (
    <section aria-labelledby={ID}>
      <Seo title={title} {...seo} />
      <VisuallyHidden>
        <h2 id={ID}>{title}</h2>
      </VisuallyHidden>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  ...Seo.propTypes,
};

export default Section;
