import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import CopyrightSection from "./CopyrightSection";
import FindMoreSection from "./FindMoreSection";
import FooterMenu from "./FooterMenu";
import Hero from "./Hero";
import ReadMoreSection from "./ReadMoreSection";
import SearchSection from "./SearchSection";
import Section from "./Section";
import SubscribeSection from "./SubscribeSection";
import TestimonialsSection from "./TestimonialsSection";

function HomePage() {
  return (
    <>
      <Hero />
      <Section />
      <SearchSection />
      <FindMoreSection />
      <ContactSection />
      <AboutSection />
      <TestimonialsSection />
      <ReadMoreSection />
      <SubscribeSection />
      <FooterMenu />
      <CopyrightSection />
    </>
  );
}

export default HomePage;
