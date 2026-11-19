
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

export const services = [
  {
    name: "Dry / Thai Massage",
    description: "Traditional Thai technique, without using oil.",
    price30: "₹999",
    price60: "₹1,499",
    image: "/images/services/regular-full-body.jpeg",
  },
  {
    name: "Oil / Cream Massage",
    description: "Soothing full-body massage for deep relaxation.",
    price30: "₹999",
    price60: "₹1,499",
    image: "/images/services/head-massage.jpeg",
  },
  {
    name: "Aroma Massage",
    description: "Aromatic oil massage for mind and body relaxation.",
    price30: "₹1,299",
    price60: "₹1,999",
    image: "/images/services/aroma-therapy.jpeg",
  },
  {
    name: "Deep Tissue Massage",
    description: "Focused pressure to release deep muscle tension.",
    price30: "₹1,299",
    price60: "₹1,999",
    image: "/images/services/deep-tissue-massage.jpeg",
  },
  {
    name: "Four Hands Massage",
    description:
      "A synchronized massage by two therapists for deep relaxation.",
    price30: "₹1,999",
    price60: "₹2,999",
    image: "/images/services/sports-massage.jpeg",
  },
  {
    name: "Couple Massage",
    description:
      "Relaxing couple massage in a private room, comfort and wellness.",
    price30: "₹1,999",
    price60: "₹2,999",
    image: "/images/services/couple-massage.jpeg",
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <Link
      href="/treatments"
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#D6B45D]/40 bg-[#0D0B08] shadow-[0_5px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B45D] hover:shadow-[0_14px_32px_rgba(166,125,43,0.18)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#17120A]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />

        {/* Arrow */}
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#F5D88A] group-hover:bg-[#D9AD4D] group-hover:text-black">
          <ArrowRight size={16} />
        </span>

        {/* Image bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D9AD4D] to-transparent opacity-80" />
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        
        {/* Title */}
        <h3 className="min-h-[2.5rem] font-[var(--font-cormorant)] text-xl font-bold leading-tight text-[#F5D88A] sm:text-2xl">
          {service.name}
        </h3>

        {/* Description */}
        <p className="mt-1 min-h-[2.5rem] text-xs leading-relaxed text-[#D6D0C4] sm:text-sm">
          {service.description}
        </p>

       

        {/* Price cards */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          
          {/* 30 Minutes */}
          <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#806326]/40 bg-[#080706] px-2 py-3 sm:px-3">
            <div className="flex items-center gap-1.5 text-[9px] font-medium tracking-wide text-[#C9BDA8] sm:text-[10px]">
              <Clock size={12} className="shrink-0 text-[#D9AD4D]" />
              <span>30 MINUTES</span>
            </div>

            <p className="mt-1.5 whitespace-nowrap font-[var(--font-cormorant)] text-xl font-bold leading-none text-[#F5D88A] sm:text-2xl md:text-3xl">
              {service.price30}
            </p>
          </div>

          {/* 60 Minutes */}
          <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#C9A34A]/50 bg-gradient-to-br from-[#211809] to-[#0A0907] px-2 py-3 sm:px-3">
            <div className="flex items-center gap-1.5 text-[9px] font-medium tracking-wide text-[#C9BDA8] sm:text-[10px]">
              <Clock size={12} className="shrink-0 text-[#D9AD4D]" />
              <span>60 MINUTES</span>
            </div>

            <p className="mt-1.5 whitespace-nowrap font-[var(--font-cormorant)] text-xl font-bold leading-none text-[#F5D88A] sm:text-2xl md:text-3xl">
              {service.price60}
            </p>
          </div>
        </div>

        {/* Subtle brand footer */}
        <div className="mt-4 flex items-center justify-center gap-2 border-t border-[#D9AD4D]/15 pt-3">
          <span className="text-[8px] tracking-[0.2em] text-[#B99A57] sm:text-[9px]">
            IMPERIAL WELLNESS SPA
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section
      id="treatments"
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-y border-[#D9AD4D]/25 bg-[#FBF3E5] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#D9AD4D]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#A47727]/[0.06] blur-3xl" />

      {/* Section heading */}
      <div className="relative z-10 mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A47727] sm:text-xs">
          ✦ Imperial Wellness Spa ✦
        </p>

        <h2
          id="services-heading"
          className="font-[var(--font-cormorant)] text-3xl font-bold leading-tight text-[#17130F] sm:text-4xl lg:text-5xl"
        >
          Signature Massage Therapies
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#D9AD4D] sm:w-14" />
          <span className="text-sm text-[#B78B35]">✦</span>
          <span className="h-px w-10 bg-[#D9AD4D] sm:w-14" />
        </div>

        <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-[#625647] sm:text-sm">
          Experience relaxation, rejuvenation and personalized wellness.
          Choose your therapy and preferred duration.
        </p>
      </div>

      {/* Responsive grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>

      {/* Complimentary offer */}
      <div className="relative z-10 mx-auto mt-8 flex w-fit max-w-full items-center justify-center gap-2 rounded-full border border-[#D9AD4D]/35 bg-white/70 px-3 py-2.5 text-center shadow-sm sm:px-5">
        <Sparkles size={14} className="shrink-0 text-[#A47727]" />

        <p className="text-[10px] font-medium leading-relaxed text-[#625647] sm:text-xs">
          Complimentary 15-minute shower included with every therapy
        </p>
      </div>

      {/* Button */}
      <div className="relative z-10 mt-7 flex justify-center">
        <Link
          href="/treatments"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B78B35] via-[#E8C66A] to-[#F5D88A] px-6 py-2.5 text-xs font-bold tracking-wide text-[#17130F] shadow-[0_4px_15px_rgba(164,119,39,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(164,119,39,0.3)] sm:px-8"
        >
          Explore All Treatments
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
