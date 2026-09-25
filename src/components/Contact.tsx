import React, { useState } from "react";
import { Mail, Linkedin, Send, Check, AlertCircle, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";
import { triggerEmailModal } from "./EmailOptionsModal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", company: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Let's Start a Conversation
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-lg mx-auto">
            Whether you are looking to hire, discuss people operations strategies, or collaborate, feel free to reach out.
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct info and Actions */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                I am currently located in Kathmandu, Nepal, and available to collaborate on global systems-building and local operations leads.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="h-10 w-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-teal-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-500">Direct Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      onClick={triggerEmailModal}
                      className="font-sans text-sm sm:text-base font-semibold text-slate-200 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {personalInfo.phone && (
                  <div className="flex items-center space-x-3.5">
                    <div className="h-10 w-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-teal-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-slate-500">Phone Number</p>
                      <a
                        href={`tel:${personalInfo.phone.replace(/[\s-]/g, "")}`}
                        className="font-sans text-sm sm:text-base font-semibold text-slate-200 hover:text-teal-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3.5">
                  <div className="h-10 w-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-teal-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-500">Location</p>
                    <p className="font-sans text-sm sm:text-base font-semibold text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs / Socials */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/sachin-shrestha-82012419b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-sans text-sm font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-6 text-left">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono uppercase text-slate-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg p-3 text-sm transition-all outline-none text-slate-100 placeholder:text-slate-600"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono uppercase text-slate-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg p-3 text-sm transition-all outline-none text-slate-100 placeholder:text-slate-600"
                      placeholder="e.g. jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-mono uppercase text-slate-400">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg p-3 text-sm transition-all outline-none text-slate-100 placeholder:text-slate-600"
                    placeholder="e.g. ACME Corp"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono uppercase text-slate-400">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg p-3 text-sm transition-all outline-none text-slate-100 resize-none placeholder:text-slate-600"
                    placeholder="Hi Sachin, I would love to connect to discuss..."
                  />
                </div>

                {/* Submitting state alerts */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg flex items-center space-x-3 text-teal-400"
                    >
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm font-sans">
                        Message sent successfully! Sachin will get back to you shortly.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-center space-x-3 text-rose-400"
                    >
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm font-sans">
                        Please fill in all required fields marked with * and try again.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-400 disabled:bg-slate-800 text-slate-950 font-sans font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-spin h-5 w-5 border-2 border-slate-950 border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
