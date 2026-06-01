import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Lesson from "@/components/sections/Lesson";
import Gallery from "@/components/sections/Gallery";
import Message from "@/components/sections/Message";
import Instagram from "@/components/sections/Instagram";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Lesson />
      <Gallery />
      <Message />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}
