"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
	const features = [
		"Accredited Institution",
		"Expert Faculty",
		"Modern Facilities",
		"Community Focus",
	];

	return (
		<section
			id="about"
			className="section-padding bg-slate-50">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Image side */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative">
						<div className="rounded-2xl overflow-hidden shadow-premium relative z-10">
							<img
								src="/images/about.png"
								alt="About Greenwood High"
								className="w-full h-auto transform transition-transform hover:scale-105 duration-700"
							/>
						</div>
						{/* Background Shape */}
						<div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-0" />
					</motion.div>

					{/* Content side */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}>
						<h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">
							Our Legacy
						</h2>
						<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
							A Tradition of Excellence <br /> Since 1950
						</h3>

						<p className="text-lg text-slate-600 mb-6 leading-relaxed italic">
							&quot;We are committed to providing exceptional education that
							nurtures academic excellence, character development, and social
							responsibility.&quot;
						</p>

						<p className="text-slate-600 mb-8 leading-relaxed">
							Greenwood High has been a beacon of educational excellence for
							over seven decades, serving the community with dedication and
							innovation. Our 50-acre campus features state-of-the-art
							facilities designed to enhance the learning experience across all
							disciplines.
						</p>

						<div className="grid sm:grid-cols-2 gap-4 mb-10">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-center gap-3">
									<div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
										<CheckCircle2 size={16} />
									</div>
									<span className="font-medium text-slate-700">{feature}</span>
								</div>
							))}
						</div>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-secondary transition-colors">
							Learn More About Us
						</motion.button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
