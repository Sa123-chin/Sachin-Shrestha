import React from "react";
import { Quote, MessageSquare } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-transparent border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Endorsements
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Professional Testimonials
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-lg mx-auto">
            What managers and colleagues say about Sachin's work ethic, leadership, and operational diligence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group hover:border-teal-500/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Decorative Big Quote Icon in background */}
              <div className="absolute top-4 right-4 text-slate-800/25 group-hover:text-teal-500/10 transition-colors">
                <Quote className="h-12 w-12 transform rotate-180" />
              </div>

              <div className="relative">
                {/* Quote Text */}
                <p className="font-sans text-base text-slate-300 italic leading-relaxed pt-2">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="border-t border-slate-800/80 pt-5 mt-6 flex items-start space-x-3.5">
                <div className="h-10 w-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0 font-display font-semibold text-sm">
                  {test.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white">
                    {test.author}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-snug mt-0.5">
                    {test.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
