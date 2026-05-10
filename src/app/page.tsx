import About from "@/components/About";
import Contact from "@/components/Contact";
import Faculty from "@/components/Faculty";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Programs from "@/components/Programs";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
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
