import React from "react";

import { Section } from "components/Section";
import { Paragraph } from "components/shared/Paragraph";

export default function Index() {
  return (
    <Section title="About Me" keywords={["react", "javascript", "web"]}>
      <Paragraph>
        I’m a French expat working remotely in Montreal. I{" "}
        <span role="img" aria-label="love">
          💖
        </span>{" "}
        crafting accessible and performant UX with <em>React</em>.
      </Paragraph>
    </Section>
  ); 
}
