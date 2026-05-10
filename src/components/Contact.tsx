"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
	const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
		"idle"
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormState("submitting");
		// Simulate API call
		setTimeout(() => {
			setFormState("success");
			setTimeout(() => setFormState("idle"), 3000);
		}, 1500);
	};

	return (
		<section
			id="contact"
			className="section-padding bg-slate-50">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Info side */}
					<div>
						<motion.h2
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">
							Get In Touch
						</motion.h2>
						<motion.h3
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
							Contact Our Admissions Office
						</motion.h3>

						<p className="text-slate-600 mb-12 text-lg leading-relaxed">
							Have questions about admissions, programs, or campus life? Our
							team is here to help you navigate your educational journey.
						</p>

						<div className="space-y-8">
							{[
								{
									icon: MapPin,
									title: "Visit Us",
									details: "123 Education Drive, Greenwood, CA 90210",
								},
								{ icon: Phone, title: "Call Us", details: "(555) 123-4567" },
								{
									icon: Mail,
									title: "Email Us",
									details: "info@greenwoodhigh.edu",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-start gap-5">
									<div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-primary shrink-0">
										<item.icon size={24} />
									</div>
									<div>
										<h5 className="font-bold text-primary mb-1">
											{item.title}
										</h5>
										<p className="text-slate-600">{item.details}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Form side */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="bg-white p-8 md:p-12 rounded-3xl shadow-premium border border-slate-100">
						{formState === "success" ?
							<div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
								<div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
									<CheckCircle size={48} />
								</div>
								<h4 className="text-2xl font-bold text-primary mb-2">
									Message Sent!
								</h4>
								<p className="text-slate-600">
									Thank you for reaching out. We&apos;ll get back to you
									shortly.
								</p>
							</div>
						:	<form
								onSubmit={handleSubmit}
								className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="text-sm font-bold text-primary ml-1">
											Full Name
										</label>
										<input
											required
											type="text"
											placeholder="John Doe"
											className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-secondary transition-all"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-bold text-primary ml-1">
											Email Address
										</label>
										<input
											required
											type="email"
											placeholder="john@example.com"
											className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-secondary transition-all"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-bold text-primary ml-1">
										Subject
									</label>
									<input
										required
										type="text"
										placeholder="Admissions Inquiry"
										className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-secondary transition-all"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-bold text-primary ml-1">
										Message
									</label>
									<textarea
										required
										rows={4}
										placeholder="Tell us how we can help..."
										className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-secondary transition-all resize-none"></textarea>
								</div>

								<button
									disabled={formState === "submitting"}
									className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-secondary transition-all flex items-center justify-center gap-2 group disabled:opacity-70">
									{formState === "submitting" ?
										<div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
									:	<>
											Send Message
											<Send
												size={18}
												className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
											/>
										</>
									}
								</button>
							</form>
						}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
