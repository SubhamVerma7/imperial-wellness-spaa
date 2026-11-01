
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Users,
  Gift,
  Flower,
  ShieldCheck,
} from "lucide-react";

const gallery = [
  {
    type: "image",
    src: "/images/gallary/image-01.jpeg",
    alt: "Imperial Wellness Spaa luxury interior",
  },
  {
    type: "video",
    src: "/images/gallary/video-01.mp4",
    poster: "/images/gallary/image-02.png",
    alt: "Imperial Wellness Spaa relaxation experience",
  },
  {
    type: "image",
    src: "/images/gallary/image-03.jpeg",
    alt: "Luxury spa relaxation experience",
  },
] as const;

const benefits = [
  { icon: Flower2, title: "Relaxing", subtitle: "Ambience" },
  { icon: Users, title: "Professional", subtitle: "Therapists" },
  { icon: Gift, title: "Clean &", subtitle: "Hygienic Space" },
  { icon: Flower, title: "Wide Range", subtitle: "of Therapies" },
  { icon: ShieldCheck, title: "Comfort &", subtitle: "Privacy" },
];

function GalleryMedia() {
  return (
    <div className="group relative aspect-[16/9] w-[82vw] shrink-0 overflow-hidden rounded-xl border border-[#D9AD4D]/50 bg-[#17130F] shadow-[0_8px_25px_rgba(35,23,8,0.16)] sm:w-auto">
      {gallery.map((item, index) => {
        if (index !== 0) return null;
        return null;
      })}

      {/* Media is rendered by the parent */}
    </div>
  );
}

export default function ImperialExperience() {
  return (
    <section className="w-full overflow-hidden bg-[#FFF5E6] text-[#21180F]">

      {/* =========================================
          THE IMPERIAL EXPERIENCE
      ========================================== */}

      <div className="relative isolate overflow-hidden border-b border-[#C99B4C]/30">

        {/* BACKGROUND BANNER */}
        <Image
          src="/images/banner/banner-02.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-center"
        />

        {/* Background contrast */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF5E6]/55" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-4 py-7 sm:px-7 sm:py-9 lg:px-12 lg:py-10">

          {/* SECTION HEADING */}
          <div className="mb-6 text-center sm:mb-7">

            <p className="mb-1 text-[14px] font-semibold uppercase tracking-[0.32em] text-[#A4772C] sm:text-[14px]">
             ✦ Discover Imperial ✦
            </p>

            <h2 className="font-[var(--font-cormorant)] text-[29px] font-bold leading-tight tracking-tight text-[#21180F] sm:text-4xl lg:text-[42px]">
              The Imperial Experience
            </h2>

            <p className="mt-1.5 text-[11px] font-medium tracking-wide text-[#68543A] sm:text-sm">
              Step into a world of peace, comfort and relaxation
            </p>

            <div className="mx-auto mt-3 h-[2px] w-14 rounded-full bg-gradient-to-r from-transparent via-[#C99B4C] to-transparent" />
          </div>

          {/* GALLERY + BUTTON */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">

            {/* GALLERY CARDS */}
            <div className="flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0">

              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="group relative aspect-[16/9] w-[82vw] shrink-0 snap-center overflow-hidden rounded-xl border border-[#C99B4C]/50 bg-[#17130F] shadow-[0_8px_25px_rgba(35,23,8,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(35,23,8,0.22)] sm:w-auto"
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 639px) 82vw, (max-width: 1023px) 30vw, 28vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                      aria-label={item.alt}
                      className="h-full w-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  )}

                  {/* Subtle media overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.04]" />

                  {/* Video indicator */}
                  {item.type === "video" && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="flex size-12 items-center justify-center rounded-full border border-[#F5D88A]/90 bg-black/45 text-[#F5D88A] shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-1 size-5"
                          aria-hidden="true"
                        >
                          <path d="M7 4.5v15l12-7.5z" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* VIEW GALLERY BUTTON */}
            <div className="flex shrink-0 justify-center lg:w-[165px] lg:justify-end">
              <Link
                href="/gallery"
                className="group inline-flex h-11 min-w-[165px] items-center justify-center gap-3 rounded-full border border-[#C99B4C] bg-gradient-to-r from-[#D9AD4D] via-[#F5D88A] to-[#EBC361] px-6 text-xs font-semibold tracking-wide text-[#F8E5B7] shadow-lg transition-all duration-300 hover:border-[#17130F] hover:bg-[#C99B4C] hover:text-[#17130F]"
              >
                View Gallery
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>

          {/* MOBILE SCROLL INDICATOR */}
          <p className="mt-2 text-center text-[9px] tracking-wider text-[#806C50] sm:hidden">
            SWIPE TO EXPLORE
          </p>

        </div>
      </div>

      {/* =========================================
          WHY CHOOSE IMPERIAL WELLNESS SPAA
      ========================================== */}

      <div className="relative isolate overflow-hidden">

        {/* BACKGROUND BANNER */}
        <Image
          src="/images/banner/banner-03.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-center"
        />

        {/* Preserve background image visibility */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF7E9]/25" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-7 sm:px-8 sm:py-9 lg:px-16 lg:py-10">

          {/* HEADING */}
          <div className="mb-6">
            <p className="mb-1 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#A4772C]">
              The Imperial Difference
            </p>

            <h2 className="font-[var(--font-cormorant)] text-[25px] font-bold leading-tight text-[#21180F] sm:text-3xl lg:text-[36px]">
              Why Choose Imperial Wellness Spaa
            </h2>

            <div className="mt-2 h-[2px] w-14 rounded-full bg-[#C99B4C]" />
          </div>

          {/* BENEFITS */}
          <div className="grid grid-cols-5 gap-1 sm:max-w-[850px] sm:gap-5 lg:gap-8">

            {benefits.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="group flex min-w-0 flex-col items-center text-center"
              >
                {/* ICON CIRCLE */}
                <div className="mb-2.5 flex size-10 items-center justify-center rounded-full border border-[#D2A94F]/70 bg-gradient-to-br from-[#FFE9AA] via-[#F4D078] to-[#D9AD4D] shadow-[0_4px_12px_rgba(126,85,20,0.15)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_7px_16px_rgba(126,85,20,0.25)] sm:size-14">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="text-[#24190B] sm:size-[23px]"
                  />
                </div>

                {/* LABEL */}
                <p className="text-[8px] font-semibold leading-[1.5] text-[#342719] sm:text-[11px] lg:text-xs">
                  {title}
                  <br />
                  {subtitle}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}
