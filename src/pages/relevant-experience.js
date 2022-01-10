import React from 'react';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInMonths from 'date-fns/differenceInMonths';

import Seo from '../components/Seo';
import Paragraph from '../components/shared/Paragraph';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { Split } from '../components/shared/Split';

const startDate = new Date(2013, 9, 1);

export default function Experience() {
  const isWindowDefined = typeof window !== 'undefined';
  console.log({ isWindowDefined });

  const today = new Date();

  const years = differenceInYears(today, startDate);
  const months = differenceInMonths(today, startDate) - years * 12;

  const firstPart = 'I have been working as a full time web developer for';
  const secondPart = `${years} years${createSentenceEnd(months)}`;

  return (
    <>
      <Seo title="Relevant experience" />

      <Paragraph aria-hidden>{firstPart}</Paragraph>
      <Split invisible={!isWindowDefined} text={secondPart.slice(0, -1)} />
      <VisuallyHidden>
        {firstPart} {secondPart}
      </VisuallyHidden>

      <Paragraph>
        I graduated from <em>Lumière University Lyon 2</em> in 2013. I have a
        Bachelor’s degree <small>(in France we call that a Licence)</small> in
        statistics and computer science. I also have a{' '}
        <strong>Master’s degree</strong> in computer science where I focused on
        web development. During my studies, I have interned at four different
        companies in France, Luxembourg and South Korea.
      </Paragraph>
      <Paragraph>
        After I graduated, I have worked as a web developer for two years at
        Asiance, a digital agency located in <strong>Seoul</strong>. I also have{' '}
        <strong>worked in Tokyo</strong> as a web developer for two digital
        agencies. I initially joined Netwise for eight months and then I worked
        at Cream for roughly one year. I've made web applications and responsive
        websites for <strong>worldwide clients</strong> such as Lacoste or Air
        France. I also have contributed to unconventional projects like the
        Lausanne University Hospital's interactive map.
      </Paragraph>
      <Paragraph>
        I aslo have worked at <strong>Ubisoft Montreal</strong> in Canada as a
        web developer for almost two years. My main activity was to maintain and
        develop features for the Ubisoft Club single-page application on
        PlayStation 4, Xbox One and Nintendo Switch. I also have created a
        Progressive Web App used to easily develop internal tools. Plus I have
        worked on web views that summarize your Club progression visible from
        the main menu of Assassin's Creed Origins and Odyssey.
      </Paragraph>
      <Paragraph>
        Nowadays I am working at <strong>Shopify</strong> as a web developer,
        trying to make commerce better for everyone.
      </Paragraph>
    </>
  );
}

function createSentenceEnd(months) {
  if (months === 0) {
    return '.';
  }

  if (months === 1) {
    return ' and 1 month.';
  }

  return ` and ${months} months.`;
}
