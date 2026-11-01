"use client";
import Image from "next/image";
import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import { MapPin, Clock3, Phone, Mail, ArrowUpRight } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const phone = "9407072008";
const email = "Imperialwellnessspa@gmail.com";

const address = [
  "2nd Floor, Maharana Tower",
  "Near Jardin Hotel, Tulsinagar",
  "Nipania, Indore - 452010",
  "Madhya Pradesh",
];

const contacts = [
  {
    icon: Phone,
    label: phone,
    href: `tel:${phone}`,
  },
  {
    icon: Mail,
    label: email,
    href: `mailto:${email}`,
  },
  {
    icon: BsInstagram,
    label: "@imperial_wellness_spa",
    href: "https://www.instagram.com/imperial_wellness_spa/",
  },
  {
    icon: FaFacebook,
    label: "Imperial Wellness Spaa",
    href: "https://www.facebook.com/",
  },
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Maharana+Tower+Nipania+Indore";

function InfoItem({
  icon: Icon,
  title,
  children,
}: {
  icon: ElementType;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#D9AD4D]/50 bg-[#D9AD4D]/15 text-[#F5D16D] sm:size-10">
        <Icon size={19} strokeWidth={1.9} />
      </div>

      <div className="min-w-0 pt-0.5">
        {title && (
          <h3 className="mb-2 text-sm font-semibold !text-white sm:text-base">
            {title}
          </h3>
        )}

        {children}
      </div>
    </div>
  );
}

const textStyle = "text-[13px] leading-[1.85] text-white/85 sm:text-sm";

export default function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="relative overflow-hidden bg-[#090806] text-[#F5F0E6]"
      >
        <div className="relative isolate">
          {/* BACKGROUND IMAGE: SAME IMAGE ON MOBILE AND DESKTOP */}
          {/* <div className="absolute inset-0 z-0 overflow-hidden"> */}
            <Image
              src="/images/banner/banner-01.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_35%] sm:object-center"
            />
          {/* </div> */}

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 z-10 bg-[#090806]/55 sm:bg-[#090806]/75 lg:bg-[#090806]/85" />

          {/* FOOTER CONTENT */}
          <div className="relative z-20 grid lg:grid-cols-[55%_45%]">
            {/* LEFT CONTENT */}
            <div className="relative min-w-0 px-5 py-7 sm:px-8 sm:py-9 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-9 xl:px-14">
              {/* MOBILE EXTERIOR IMAGE */}
              <div className="absolute right-0 top-0 h-[185px] w-[43%] overflow-hidden rounded-bl-[65px] border-b border-l border-[#D9AD4D]/70 sm:h-[210px] sm:w-[40%] lg:hidden">
                <Image
                  src="/images/location/spa-exterior.jpeg"
                  alt="Imperial Wellness Spaa exterior at Maharana Tower, Indore"
                  fill
                  sizes="(max-width: 1023px) 43vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* BRAND HEADER WITH LOGO */}
              <div className="relative z-10 flex min-h-[75px] w-[55%] items-center gap-3 sm:gap-4 lg:min-h-[90px] lg:w-full lg:gap-5">
                {/* LOGO */}
                <Link
                  href="/"
                  aria-label="Imperial Wellness Spaa home"
                  className="shrink-0"
                >
                  <Image
                    src="/images/branding/imperial-logo.png"
                    alt="Imperial Wellness Spaa"
                    width={100}
                    height={100}
                    priority
                    className="h-[55px] w-[55px] object-contain sm:h-[65px] sm:w-[65px] lg:h-[78px] lg:w-[78px]"
                  />
                </Link>

                {/* VERTICAL DIVIDER */}
                <div className="h-12 w-px shrink-0 bg-gradient-to-b from-transparent via-[#D9AD4D] to-transparent sm:h-14 lg:h-16" />

                {/* HEADING */}
                <div className="min-w-0">
                  <h2 className="font-[var(--font-cormorant)] text-[22px] font-semibold leading-tight text-[#F5D88A] sm:text-3xl lg:text-4xl">
                    Visit Our Spa
                  </h2>

                  <p className="mt-1.5 text-[10px] leading-relaxed text-white/80 sm:text-xs lg:text-sm">
                    We're conveniently located in the heart of Indore.
                  </p>
                </div>
              </div>

              {/* GOLD DIVIDER */}
              <div className="my-5 h-px w-full bg-gradient-to-r from-[#D9AD4D]/70 via-[#D9AD4D]/25 to-transparent lg:my-6" />

              {/* MOBILE: ADDRESS + HOURS */}
              <div className="grid w-[58%] grid-cols-1 gap-5 sm:gap-6 lg:hidden">
                {/* ADDRESS */}
                <InfoItem icon={MapPin}>
                  <address className={`${textStyle} not-italic`}>
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>

                  <Link
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#F5D88A] hover:text-white sm:text-sm"
                  >
                    Get Directions
                    <ArrowUpRight size={14} />
                  </Link>
                </InfoItem>

                {/* OPENING HOURS */}
                <InfoItem icon={Clock3}>
                  <h3 className="mb-2 text-sm font-semibold text-[#F5D88A]">
                    Opening Hours
                  </h3>

                  <p className={textStyle}>
                    Sunday to Monday
                    <br />
                    10:00 AM – 11:00 PM
                  </p>
                </InfoItem>
              </div>

              {/* MOBILE CONTACT DETAILS */}
              <div className="mt-6 space-y-4 lg:hidden">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex min-w-0 items-center gap-3"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#D9AD4D]/45 bg-[#D9AD4D]/10 text-[#F5D16D] transition-colors group-hover:bg-[#D9AD4D]/25">
                      <Icon size={18} />
                    </span>

                    <span className="break-all text-[13px] leading-relaxed text-white/90 transition-colors group-hover:text-[#F5D88A] sm:text-sm">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* DESKTOP INFORMATION GRID */}
              <div className="hidden grid-cols-[1.15fr_0.85fr_1.2fr] gap-5 lg:grid">
                {/* ADDRESS */}
                <InfoItem icon={MapPin} title="Our Location">
                  <address className={`${textStyle} not-italic`}>
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>

                  <Link
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#F5D88A] hover:text-white"
                  >
                    Get Directions
                    <ArrowUpRight size={14} />
                  </Link>
                </InfoItem>

                {/* OPENING HOURS */}
                <InfoItem icon={Clock3} title="Opening Hours">
                  <p className={textStyle}>
                    Sunday to Monday
                    <br />
                    10:00 AM – 11:00 PM
                  </p>
                </InfoItem>

                {/* CONTACT */}
                <InfoItem icon={Phone} title="Contact Us">
                  <div className="space-y-4">
                    {contacts.map(({ icon: Icon, label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex min-w-0 items-center gap-2.5 text-[13px] text-white/90 transition-colors hover:text-[#F5D88A] sm:text-sm"
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#F5D16D]"
                        />

                        <span className="break-all">{label}</span>
                      </Link>
                    ))}
                  </div>
                </InfoItem>
              </div>
            </div>

            {/* DESKTOP EXTERIOR IMAGE */}
            <div className="relative hidden min-h-[320px] overflow-hidden lg:block">
              <Image
                src="/images/location/spa-exterior.jpeg"
                alt="Imperial Wellness Spaa at Maharana Tower, Nipania, Indore"
                fill
                sizes="37vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

              {/* CURVED DIVIDER */}
              <svg
                className="pointer-events-none absolute -left-px top-0 h-full w-[25%]"
                viewBox="0 0 200 500"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0 H55 C55 115 65 190 115 265 C150 320 165 405 170 500 H0 Z"
                  fill="#090806"
                />

                <path
                  d="M55 0 C55 115 65 190 115 265 C150 320 165 405 170 500"
                  fill="none"
                  stroke="#D9AD4D"
                  strokeWidth="2"
                />
              </svg>

              {/* IMAGE LABEL */}
              <div className="absolute bottom-5 right-5 rounded-full border border-[#D9AD4D]/50 bg-black/70 px-4 py-2 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-[#F5D88A]">
                  <MapPin size={14} />
                  MAHARANA TOWER, INDORE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & LEGAL LINKS */}
        <div className="border-t border-[#D9AD4D]/25 bg-[#090806]">
          <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-3 px-5 py-4 text-center sm:flex-row sm:justify-between sm:gap-5 sm:px-8">
            {/* COPYRIGHT */}
            <p className="text-[11px] text-white/65">
              © 2026 Imperial Wellness Spaa. All Rights Reserved.
            </p>

            {/* LEGAL LINKS */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/60">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#D9AD4D]"
              >
                Privacy Policy
              </Link>

              <span className="text-white/25">|</span>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#D9AD4D]"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* DEVELOPER CREDIT */}
            <p className="text-[11px] text-white/60">
              Designed & Developed by{" "}
              <a
                href="https://www.subhamverma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#D9AD4D] transition-colors hover:text-[#F5D88A]"
              >
                Subham Verma
              </a>
            </p>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        #contact a {
          color: #f5f0e6;
          text-decoration: none;
        }

        #contact a:hover {
          color: #f5d88a;
        }

        #contact a svg {
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}
