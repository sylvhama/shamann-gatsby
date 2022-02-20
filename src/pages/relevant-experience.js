import React from 'react';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInMonths from 'date-fns/differenceInMonths';

import Section from '../components/Section';
import Paragraph from '../components/shared/Paragraph';
import SectionSubtitle from '../components/shared/SectionSubtitle';
import { VisuallyHidden } from '../components/shared/VisuallyHidden';
import { Split } from '../components/shared/Split';

const startDate = new Date(2013, 9, 1);

export default function Experience() {
  const today = new Date();

  const years = differenceInYears(today, startDate);
  const months = differenceInMonths(today, startDate) - years * 12;

  const firstPart = "I've been working as a full time web developer for";
  const secondPart = `${years} years${createSentenceEnd(months)}`;

  return (
    <Section title="Relevant experience">
      <Paragraph aria-hidden>{firstPart}</Paragraph>
      <Split text={secondPart.slice(0, -1)} />
      <VisuallyHidden>
        {firstPart} {secondPart}
      </VisuallyHidden>

      <SectionSubtitle>
        Apr 2019 - Present <span aria-hidden="true">🇨🇦 🛍️</span>
      </SectionSubtitle>
      <Paragraph>
        Nowadays I am working remotely in Montreal for <strong>Shopify</strong>.
        I contributed to merchant facing experiences (Shopify Admin, Polaris
        design system) and buyer facing experiences (Customer Accounts) while
        acting as an accessibility advocate within my team. I mentored
        developers via code reviews and pair programming. I also championed
        projects with multidisciplinary teams.
      </Paragraph>

      <SectionSubtitle>
        Jul 2017 - Apr 2019 <span aria-hidden="true">🇨🇦 🎮</span>
      </SectionSubtitle>
      <Paragraph>
        I worked at <strong>Ubisoft Montreal</strong> in Canada as a web
        developer for almost two years. My main activity was to maintain and
        develop features for the Ubisoft Club single-page application on
        PlayStation 4, Xbox One and Nintendo Switch. I also have created a
        Progressive Web App used to easily develop internal tools. Plus I have
        worked on web views that summarize your Club progression visible from
        the main menu of Assassin's Creed Origins and Odyssey.
      </Paragraph>

      <SectionSubtitle>
        Sep 2013 - Feb 2017 <span aria-hidden="true">🇰🇷 🇯🇵</span>
      </SectionSubtitle>
      <Paragraph>
        After I graduated, I have worked as a web developer for two years at
        Asiance, a digital agency located in <strong>Seoul</strong>. I also have{' '}
        worked in <strong>Tokyo</strong> as a web developer for two digital
        agencies. I initially joined Netwise for eight months and then I worked
        at Cream for roughly one year. During my time in Asia I've contributed
        to roughly <strong>30 web applications and responsive websites</strong>{' '}
        for worldwide clients such as Lacoste or Air France.
      </Paragraph>

      <SectionSubtitle>
        Studies <span aria-hidden="true">🇫🇷 🎓</span>
      </SectionSubtitle>
      <Paragraph>
        I graduated from <em>Lumière University Lyon 2</em> in 2013. I have a{' '}
        <strong>Master’s degree</strong> in computer science where I focused on
        web development. During my studies, I have interned at four different
        companies in France, Luxembourg and South Korea.
      </Paragraph>
    </Section>
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
