import React from "react";
import Layout from "../components/layout";
import HeroImage from "../components/project/heroImage";
import ProjectTeaser from "../components/project/projectTeaser";
import HeaderWithImage from "../components/project/headerWithImage";
import TextStripe from "../components/textStripe";

const IndexPage = () => {
  return (
    <Layout themeColor="green">
      <HeaderWithImage title="#intervenieren" image="romarchive-teaser.jpg" />

      <TextStripe classNames="bg-green text-white">
        Wir wollen durch Projekte an denen wir mit Zoff arbeiten Empowerment
        stärken. Einen Raum aufmachen, in dem Menschen, die sonst nicht gehört
        werden, ihre Gedanken formulieren können. Empowern, indem Menschen
        sprechen können, die sonst keine Gelegenheit dazu haben. Empowern, indem
        Menschen in den Prozess der Gestaltung bzw Entstehung eines Produktes
        oder Kommunikationswerkzeugs so eingebunden werden, dass sie dadurch
        gestärkt werden.
      </TextStripe>

      <div className="relative">
        <div className="sticky top-0 mb-6">
          <HeroImage name="romarchive-teaser.jpg" />
        </div>
        <ProjectTeaser
          projectTitle="Romarchive"
          projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
          projectDescription="Kooperation Dokumentations- und Kulturzentrum Deutscher Sinti und Roma e.V. (Trägerinstitution), SauerbreyRaabe (Initiatorinnen und Projektmanagement), Deutsche Kinemathek (Konzeption und Vermittlung von digitaler Archivierung), OpenVideo Multitude Media (Konzeption und Programmierung) Header Image »Rewriting the protocols« by Marina Abramovich out of section visuals arts in www.romarchive.eu Links RomArchive Jahr 2019"
          projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
        />
      </div>
      <div className="relative">
        <div className="sticky top-0 mb-6">
          <HeroImage name="about-united-teaser.jpg" />
        </div>
        <ProjectTeaser
          projectTitle=":// about united"
          projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
          projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
          projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
        />
      </div>
      <div className="relative">
        <div className="sticky top-0 mb-6">
          <HeroImage name="mietendeckel-teaser.jpg" />
        </div>
        <ProjectTeaser
          projectTitle="Mietendeckel, jetzt!"
          projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
          projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
          projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
        />
      </div>
      <div className="relative">
        <div className="sticky top-0 mb-6">
          <HeroImage name="racial-profiling-teaser.jpg" />
        </div>
        <ProjectTeaser
          projectTitle="Racial Profiling"
          projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
          projectDescription="Im Jahr 2013 startete eine Gruppe von Aktivisten in Berlin eine Reihe von Soliparty, um Gelder für Gruppen zu sammeln, die sich mit Migrations- und Rassismusfragen beschäftigen. Diese Veranstaltungsreihe finden seither jedes Jahr im Januar im kollektiv Club ://about blank statt . Im Jahr 2015 bat uns die Gruppe, eine Plakatkampagne zu entwickeln, die nicht nur für die Veranstaltung werben, sondern auch eine diskursive Intervention im öffentlichen Raum darstellen würde. Zwischen 2015 und 2019 haben wir mit dieser Gruppe sowie mit vielen anderen Organisationen und einzel Personnen zusammengearbeitet um diese Kampagne zu entwicklen."
          projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
        />
      </div>
      <div className="relative">
        <div className="sticky top-0 mb-6">
          <HeroImage name="digitale-gewalt-teaser.jpg" />
        </div>
        <ProjectTeaser
          projectTitle="Digitale Gewalt"
          projectSubtitle="Digitales Archiv der Roma &amp; Sinti"
          projectDescription="Migrant*innen, die als Vertragsarbeiter*innen, als Studierende oder politische Emigrant*innen in die DDR kamen, erzählen von ihren Lebenswegen und Auseinandersetzungen mit den Menschen und Strukturen der DDR sowie der Wende- und Nachwendezeit."
          projectMeta={[{ metaTag: "Kooperation", metaInfo: "Zusmmen mit " }]}
        />
      </div>
      <TextStripe className="bg-gray text-center text-white">
        #intervenieren
      </TextStripe>
    </Layout>
  );
};

export default IndexPage;
