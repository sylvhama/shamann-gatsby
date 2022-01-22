import React from 'react';

function LayoutPortfolio({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter;
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <span>Author: {author}</span>
        <time>Date: {date}</time>
      </header>
      {children}
    </article>
  );
}

export default LayoutPortfolio;
