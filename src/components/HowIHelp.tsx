import React, { useRef, useState, useEffect } from "react";
import { ShieldCheck, Globe, Cpu, UserMinus, TrendingUp, Scale, Zap, ChevronLeft, ChevronRight } from "lucide-react";

interface HelpCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cardsData: HelpCardItem[] = [
  {
    id: "help-1",
    title: "Build compliant HR systems from scratch",
    description: "Designing onboarding, payroll, and documentation workflows that hold up under audit.",
    icon: <ShieldCheck className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    id: "help-2",
    title: "Manage payroll across multiple countries without missed cycles",
    description: "Proven across Nepal, Hong Kong, Singapore, and Australia.",
    icon: <Globe className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    id: "help-3",
    title: "Turn messy manual processes into digital systems",
    description: "Cut manual HR errors by 80% through structured HRMS implementation.",
    icon: <Cpu className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    id: "help-4",
    title: "Keep exits and offboarding 100% compliant",
    description: "Reducing legal and operational risk during employee transitions.",
    icon: <UserMinus className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    id: "help-5",
    title: "Design performance systems people actually use",
    description: "KRA/KPI frameworks that improve accountability without adding bureaucracy.",
    icon: <TrendingUp className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    id: "help-6",
    title: "Bridge the gap between compliance and culture",
    description: "Policies that protect the company without making the workplace feel rigid.",
    icon: <Scale className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    id: "help-7",
    title: "Move fast without cutting corners",
    description: "Structured workflows catch and resolve issues quickly, not later.",
    icon: <Zap className="h-4.5 w-4.5 text-teal-400" />
  }
];

const CARD_WIDTH = 232;
const CARD_GAP = 12;
const TOTAL_STEP = CARD_WIDTH + CARD_GAP; // 244px

export default function HowIHelp() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScrollBounds = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);

    const calculatedIndex = Math.min(
      cardsData.length - 1,
      Math.max(0, Math.round(scrollLeft / TOTAL_STEP))
    );
    setActiveIndex(calculatedIndex);
  };

  useEffect(() => {
    checkScrollBounds();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollBounds, { passive: true });
    window.addEventListener("resize", checkScrollBounds);

    return () => {
      el.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
    };
  }, []);

  const scrollByTwo = (direction: -1 | 1) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction * TOTAL_STEP * 2,
      behavior: "smooth"
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * TOTAL_STEP,
      behavior: "smooth"
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByTwo(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByTwo(1);
    }
  };

  return (
    <section id="how-i-help" className="py-16 sm:py-20 bg-transparent border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Operational Value
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            How I Can Help Your Team
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-lg mx-auto">
            Practical human resources and systems operations designed to eliminate friction and foster clean organizational scaling.
          </p>
        </div>

        {/* Top Controls Bar (Arrows above row on the right) */}
        <div className="flex justify-end items-center gap-2 mb-3 px-1">
          <button
            type="button"
            onClick={() => scrollByTwo(-1)}
            disabled={!canScrollPrev}
            aria-label="Previous cards"
            className="h-9 w-9 rounded-full bg-[#0c1224] border border-[#1c2a44] text-slate-400 hover:text-teal-300 hover:border-teal-500/40 hover:bg-[#101830] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByTwo(1)}
            disabled={!canScrollNext}
            aria-label="Next cards"
            className="h-9 w-9 rounded-full bg-[#0c1224] border border-[#1c2a44] text-slate-400 hover:text-teal-300 hover:border-teal-500/40 hover:bg-[#101830] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* ONE Horizontal Scrolling Row */}
        <div
          ref={scrollRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Operational Value Cards Carousel"
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 pb-4 scroll-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-2xl no-scrollbar select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {cardsData.map((item, idx) => (
            <div
              key={item.id}
              className="flex-none w-[232px] snap-start bg-[#0c1224] border border-[#1c2a44] rounded-2xl p-5 flex flex-col justify-start text-left gap-2.5 transition-all duration-300 hover:border-teal-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/5 group"
            >
              {/* Small Teal Icon Tile */}
              <div className="h-9 w-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mb-1 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all">
                {item.icon}
              </div>

              {/* Bold Title */}
              <h3 className="font-display text-sm font-bold text-white leading-snug group-hover:text-teal-300 transition-colors">
                {item.title}
              </h3>

              {/* Short Muted Description */}
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dots Indicator with wider active teal pill */}
        <div
          className="flex justify-center items-center gap-2 mt-4"
          role="tablist"
          aria-label="Carousel navigation dots"
        >
          {cardsData.map((_, dotIdx) => {
            const isActive = dotIdx === activeIndex;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToCard(dotIdx)}
                aria-label={`Scroll to card ${dotIdx + 1} of ${cardsData.length}`}
                role="tab"
                aria-selected={isActive}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                  isActive
                    ? "w-6 bg-teal-400 shadow-[0_0_8px_rgba(25,211,176,0.6)]"
                    : "w-2 bg-[#1c2a44] hover:bg-slate-700"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
