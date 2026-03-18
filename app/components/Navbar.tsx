"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "solutions", label: t('solutions') },
    { id: "how-it-works", label: t('howItWorks') },
    { id: "case-studies", label: t('caseStudies') }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ease-in-out border-b
          ${scrolled || isMenuOpen ? "bg-brand-deep/95 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"}
        `}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline z-50">
            <Image src="/reactive-logo.svg" alt="Logo" width={140} height={40} className="w-32 md:w-40" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium tracking-wide text-brand-cloud/60 no-underline transition-colors duration-200 hover:text-brand-cloud"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('bookCall')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden z-50 transition-all hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] flex w-screen flex-col items-center justify-start pt-32 mt-18 gap-10 bg-brand-deep overflow-y-auto transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold tracking-tight text-white/90 no-underline transition-all hover:text-brand-cyan active:scale-95"
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="btn-primary mt-4 scale-125"
        >
          {t('bookCall')}
        </a>
        {/* Spacer for scrollability */}
        <div className="h-20 shrink-0" />
      </div>
    </>
  );
}
