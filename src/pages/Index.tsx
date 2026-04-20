import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Measurements from "@/components/portfolio/Measurements";
import Vision from "@/components/portfolio/Vision";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import RateCard from "@/components/portfolio/RateCard";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Justina Kasuwi",
    jobTitle: "Photogenic Model & Fashion Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    sameAs: [
      "https://instagram.com/justinakasuwi",
      "https://tiktok.com/@justinakasuwi",
    ],
  };

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Measurements />
      <Vision />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <RateCard />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
