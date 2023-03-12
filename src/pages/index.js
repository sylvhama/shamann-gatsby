import React from "react";

import { Section } from "components/Section";
import { Paragraph } from "components/shared/Paragraph";
import { VisuallyHidden } from "components/shared/VisuallyHidden";

export default function Index() {
  return (
    <Section title="About Me" keywords={["react", "javascript", "web"]}>
      <Paragraph>
        I’m a French expat working remotely in Montreal. I{" "}
        <span role="presentation">💖</span>
        <VisuallyHidden>love</VisuallyHidden> crafting accessible and performant
        UX with <em>React</em>.
      </Paragraph>
    </Section>
  );
}
