
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { services } from "@/components/home/Services";

export const metadata: Metadata = {
  title: "Our Services | Imperial Wellness Spa Indore",
  description:
    "Explore Dry Thai, Oil Cream, Aroma, Deep Tissue, Four Hands and Couple Massage at Imperial Wellness Spa, Indore. View 30 and 60 minute prices.",
};

const WHATSAPP_LINK = "https://wa.me/919407072008";

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const bookingMessage = `Hello Imperial Wellness Spa, I would like to enquire about ${service.name}.

30 Minutes: ${service.price30}
60 Minutes: ${service.price60}

15-minute complimentary shower included.

Please share availability and booking details.`;

  const bookingLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    bookingMessage
  )}`;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#D9AD4D]/30 bg-[#100D08] shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9AD4D]/70 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#17120A]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

        {/* Gold bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9AD4D] to-transparent" />

        {/* Arrow */}
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#F5D88A] group-hover:bg-[#D9AD4D] group-hover:text-black">
          <ArrowRight size={16} />
        </span>

        {/* Image title */}
        {/* <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F5D88A] sm:text-[10px]">
            Imperial Wellness Spa
          </p>
        </div> */}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Service name */}
        <h2 className="font-[var(--font-cormorant)] text-xl font-bold leading-tight text-[#F5D88A] sm:text-2xl">
          {service.name}
        </h2>

        {/* Description */}
        <p className="mt-2 min-h-[42px] text-xs leading-relaxed text-white/70 sm:text-sm">
          {service.description}
        </p>

        {/* Complimentary shower */}
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#D9AD4D]/25 bg-[#D9AD4D]/[0.07] px-3 py-2.5">
          <Sparkles
            size={14}
            className="shrink-0 text-[#F5D88A]"
          />

          <span className="text-[10px] font-medium leading-snug text-[#F5D88A] sm:text-xs">
            15-Minute Complimentary Shower
          </span>
        </div>

        {/* Separator */}
        <div className="my-4 h-px bg-gradient-to-r from-[#D9AD4D]/50 via-[#D9AD4D]/15 to-transparent" />

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* 30 Minutes */}
          <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#806326]/40 bg-[#080706] px-2 py-3">
            <div className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-wide text-white/60 sm:text-[10px]">
              <Clock size={12} className="shrink-0 text-[#D9AD4D]" />
              30 Minutes
            </div>

            <p className="mt-1.5 whitespace-nowrap font-[var(--font-cormorant)] text-xl font-bold leading-none text-[#F5D88A] sm:text-2xl md:text-3xl">
              {service.price30}
            </p>
          </div>

          {/* 60 Minutes */}
          <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#C9A34A]/50 bg-gradient-to-br from-[#211809] to-[#090806] px-2 py-3">
            <div className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-wide text-white/60 sm:text-[10px]">
              <Clock size={12} className="shrink-0 text-[#D9AD4D]" />
              60 Minutes
            </div>

            <p className="mt-1.5 whitespace-nowrap font-[var(--font-cormorant)] text-xl font-bold leading-none text-[#F5D88A] sm:text-2xl md:text-3xl">
              {service.price60}
            </p>
          </div>
        </div>

        {/* Book button */}
        <Link
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${service.name} on WhatsApp`}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B78B35] via-[#E8C66A] to-[#F5D88A] px-4 py-2.5 text-xs font-bold text-[#17130F] transition-all duration-300 hover:shadow-[0_0_18px_rgba(217,173,77,0.25)] sm:text-sm"
        >
          <MessageCircle size={16} />
          Enquire on WhatsApp
          <ArrowRight size={15} />
        </Link>

        {/* Brand footer */}
        <div className="mt-4 flex items-center justify-center gap-2 border-t border-[#D9AD4D]/15 pt-3">
          <span className="text-[8px] tracking-[0.2em] text-[#B99A57] sm:text-[9px]">
            IMPERIAL WELLNESS SPA
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-[#090806]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden sm:min-h-[370px] lg:min-h-[430px]">
        <Image
          src="/images/banner/banner-01.png"
          alt="Imperial Wellness Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Hero overlay */}
        <div className="absolute inset-0 bg-[#090806]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#090806]/40" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F5D88A] sm:text-xs">
            ✦ Imperial Wellness Spa ✦
          </p>

          <h1 className="font-[var(--font-cormorant)] text-4xl font-bold leading-tight text-[#F5D88A] sm:text-6xl lg:text-7xl">
            Our Services
          </h1>

          <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D9AD4D] to-transparent" />

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Discover our signature massage therapies and choose an
            experience that suits your relaxation and wellness needs.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-[#F5D88A]/90 sm:gap-6 sm:text-sm">
            <span className="flex items-center gap-2">
              <Sparkles size={15} />
              Relaxation
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#D9AD4D] sm:block" />

            <span className="flex items-center gap-2">
              <Sparkles size={15} />
              Rejuvenation
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#D9AD4D] sm:block" />

            <span className="flex items-center gap-2">
              <Sparkles size={15} />
              Wellness
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative border-t border-[#D9AD4D]/20 bg-[#FBF3E5] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-[#D9AD4D]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 size-64 rounded-full bg-[#A47727]/[0.06] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Section heading */}
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A47727] sm:text-xs">
              ✦ OUR TREATMENTS ✦
            </p>

            <h2 className="font-[var(--font-cormorant)] text-3xl font-bold leading-tight text-[#17130F] sm:text-4xl lg:text-5xl">
              Signature Massage Therapies
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D9AD4D] sm:w-14" />
              <span className="text-[#B78B35]">✦</span>
              <span className="h-px w-10 bg-[#D9AD4D] sm:w-14" />
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#625647] sm:text-sm">
              Explore our six carefully selected therapies. Every service
              includes a complimentary 15-minute shower.
            </p>
          </div>

          {/* Responsive service cards */}
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>

          {/* Service note */}
          <div className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 rounded-xl border border-[#D9AD4D]/20 bg-white/50 p-3 text-center text-[10px] leading-relaxed text-[#625647] sm:mt-10 sm:p-4 sm:text-xs">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#A47727]"
            />
            <p>
              Complimentary 15-minute shower included with every therapy.
              Please contact us to confirm availability and booking details.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative isolate overflow-hidden border-t border-[#D9AD4D]/25 px-5 py-14 text-center sm:py-16 lg:py-20">
        {/* Background image */}
        <Image
          src="/images/banner/banner-01.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-[#090806]/85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Decorative rings */}
        <div className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full border border-[#D9AD4D]/10" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full border border-[#D9AD4D]/10" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9AD4D] sm:text-xs">
            Your Wellness Journey Starts Here
          </p>

          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold leading-tight text-[#F5D88A] sm:text-4xl lg:text-5xl">
            Ready to Experience Relaxation?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-white/75 sm:text-sm">
            Get in touch with Imperial Wellness Spa to enquire about
            your preferred massage therapy and booking availability.
          </p>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B78B35] via-[#E8C66A] to-[#F5D88A] px-6 py-3 text-xs font-bold text-[#17130F] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(217,173,77,0.25)] sm:px-8 sm:text-sm"
          >
            <MessageCircle size={17} />
            Contact Us on WhatsApp
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
