import React from "react";

import { Section } from "components/Section";
import { Paragraph } from "components/shared/Paragraph";

export default function Index() {
  return (
    <Section title="About Me" keywords={["react", "javascript", "web"]}>
      <Paragraph>
        I’m a French citizen and a permanent resident of Canada working remotely
        in Montreal. I{" "}
        <span role="img" aria-label="love">
          💖
        </span>{" "}
        crafting accessible and performant Web{" "}
        <abbr title="User Interfaces">UI</abbr>. I mainly work with{" "}
        <em>React</em>. The <abbr title="Keep it Simple, Stupid">KISS</abbr>{" "}
        principle is my mojo.
      </Paragraph>
    </Section>
  );
}
