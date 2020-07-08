import React from "react";

import ThemaTeaser from "../components/themaTeaser";
import Layout from "../components/layout";
import TextStripe from "../components/textStripe";
import SmallBanner from "../components/smallBanner";
import HeaderWithImage from "../components/project/headerWithImage";

const IndexPage = () => {
  return (
    <Layout themeColor="gray">
      <HeaderWithImage
        title="Kollektiv für visuelle Kommunikation"
        image="landing-mietendeckel.jpg"
      />

      <SmallBanner>letzte Projekte</SmallBanner>

      <ThemaTeaser teaserImage="landing-mietendeckel.jpg" bgClass="bg-red" />

      <ThemaTeaser teaserImage="landing-iuventa.jpg" bgClass="bg-green" />

      <TextStripe>
        Zoff ist ein Kollektiv für visuelle Kommunikation. Wir arbeiten an der
        Schnittstelle zwischen Design, Kunst und Politik. Gemeinsam konzipieren,
        gestalten und programmieren wir Webseiten, entwickeln Kampagnen,
        Publikationen und Ausstellungen.
      </TextStripe>

      <ThemaTeaser teaserImage="landing-bruderland.jpg" bgClass="bg-blue" />

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
