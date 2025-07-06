import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsLetterSignup";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
};

export default Home;
