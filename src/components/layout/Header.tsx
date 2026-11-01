
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919407072008?text=" +
  encodeURIComponent(
    "Hello Imperial Wellness Spaa, I would like to know more about my massage services and book an appointment."
  );

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect currently active page
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="imperial-header sticky top-0 z-[100] w-full border-b border-[#D9AD4D]/50 bg-[#090806] text-white shadow-[0_4px_18px_rgba(0,0,0,0.25)]">

        {/* MAIN HEADER */}
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

          {/* DESKTOP LOGO */}
          <Link
            href="/"
            aria-label="Imperial Wellness Spaa home"
            className="hidden shrink-0 items-center lg:flex"
          >
            <Image
              src="/images/branding/horizontal_logo.png"
              alt="Imperial Wellness Spaa"
              width={160}
              height={48}
              priority
              className="block h-12 w-40 object-contain"
            />
          </Link>

          {/* MOBILE HEADER */}
          <div className="grid w-full grid-cols-3 items-center lg:hidden">

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-start text-[#D9AD4D]"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

            {/* MOBILE LOGO */}
            <Link
              href="/"
              aria-label="Imperial Wellness Spaa home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center"
            >
              <Image
                src="/images/branding/horizontal_logo.png"
                alt="Imperial Wellness Spaa"
                width={128}
                height={40}
                priority
                className="block h-10 w-32 object-contain"
              />
            </Link>

            {/* WHATSAPP ICON */}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on WhatsApp"
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F5D88A] to-[#D9AD4D] text-[#090806]"
            >
              <Phone size={18} />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden h-full items-center gap-7 lg:flex xl:gap-8"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`imperial-nav-link group relative flex h-16 items-center text-[13px] font-medium transition-colors duration-300 ${
                    active ? "is-active" : ""
                  }`}
                >
                  {item.label}

                  {/* ACTIVE / HOVER UNDERLINE */}
                  <span
                    className={`imperial-nav-underline absolute bottom-3 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[#D9AD4D] to-[#F5D88A] transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP WHATSAPP BUTTON */}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-[#D9AD4D] to-[#F5D88A] px-4 text-xs font-semibold text-[#090806] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(217,173,77,0.3)] lg:flex"
          >
            <MessageCircle size={16} />
            Book on WhatsApp
          </Link>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`grid overflow-hidden border-t border-[#D9AD4D]/20 bg-[#090806] transition-all duration-300 lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] border-transparent opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="min-h-0 overflow-hidden px-5"
          >
            <div className="flex flex-col py-2">

              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`imperial-mobile-link border-b border-white/10 py-3.5 pl-3 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "is-active border-l-2 border-l-[#D9AD4D] text-[#F5D88A]"
                        : "border-l-2 border-l-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="my-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D9AD4D] to-[#F5D88A] py-3 text-sm font-bold text-[#090806]"
              >
                <MessageCircle size={17} />
                Book on WhatsApp
              </Link>

            </div>
          </nav>
        </div>
      </header>

      {/* NAVIGATION STYLES */}
      <style jsx global>{`
        .imperial-header .imperial-nav-link {
          color: #f5f0e6 !important;
          text-decoration: none !important;
        }

        /* ACTIVE PAGE */
        .imperial-header .imperial-nav-link.is-active {
          color: #f5d88a !important;
        }

        /* HOVER COLOR */
        .imperial-header .imperial-nav-link:hover,
        .imperial-header .imperial-nav-link:focus-visible {
          color: #f5d88a !important;
        }

        /* HOVER UNDERLINE */
        .imperial-header .imperial-nav-link:hover
          .imperial-nav-underline,
        .imperial-header .imperial-nav-link:focus-visible
          .imperial-nav-underline {
          transform: scaleX(1);
        }

        /* ACTIVE UNDERLINE ALWAYS VISIBLE */
        .imperial-header .imperial-nav-link.is-active
          .imperial-nav-underline {
          transform: scaleX(1);
        }

        /* MOBILE LINKS */
        .imperial-header .imperial-mobile-link {
          color: #f5f0e6 !important;
          text-decoration: none !important;
        }

        .imperial-header .imperial-mobile-link.is-active,
        .imperial-header .imperial-mobile-link:hover {
          color: #f5d88a !important;
        }
      `}</style>
    </>
  );
}
