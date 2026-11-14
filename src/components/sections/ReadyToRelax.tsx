
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919407082960?text=" +
  encodeURIComponent(
    "Hello Imperial Wellness Spa, I would like to book a massage session."
  );

export default function ReadyToRelax() {
  return (
    <section
      aria-label="Book your spa session"
      className="relative isolate flex min-h-[155px] w-full items-center justify-center overflow-hidden bg-[#090806] sm:min-h-[175px] lg:min-h-[190px]"
    >
      {/* BACKGROUND BANNER */}
      <Image
        src="/images/banner/banner-01.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-6 text-center sm:py-8">

        {/* HEADING */}
        <h2 className="font-[var(--font-cormorant)] text-[25px] font-bold leading-tight text-[#F5D16D] drop-shadow-md sm:text-3xl lg:text-[36px]">
          Ready to Relax?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-1 text-[10px] font-medium tracking-wide text-white/95 sm:text-xs lg:text-sm">
          Book your massage session today and give yourself the care you deserve.
        </p>

        {/* WHATSAPP BUTTON */}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex h-11 w-full max-w-[280px] items-center justify-center gap-3 rounded-xl border border-[#FFE39A] bg-gradient-to-r from-[#D9AD4D] via-[#F5D88A] to-[#EBC361] px-5 text-[12px] font-bold text-[#17130F] shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(217,173,77,0.35)] sm:mt-4 sm:h-[50px] sm:max-w-[370px] sm:text-sm"
        >
          {/* WHATSAPP ICON */}
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#159B51] text-white">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-[21px]"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.48-8.43ZM12.06 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.87-9.94 9.87Zm5.45-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z" />
            </svg>
          </span>

          <span className="whitespace-nowrap">
            Book Now on WhatsApp
          </span>

          <ArrowRight
            size={17}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
