
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-y border-[#D9AD4D]/25 bg-white text-[#1A1F24] lg:bg-[#090806] lg:text-white"
    >
      <div className="grid grid-cols-[36%_64%] lg:grid-cols-[46%_54%]">

        {/* RECEPTION IMAGE */}

        <div className="relative min-h-[175px] overflow-hidden sm:min-h-[220px] lg:min-h-[190px]">
          <Image
            src="/images/reception/imperial_wellness_spa_reception.png"
            alt="Imperial Wellness Spa reception"
            fill
            priority
            sizes="(max-width: 1023px) 36vw, 46vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 lg:to-[#090806]/25" />
        </div>

        {/* ABOUT CONTENT */}

        <div className="relative flex items-center overflow-hidden bg-white px-3 py-4 sm:px-6 lg:bg-gradient-to-br lg:from-[#100E09] lg:via-[#090806] lg:to-[#151109] lg:px-8 lg:py-5">

          {/* BACKGROUND DECORATION */}

          <div className="pointer-events-none absolute -bottom-12 -right-8 size-36 rounded-full bg-[#D9AD4D]/[0.08] blur-3xl lg:size-52 lg:bg-[#D9AD4D]/[0.06]" />

          <div className="relative z-10 w-full">

            {/* SMALL LABEL */}
{/* SMALL LABEL */}
<p className="font-[var(--font-cormorant)] text-[13px] leading-none text-black sm:text-base lg:text-lg lg:text-[#F5D88A]">
  Welcome to
</p>

{/* HEADING */}
<h2
  id="about-heading"
  className="mt-1 font-[var(--font-cormorant)] text-[20px] font-semibold leading-[1.05] tracking-tight text-black sm:text-2xl lg:text-3xl lg:text-[#F5D16D]"
>
  Imperial Wellness Spa
</h2>

{/* BRAND TAGLINE */}
<p className="mt-1 text-[7px] font-semibold tracking-[0.18em] text-black sm:text-[9px] lg:text-[10px] lg:text-[#D9AD4D]">
  BODY <span className="px-1">|</span>
  MIND <span className="px-1">|</span>
  RELAX
</p>

{/* DESCRIPTION */}
<p className="mt-2 max-w-xl text-[9px] leading-[1.55] text-black sm:text-[11px] lg:mt-3 lg:text-xs lg:leading-[1.7] lg:text-white/85">
  At Imperial Wellness Spa, we offer a peaceful and
  comfortable environment where you can relax,
  rejuvenate and take a break from the stresses of
  daily life. Our range of massage therapies are
  designed to refresh your body and mind.
</p>

            {/* OUR STORY BUTTON */}

            <Link
              href="/about"
              className="mt-2 inline-flex h-7 bg-gradient-to-r from-[#D9AD4D] via-[#F5D88A] to-[#EBC361] items-center gap-2 rounded-full border border-[#B88624] px-3 text-[9px] font-semibold text-[#76500F] transition-all duration-300 hover:bg-[#D9AD4D] hover:text-[#090806] sm:mt-3 sm:h-8 sm:px-4 sm:text-[10px] lg:border-[#D9AD4D] lg:text-white"
            >
              Our Story
              <ArrowRight size={13} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
