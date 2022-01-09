import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <Seo title="404: Not found" />
      <StaticImage
        src="../images/travolta.gif"
        placeholder="blurred"
        layout="fixed"
        width={280}
        quality={100}
        alt="Confused John Travolta scene from Pulp Fiction"
      />
    </div>
  );
}
