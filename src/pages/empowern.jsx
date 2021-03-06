import React from "react";
import Layout from "../components/layout";
import HeaderWithImage from "../components/project/headerWithImage";
import ProjectTeaser from "../components/project/projectTeaser";
import TextStripe from "../components/textStripe";
import MediaStripe from "../components/mediaStripe";

const IndexPage = () => {
  return (
    <Layout themeColor="red">
      <HeaderWithImage title="#empowern" image="romarchive-teaser.jpg" />
      <TextStripe classNames="bg-red text-white">
        Wir wollen durch Projekte an denen wir mit Zoff arbeiten Empowerment
        stärken. Einen Raum aufmachen, in dem Menschen, die sonst nicht gehört
        werden, ihre Gedanken formulieren können. Empowern, indem Menschen
        sprechen können, die sonst keine Gelegenheit dazu haben. Empowern, indem
        Menschen in den Prozess der Gestaltung bzw Entstehung eines Produktes
        oder Kommunikationswerkzeugs so eingebunden werden, dass sie dadurch
        gestärkt werden.
      </TextStripe>

      <ProjectTeaser
        projectSlug="romarchive"
        projectImage="romarchive-teaser.jpg"
        projectTitle="Romarchive"
        projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
        projectDescription="Kooperation Dokumentations- und Kulturzentrum Deutscher Sinti und Roma e.V. (Trägerinstitution), SauerbreyRaabe (Initiatorinnen und Projektmanagement), Deutsche Kinemathek (Konzeption und Vermittlung von digitaler Archivierung), OpenVideo Multitude Media (Konzeption und Programmierung) Header Image »Rewriting the protocols« by Marina Abramovich out of section visuals arts in www.romarchive.eu Links RomArchive Jahr 2019"
        projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
      >
        <MediaStripe
          images={[
            { name: "romarchive-teaser.jpg" },
            { name: "mietendeckel-teaser.jpg" },
          ]}
          credits="Ansichten von Babylon"
        />
      </ProjectTeaser>

      <ProjectTeaser
        projectImage="about-united-teaser.jpg"
        projectSlug="romarchive"
        projectTitle=":// about united"
        projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
        projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
        projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
      >
        <MediaStripe
          images={[
            { name: "romarchive-teaser.jpg" },
            { name: "mietendeckel-teaser.jpg" },
          ]}
          credits="Ansichten von Babylon"
        />
      </ProjectTeaser>

      <ProjectTeaser
        projectTitle="Mietendeckel, jetzt!"
        projectSlug="mietendeckel"
        projectImage="mietendeckel-teaser.jpg"
        projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
        projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
        projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
      >
        <MediaStripe
          images={[
            { name: "romarchive-teaser.jpg" },
            { name: "mietendeckel-teaser.jpg" },
          ]}
          credits="Ansichten von Babylon"
        />
      </ProjectTeaser>

      <ProjectTeaser
        projectTitle="Racial Profiling"
        projectImage="racial-profiling-teaser.jpg"
        projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
        projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
        projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
      >
        <MediaStripe
          images={[
            { name: "romarchive-teaser.jpg" },
            { name: "mietendeckel-teaser.jpg" },
          ]}
          credits="Ansichten von Babylon"
        />
      </ProjectTeaser>

      <ProjectTeaser
        projectTitle="Digitale Gewalt"
        projectImage="digitale-gewalt-teaser.jpg"
        projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
        projectDescription="Migrant*innen, die als Vertragsarbeiter*innen, als Studierende oder politische Emigrant*innen in die DDR kamen, erzählen von ihren Lebenswegen und Auseinandersetzungen mit den Menschen und Strukturen der DDR sowie der Wende- und Nachwendezeit."
        projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
      />
      <TextStripe className="bg-gray text-center text-white">
        #empowern
      </TextStripe>
    </Layout>
  );
};

export default IndexPage;
