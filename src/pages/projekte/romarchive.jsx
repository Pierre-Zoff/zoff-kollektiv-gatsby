import React from "react";
import Layout from "../../components/layout";
import ProjectTeaser from "../../components/project/projectTeaser";
import ProjectFooter from "../../components/project/projectFooter";

import Quote from "../../components/project/quote";
import TextWithImages from "../../components/project/textWithImages";
import SingleImage from "../../components/project/singleImage";
import ProjectFooterNavbar from "../../components/project/projectFooterNavbar";

const IndexPage = () => {
  return (
    <Layout>
      <ProjectTeaser
        projectImage="about-united-teaser.jpg"
        projectTitle="RomArchive"
        projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
        projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
        projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
      />
      <Quote author="Tímea Junghans">We must start a Roma Archive</Quote>
      <TextWithImages
        textPosition="left"
        textTitle="Titel"
        credits="Fotocredits"
        images={[
          { name: "romarchive-teaser.jpg" },
          { name: "mietendeckel-teaser.jpg" },
        ]}
      >
        ich bin das child
      </TextWithImages>
      <SingleImage image="romarchive-teaser.jpg" />
      <TextWithImages
        textPosition="right"
        textTitle="Titel"
        credits="Fotocredits"
        images={[
          { name: "romarchive-teaser.jpg" },
          { name: "mietendeckel-teaser.jpg" },
        ]}
      >
        12 Kurator*innen aus 8 verschiedenen Ländern haben die 10 Bereiche Tanz,
        Bildpolitik, …. kuratiert. Wichtig war das Bild von Roma aus
        verschiedenen Perspektiven mit diversen Stimmen zu erzählen und nicht
        auf ein wahres Bild zu reduzieren. Und nicht eine ethnologische Sammlung
        von Kunstwerken zu machen, sondern diese in ihrem Kontext und mitihrere
        Geschichte zu zeigen. Ein weiteres Ziel war Romani Artists als Akteure
        zu präsentieren und nicht als Objekte des Blicks.
      </TextWithImages>
      <TextWithImages
        textPosition="left"
        textTitle="Titel"
        credits="Fotocredits"
        isHighlight
        images={[
          { name: "romarchive-teaser.jpg" },
          { name: "mietendeckel-teaser.jpg" },
        ]}
      >
        ich bin das child
      </TextWithImages>
      <ProjectFooter title="#empowern" />
      <ProjectFooterNavbar
        previous={{ link: "mietendeckel", projectName: "Mietendeckel" }}
        next={{ link: "iuventa", projectName: "Iuventa" }}
      />
    </Layout>
  );
};

export default IndexPage;
