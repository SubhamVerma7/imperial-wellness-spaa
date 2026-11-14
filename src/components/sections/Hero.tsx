import Image from "next/image";
import Link from "next/link";
import { Flower2, Sparkles, MoonStar, Zap } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919407082960?text=" +
  encodeURIComponent(
    "Hello Imperial Wellness Spa, I would like to know more about your massage services and book an appointment.",
  );

const benefits = [
  {
    icon: Flower2,
    first: "BODY",
    second: "RELAXATION",
  },
  {
    icon: Sparkles,
    first: "STRESS",
    second: "RELIEF",
  },
  {
    icon: MoonStar,
    first: "BETTER",
    second: "SLEEP",
  },
  {
    icon: Zap,
    first: "RENEWED",
    second: "ENERGY",
  },
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment on WhatsApp"
      className={`flex h-11 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#D9AD4D] via-[#F5D88A] to-[#EBC361] px-4 text-xs font-bold text-[#17130F] shadow-[0_4px_18px_rgba(217,173,77,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_7px_25px_rgba(217,173,77,0.3)] ${className}`}
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#159B51] text-white">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.48-8.43ZM12.06 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.87-9.94 9.87Zm5.45-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z" />
        </svg>
      </span>

      <span className="whitespace-nowrap">Book Now on WhatsApp</span>

      <span className="ml-1 text-base">→</span>
    </Link>
  );
}

function Benefits() {
  return (
    <div className="grid grid-cols-4 gap-1 border-t border-[#D9AD4D]/30 pt-4">
      {benefits.map(({ icon: Icon, first, second }) => (
        <div
          key={first}
          className="flex min-w-0 flex-col items-center gap-1.5 text-center"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#D9AD4D] text-[#F5D88A]">
            <Icon size={18} strokeWidth={1.5} />
          </span>

          <span className="text-[10px] leading-[1.2] tracking-normal text-white">
            {first}
            <br />
            {second}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Imperial Wellness Spa introduction"
      className="overflow-hidden bg-[#090806] text-white "
    >
      {/* DESKTOP HERO */}

      <div className="relative hidden min-h-[470px] items-center lg:flex xl:min-h-[540px]">
        <Image
          src="/images/hero/spa-hero.jpg"
          alt="Therapist providing a relaxing massage at Imperial Wellness Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#090806]/95 via-[#090806]/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/55 via-transparent to-[#090806]/10" />

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-8 py-12 xl:px-14">
          <div className="max-w-xl">
            <h1 className="font-[var(--font-cormorant)] text-5xl font-semibold leading-none tracking-tight text-[#F5F0E6] xl:text-6xl">
              A Moment of Calm.
              <br />
              <span className="text-[#F5D16D]">A World of Wellness.</span>
            </h1>

            <p className="mt-4 text-xl font-semibold tracking-widest text-[#D9AD4D]">
              Relax <span className="px-1.5">•</span>
              Rejuvenate <span className="px-1.5">•</span>
              Feel the Difference
            </p>

            <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/90">
              Premium massage therapies designed to relax your body, refresh
              your mind and bring balance to your life.
            </p>

            <div className="mt-5">
              <WhatsAppButton className="w-fit" />
            </div>

            <div className="mt-5 max-w-lg">
              <Benefits />
            </div>
          </div>
        </div>

        <div className="absolute right-[7%] top-[19%] z-10 hidden text-[10px] leading-loose tracking-[0.2em] text-[#F5D88A] xl:block">
          RELAX
          <br />
          REJUVENATE
          <br />
          BALANCE
        </div>

        <div className="pointer-events-none absolute right-0 top-0 size-16 border-r border-t border-[#D9AD4D]/80 [clip-path:polygon(100%_0,100%_100%,0_0)]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D9AD4D] to-transparent" />
      </div>

      {/* MOBILE HERO */}

      <div className="relative  overflow-hidden rounded-b-[30px] border-b border-[#D9AD4D]/30 shadow-[0_8px_25px_rgba(0,0,0,0.35)] lg:hidden">
        {/* PHOTOGRAPH */}

        <div className="relative h-[230px] overflow-hidden">
          <Image
            src="/images/hero/spa-hero.jpg"
            alt="Relaxing massage session at Imperial Wellness Spa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />

          {/* Bottom image fade */}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090806]" />

          {/* Gold corner decoration */}

          <div className="absolute right-0 top-0 size-14 border-r border-t border-[#D9AD4D]/80 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
        </div>

        {/* CONTENT */}

        {/* MOBILE HERO CONTENT */}

        <div className="relative z-10 -mt-6 px-5 pb-5 pt-0 ">
          {/* HEADING */}
          <h1
            id="hero-heading-mobile"
            className="font-[var(--font-cormorant)] text-[30px] font-bold leading-[0.92] tracking-normal text-[#F5F0E6] min-[390px]:text-[34px] tracking-wider"
          >
            A Moment of Calm.
            <br />
            <p className="text-[#F5D16D] pt-2">A World of Wellness.</p>
          </h1>

          {/* TAGLINE */}
          {/* TAGLINE */}
          <div className="mt-3 flex w-full items-center justify-around whitespace-nowrap text-[12px] font-medium leading-tight tracking-normal text-[#D9AD4D] min-[390px]:text-[14px]">
            <span>Relax</span>
            <span>•</span>
            <span>Rejuvenate</span>
            <span>•</span>
            <span>Feel the Difference</span>
          </div>

          {/* WHATSAPP BUTTON */}
          <div className="mt-4 flex justify-center">
            <WhatsAppButton className="!h-[52px] !w-full !max-w-[355px] !text-[14px]" />
          </div>

          {/* BENEFITS */}
          <div className="mt-4">
            <Benefits />
          </div>
        </div>
      </div>
    </section>
  );
}
