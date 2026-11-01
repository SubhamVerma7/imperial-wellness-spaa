
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Imperial Wellness Spaa Indore",
  description:
    "Explore massage therapies at Imperial Wellness Spaa in Indore, including Swedish, Deep Tissue, Aroma Therapy, Couple Massage and more.",
};

const WHATSAPP_LINK = "https://wa.me/919407072008";

const services = [
  {
    name: "Regular Full Body Massage",
    description: "Full body relaxation massage",
    price: "₹999/-",
    image: "/images/services/regular-full-body.jpeg",
    number: "01",
  },
  {
    name: "Head Massage",
    description: "Relaxes mind & reduces stress",
    price: "₹799/-",
    image: "/images/services/head-massage.jpeg",
    number: "02",
  },
  {
    name: "Foot Massage",
    description: "Soothes tired feet",
    price: "₹899/-",
    image: "/images/services/foot-massage.png",
    number: "03",
  },
  {
    name: "Swedish Massage",
    description: "Relaxes muscles & improves flexibility",
    price: "₹1,800/-",
    image: "/images/services/swedish-massage.jpeg",
    number: "04",
  },
  {
    name: "Deep Tissue Massage",
    description: "Targets deep muscle tension",
    price: "₹2,000/-",
    image: "/images/services/deep-tissue-massage.jpeg",
    number: "05",
  },
  {
    name: "Aroma Therapy Massage",
    description: "With comforting aromatic oils",
    price: "₹1,500/-",
    image: "/images/services/aroma-therapy.jpeg",
    number: "06",
  },
  {
    name: "Sports Massage",
    description: "For muscle recovery & performance",
    price: "₹2,500/-",
    image: "/images/services/sports-massage.jpeg",
    number: "07",
  },
  {
    name: "Couple Massage",
    description: "Relax together",
    price: "₹3,000/-",
    image: "/images/services/couple-massage.jpeg",
    number: "08",
  },
  {
    name: "Full Body Scrub with Massage",
    description: "Cleanses, nourishes & refreshes",
    price: "₹4,500/-",
    image: "/images/services/full-body-scrub.png",
    number: "09",
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const bookingLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hello Imperial Wellness Spaa, I would like to enquire about ${service.name} (${service.price}). Please share the booking details.`
  )}`;

  return (
    <article className="group overflow-hidden rounded-xl border border-[#D9AD4D]/20 bg-[#17130F] shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D9AD4D]/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
      {/* SERVICE IMAGE */}
      <div className="relative h-[210px] overflow-hidden sm:h-[240px] lg:h-[225px] xl:h-[250px]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/80 via-transparent to-black/10" />

        <span className="absolute left-4 top-4 rounded-full border border-[#F5D88A]/50 bg-black/55 px-3 py-1 font-[var(--font-cormorant)] text-sm font-semibold tracking-wider text-[#F5D88A] backdrop-blur-sm">
          {service.number}
        </span>

        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F5D88A]">
            Imperial Wellness Spaa
          </span>
        </div>
      </div>

      {/* SERVICE DETAILS */}
      <div className="p-4 sm:p-5">
        <h2 className="min-h-[48px] font-[var(--font-cormorant)] text-xl font-semibold leading-tight text-[#F5D88A] sm:text-2xl">
          {service.name}
        </h2>

        <p className="mt-1 min-h-[24px] text-xs leading-relaxed text-white/65 sm:text-sm">
          {service.description}
        </p>

        <div className="my-4 h-px bg-gradient-to-r from-[#D9AD4D]/50 via-[#D9AD4D]/15 to-transparent" />

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/50">
              Starting Price
            </p>
            <p className="mt-1 font-[var(--font-cormorant)] text-2xl font-bold text-[#F5D88A] sm:text-3xl">
              {service.price}
            </p>
          </div>

          <Link
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${service.name} on WhatsApp`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D9AD4D] to-[#F5D88A] px-4 text-xs font-bold text-[#17130F] transition-all duration-300 hover:shadow-[0_0_18px_rgba(217,173,77,0.25)] sm:h-11 sm:px-5 sm:text-sm"
          >
            Book Now
            <ArrowRight size={15} />
          </Link>
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
          alt="Imperial Wellness Spaa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#090806]/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F5D88A] sm:text-xs">
            ✦ Imperial Wellness Spaa ✦
          </p>

          <h1 className="font-[var(--font-cormorant)] text-5xl font-bold leading-tight text-[#F5D88A] sm:text-6xl lg:text-7xl">
            Our Services
          </h1>

          <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D9AD4D] to-transparent" />

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Discover our range of massage therapies and choose an experience
            that suits your relaxation needs.
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
      <section className="relative border-t border-[#D9AD4D]/20 bg-[#FBF3E5] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          {/* SECTION HEADING */}
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#A47727]">
              ✦ OUR TREATMENTS ✦
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl font-bold leading-tight text-[#17130F] sm:text-5xl">
              Explore Our Massage Therapies
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-[#5D554A] sm:text-sm">
              Explore all nine services and their prices. Contact us to enquire
              about your preferred treatment.
            </p>

            <div className="mx-auto mt-5 h-px w-20 bg-[#D9AD4D]" />
          </div>

          {/* ALL NINE SERVICE CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>

          {/* SERVICE NOTE */}
          <div className="mt-10 flex items-start justify-center gap-2 text-center text-[11px] leading-relaxed text-[#5D554A] sm:text-sm">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-[#A47727]"
            />
            <p>
              Please contact us to confirm availability and booking details.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden border-t border-[#D9AD4D]/25 bg-[#17130F] px-5 py-14 text-center sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full border border-[#D9AD4D]/10" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full border border-[#D9AD4D]/10" />
 <Image
          src="/images/banner/banner-01.png"
          alt="Imperial Wellness Spaa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9AD4D] sm:text-xs">
            Your Wellness Journey Starts Here
          </p>

          <h2 className="font-[var(--font-cormorant)] text-3xl font-bold leading-tight text-[#F5D88A] sm:text-5xl">
            Ready to Experience Relaxation?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-white/65 sm:text-sm">
            Get in touch with Imperial Wellness Spaa to enquire about our
            massage services and booking availability.
          </p>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D9AD4D] to-[#F5D88A] px-7 text-sm font-bold text-[#17130F] transition-all duration-300 hover:shadow-[0_0_25px_rgba(217,173,77,0.25)]"
          >
            <MessageCircle size={18} />
            Contact Us on WhatsApp
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
