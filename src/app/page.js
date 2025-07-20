import Layout from "@/components/Layout";
import HeroSection from "@/components/LandingPage/HeoSection";
import ServicesOffered from "@/components/LandingPage/ServicesOffered";
import AboutUs from "@/components/LandingPage/AboutUs";
import Testimonials from "@/components/LandingPage/Testimonials";
import CallToAction from "@/components/LandingPage/CallToAction";
import ContactForm from "@/components/LandingPage/ContactForm";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesOffered />
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <CallToAction />
    </Layout>
  );
}
