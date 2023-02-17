import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './Nav.module.css';

export function Nav({ links, ...rest }) {
  return (
    <nav {...rest} aria-label="Main navigation">
      <ul className={styles.List}>
        {links.map(({ name, path }) => {
          const split = name.split(' ');
          return (
            <li key={name} className={styles.Item}>
              <Link className={styles.Link} to={path} activeClassName="active">
                {split.map((word, index) => {
                  if (split.length === 1 || split.length - 1 === index) {
                    return word;
                  }
                  return (
                    <React.Fragment key={word}>
                      {word}
                      <span style={{ fontFamily: 'arial', fontSize: '0.88em' }}> </span>
                    </React.Fragment>
                  );
                })}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ),
};
