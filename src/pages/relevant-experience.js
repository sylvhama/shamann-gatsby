import React from "react";
import differenceInYears from "date-fns/differenceInYears";
import differenceInMonths from "date-fns/differenceInMonths";

import { Section } from "components/Section";
import { SectionSubtitle } from "components/shared/SectionSubtitle";
import { Anchor } from "components/shared/Anchor";
import { VisuallyHidden } from "components/shared/VisuallyHidden";
import { Split } from "components/shared/Split";
import { Paragraph } from "components/shared/Paragraph";

// September 1st 2013 (0 = january)
const startDate = new Date(2013, 8, 1);

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
      <VisuallyHidden>{`${firstPart} ${secondPart}`}</VisuallyHidden>

      <SectionSubtitle>
        Jul 2022 - Present <span aria-hidden="true">🌐 📊</span>
      </SectionSubtitle>
      <Paragraph>
        I'm working at <strong>Meta</strong> as a senior front-end developer on
        the Commerce Insights team. I contributed to the Facebook & Instagram
        app on Shopify, we built three new cards showing different insights. For
        each card, I created dashboards and alerts in order to monitor their
        health and performance. I fixed different types of issues (responsive,{" "}
        <abbr title="internationalization">i18n</abbr>,{" "}
        <abbr title="accessibility">a11y</abbr>...) in the Commerce Insights
        platform. I also helped to improve the test coverage by implementing new
        testing utilities and several <abbr title="end to end">e2e</abbr> tests.
      </Paragraph>

      <SectionSubtitle>
        Apr 2019 - Jun 2022 <span aria-hidden="true">🇨🇦 🛍️</span>
      </SectionSubtitle>
      <Paragraph>
        I worked for <strong>Shopify</strong> in their Montreal office then
        remotely after COVID. I contributed to merchant facing experiences
        (Shopify Admin, Polaris design system) and buyer facing experiences
        (Customer Accounts) while acting as an{" "}
        <Anchor href="https://dev.to/sylvhama/how-to-test-your-web-app-accessibility-26di">
          accessibility advocate
        </Anchor>{" "}
        within my team. I mentored developers via code reviews and pair
        programming. I also championed projects with multidisciplinary teams.
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
        Asiance, a digital agency located in <strong>Seoul</strong>. I also have{" "}
        worked in <strong>Tokyo</strong> as a web developer for two digital
        agencies. I initially joined Netwise for eight months and then I worked
        at Cream for roughly one year. During my time in Asia I've contributed
        to roughly <strong>30 web applications and responsive websites</strong>{" "}
        for worldwide clients such as Lacoste or Air France.
      </Paragraph>

      <SectionSubtitle>
        Studies <span aria-hidden="true">🇫🇷 🎓</span>
      </SectionSubtitle>
      <Paragraph>
        I graduated from <em>Lumière University Lyon 2</em> in 2013. I have a{" "}
        <strong>Master’s degree</strong> in computer science where I focused on
        web development. I also have a License 3 (undergraduate degree) in data
        science. I have interned at four different companies in France,
        Luxembourg and South Korea.
      </Paragraph>
    </Section>
  );
}

function createSentenceEnd(months) {
  if (months === 0) {
    return ".";
  }

  if (months === 1) {
    return " and 1 month.";
  }

  return ` and ${months} months.`;
}
