
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Imperial Wellness Spaa",
  description:
    "Explore the gallery of Imperial Wellness Spaa in Nipania, Indore. Discover our spa environment and wellness experience.",
};

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/images/gallary/image-01.jpeg",
    alt: "Imperial Wellness Spaa gallery",
    title: "The Imperial Experience",
    size: "large",
  },
  {
    id: 2,
    type: "video",
    src: "/images/gallary/video-01.mp4",
    poster: "/images/gallary/image-02.png",
    alt: "Imperial Wellness Spaa video",
    title: "Experience Imperial Wellness",
    size: "normal",
  },
  {
    id: 3,
    type: "image",
    src: "/images/gallary/image-03.jpeg",
    alt: "Imperial Wellness Spaa interior",
    title: "A Space for Relaxation",
    size: "normal",
  },
   {
    id: 4,
    type: "image",
    src: "/images/gallary/image-02.jpeg",
    alt: "Imperial Wellness Spaa gallery",
    title: "The Imperial Experience",
    size: "large",
  },
   {
    id: 5,
    type: "video",
    src: "/images/gallary/video-02.mp4",
    poster: "/images/gallary/image-02.png",
    alt: "Imperial Wellness Spaa gallery",
    title: "The Imperial Experience",
    size: "large",
  },
  {
    id: 6,
    type: "image",
    src: "/images/gallary/image-04.jpeg",
    alt: "Imperial Wellness Spaa gallery",
    title: "The Imperial Experience",
    size: "large",
  },
    {
    id: 7,
    type: "image",
    src: "/images/gallary/image-05.jpeg",
    alt: "Imperial Wellness Spaa gallery",
    title: "The Imperial Experience",
    size: "large",
  },
];

export default function GalleryPage() {
  return (
    <main className="overflow-hidden bg-[#090806] text-[#F5F0E6]">

      {/* HERO */}
      <section className="relative flex  items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[480px]">

        <Image
          src="/images/banner/banner-02.png"
          alt="Imperial Wellness Spaa"
          fill
          priority
          className="object-cover object-center opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090806]/70 via-[#090806]/75 to-[#090806]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Camera
            size={34}
            strokeWidth={1.3}
            className="mx-auto mb-6 text-[#D9AD4D]"
          />

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D9AD4D]">
            Moments at Imperial
          </p>

          <h1 className="font-[var(--font-cormorant)] text-5xl font-semibold sm:text-7xl">
            Our <span className="text-[#D9AD4D]">Gallery</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
            Take a glimpse into Imperial Wellness Spaa.
            Explore our gallery and discover the atmosphere
            of our spa experience.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D9AD4D]/60" />
        </div>
      </section>

      {/* GALLERY INTRO */}
      <section className="px-5 pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
            Explore Our Space
          </p>

          <h2 className="font-[var(--font-cormorant)] text-3xl font-semibold sm:text-5xl">
            A Glimpse of <span className="text-[#D9AD4D]">Imperial</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Every detail contributes to the experience.
            Browse our photos and video to get a closer look
            at Imperial Wellness Spaa.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-5 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {galleryItems.map((item) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-[#D9AD4D]/20 bg-[#17130F] ${
                item.size === "large"
                  ? "sm:row-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  item.size === "large"
                    ? "h-[360px] sm:h-full sm:min-h-[650px]"
                    : "h-[360px] sm:h-[310px] lg:h-[390px]"
                }`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                )}

                {/* IMAGE OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090806]/85 via-transparent to-transparent opacity-90" />

                {/* VIDEO INDICATOR */}
                {item.type === "video" && (
                  <div className="pointer-events-none absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9AD4D]/60 bg-[#090806]/70 text-[#D9AD4D]">
                    <Play size={17} fill="currentColor" />
                  </div>
                )}

                {/* IMAGE CAPTION */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9AD4D]">
                    {item.type === "video" ? "Video Experience" : "Imperial Gallery"}
                  </p>

                  <h3 className="mt-2 font-[var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-[#D9AD4D]/15 bg-[#17130F] px-5 py-20 text-center sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9AD4D]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
            Your Wellness Journey
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-6xl">
            Experience It
            <span className="block text-[#D9AD4D]">
              For Yourself
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Get in touch with Imperial Wellness Spaa to explore
            our services and discuss your preferred appointment.
          </p>

          <Link
            href="https://wa.me/919407072008"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9AD4D] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#090806] transition-all hover:bg-[#F5D88A]"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
