import React, { useState, useEffect } from "react";
import { Mail, X, Copy, Check, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";

// Helper helper function to trigger the modal from anywhere
export const triggerEmailModal = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  window.dispatchEvent(new CustomEvent("open-email-modal"));
};

export default function EmailOptionsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-email-modal", handleOpen);
    return () => window.removeEventListener("open-email-modal", handleOpen);
  }, []);

  const email = personalInfo.email;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const emailOptions = [
    {
      name: "Gmail (Web)",
      description: "Compose using Gmail in your browser",
      icon: <Mail className="h-5 w-5 text-red-400" />,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      target: "_blank",
      rel: "noopener noreferrer",
      colorClass: "hover:border-red-500/30 hover:bg-red-500/5",
    },
    {
      name: "Outlook (Web)",
      description: "Compose using Outlook / Hotmail in your browser",
      icon: <Mail className="h-5 w-5 text-blue-400" />,
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
      target: "_blank",
      rel: "noopener noreferrer",
      colorClass: "hover:border-blue-500/30 hover:bg-blue-500/5",
    },
    {
      name: "Default Mail App",
      description: "Open your system's default email client",
      icon: <Mail className="h-5 w-5 text-teal-400" />,
      href: `mailto:${email}`,
      target: "_self",
      colorClass: "hover:border-teal-500/30 hover:bg-teal-500/5",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            id="email-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10"
            id="email-modal-content"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Send an Email
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {email}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
                id="close-email-modal-btn"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-300 font-sans">
                How would you like to compose your message to Sachin?
              </p>

              <div className="space-y-2.5">
                {emailOptions.map((opt, idx) => (
                  <a
                    key={idx}
                    href={opt.href}
                    target={opt.target}
                    rel={opt.rel}
                    onClick={() => {
                      // Small timeout to close modal after action (so UX feels seamless)
                      if (opt.target === "_self") {
                        setTimeout(() => setIsOpen(false), 500);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-start gap-4 p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition-all group ${opt.colorClass}`}
                    id={`email-opt-${idx}`}
                  >
                    <div className="flex-shrink-0 h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800/60 group-hover:scale-105 transition-transform">
                      {opt.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {opt.name}
                        </span>
                        {opt.target === "_blank" && (
                          <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-slate-400 transition-colors" />
                        )}
                      </div>
                      <p className="font-sans text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Copy Address Row */}
              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-dashed border-slate-800 bg-slate-950/20 hover:bg-slate-950/40 hover:border-slate-700 transition-all text-left group"
                  id="copy-email-address-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800/40">
                      {copied ? (
                        <Check className="h-4 w-4 text-teal-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-slate-400 group-hover:text-slate-300 transition-colors" />
                      )}
                    </div>
                    <div>
                      <span className="font-sans text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        {copied ? "Copied to clipboard!" : "Copy email address"}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded border border-slate-850">
                    {copied ? "Done" : "Copy"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
