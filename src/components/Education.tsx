import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Academic Background
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Education & Qualifications
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
        </div>

        {/* Education Grid */}
        <div className="grid gap-8">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-md hover:border-teal-500/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col sm:flex-row sm:items-start gap-6"
            >
              {/* Highlight ribbon for first education (latest/MBA) */}
              {idx === 0 && (
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-teal-400" />
              )}

              {/* Graduation Cap Icon block */}
              <div className="h-12 w-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>

              {/* Detail Content */}
              <div className="flex-grow space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="inline-flex items-center space-x-1.5 bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono font-medium py-1 px-3 rounded-full w-fit">
                    <Calendar className="h-3.5 w-3.5 text-teal-400" />
                    <span>{edu.duration}</span>
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base font-semibold text-slate-200">
                  {edu.institution}
                </p>

                {/* Additional contextual text depending on the degree */}
                {idx === 0 ? (
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    Advanced business studies specializing in management, human resource strategy, operations, and organizational development.
                  </p>
                ) : (
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    Undergraduate program focused on financial modeling, business communication, and general management practices.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
