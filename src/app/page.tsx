import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Faculty from "@/components/Faculty";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Faculty />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
