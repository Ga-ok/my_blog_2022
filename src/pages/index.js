import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
      {/* StaticImage를 사용하면 디바이스에 따라 최적화된 이미지를 제공 */}
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
