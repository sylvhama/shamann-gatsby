import React from "react";
import styled from "styled-components";

import Anchor from "./shared/Anchor";
import { List } from "./shared/List";

const StyledFooter = styled.footer`
  padding-bottom: 2rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <nav aria-label="External links">
        <List hideMarkers>
          <li>
            View my complete resume on{" "}
            <Anchor href="https://www.linkedin.com/in/sylvainhamann">
              LinkedIn
            </Anchor>
            .
          </li>
          <li>
            Download my resume as PDF on{" "}
            <Anchor href="https://docs.google.com/document/d/1VybgVJOKbZOqbQwRfGkYp--9yP-xXfMF5TA7s8M250I/edit?usp=sharing">
              Google Drive
            </Anchor>
            .
          </li>
          <li>
            Browse my portfolio on{" "}
            <Anchor href="https://www.behance.net/sylvhama/">Behance</Anchor>.
          </li>
          <li>
            See some of my code on{" "}
            <Anchor href="https://github.com/sylvhama">GitHub</Anchor>.
          </li>
        </List>
      </nav>
    </StyledFooter>
  );
}
