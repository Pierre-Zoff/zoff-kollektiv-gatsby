import React from "react";

import Helmet from "../components/helmet";
import NavBar from "../components/navBar";
import ThemaTeaser from "../components/themaTeaser";
import Layout from "../components/layout";
import TextStripe from "../components/textStripe";

const IndexPage = () => {
  return (
    <Layout>
      <TextStripe>
        Zoff ist ein Kollektiv für visuelle Kommunikation. Wir arbeiten an der
        Schnittstelle zwischen Design, Kunst und Politik. Gemeinsam konzipieren,
        gestalten und programmieren wir Webseiten, entwickeln Kampagnen,
        Publikationen und Ausstellungen.
      </TextStripe>

      <TextStripe className="text-center bg-gray text-white">
        Zoff GbR
        <br />
        Lausitzer Strasse 10
        <br />
        10999 Berlin
        <br />
        <a href="mailto:kontakt@zoff-kollektiv.net">
          kontakt@zoff-kollektiv.net
        </a>
      </TextStripe>
    </Layout>
  );
};

export default IndexPage;
