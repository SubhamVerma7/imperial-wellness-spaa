
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Flower2,
  ShieldCheck,
  MapPin,
  Clock3,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Imperial Wellness Spa",
  description:
    "Discover Imperial Wellness Spa in Nipania, Indore. Explore our approach to relaxation, massage and wellness in a comfortable spa environment.",
};

const services = [
  "Regular Full Body Massage",
  "Head Massage",
  "Foot Massage",
  "Swedish Massage",
  "Deep Tissue Massage",
  "Aroma Therapy Massage",
  "Sports Massage",
  "Couple Massage",
  "Full Body Scrub with Massage",
];

const values = [
  {
    icon: Heart,
    title: "Your Comfort Matters",
    description:
      "We want every visit to feel welcoming and comfortable, with attention to your preferences and individual needs.",
  },
  {
    icon: Sparkles,
    title: "Relaxation & Rejuvenation",
    description:
      "Our range of spa services is designed to give you time away from everyday routines and focus on your well-being.",
  },
  {
    icon: ShieldCheck,
    title: "Care & Hygiene",
    description:
      "We value a clean, respectful and comfortable environment throughout your spa experience.",
  },
  {
    icon: Flower2,
    title: "A Range of Experiences",
    description:
      "From head and foot massages to full-body and specialised massage services, explore options suited to your preferences.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#090806] text-[#F5F0E6]">

      {/* HERO */}
      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[520px]">

        <Image
          src="/images/banner/banner-02.png"
          alt="Imperial Wellness Spa"
          fill
          priority
          className="object-cover object-center opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090806]/75 via-[#090806]/70 to-[#090806]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D9AD4D]">
            Welcome to Imperial Wellness Spa
          </p>

          <h1 className="font-[var(--font-cormorant)] text-5xl font-semibold leading-tight sm:text-7xl">
            About <span className="text-[#D9AD4D]">Us</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            A place to slow down, take a breath and make time for yourself.
            Discover a welcoming spa experience focused on relaxation,
            personal care and well-being.
          </p>

          <Link
            href="/#services"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#D9AD4D] px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-[#D9AD4D] transition-all duration-300 hover:bg-[#D9AD4D] hover:text-[#090806]"
          >
            Explore Our Services
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-[#D9AD4D]/35" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/location/spa-exterior.jpeg"
                alt="Imperial Wellness Spa exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-7 left-5 rounded-xl border border-[#D9AD4D]/30 bg-[#17130F] px-6 py-4 shadow-xl sm:left-8">
              <p className="font-[var(--font-cormorant)] text-xl text-[#D9AD4D]">
                Imperial Wellness Spa
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                Relax · Rejuvenate · Feel the Difference
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="pt-6 lg:pt-0">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
              Our Story
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-5xl">
              Your Time for
              <span className="block text-[#D9AD4D]">
                Relaxation & Wellness
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-white/65 sm:text-base">
              <p>
                Imperial Wellness Spa is a spa destination in Nipania,
                Indore, created for people who want to take a break from
                their busy routines and dedicate time to relaxation
                and personal care.
              </p>

              <p>
                We offer a variety of massage and wellness services,
                giving visitors different ways to enjoy a relaxing
                spa experience. Whether you are interested in a
                head massage, foot massage, Swedish massage, aroma
                therapy or a full-body treatment, you can explore
                the options that suit your preferences.
              </p>

              <p>
                Our approach is centred on customer comfort,
                respectful service and a welcoming environment.
                We believe that making time for yourself is an
                important part of everyday well-being.
              </p>
            </div>

            <Link
              href="https://wa.me/919407082960"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D9AD4D] px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#090806] transition-all hover:bg-[#F5D88A]"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative border-y border-[#D9AD4D]/15 bg-[#17130F] px-5 py-16 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9AD4D]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
              What Matters to Us
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
              The Imperial <span className="text-[#D9AD4D]">Experience</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
              Every visit should give you the opportunity to pause,
              feel comfortable and focus on yourself.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#D9AD4D]/15 bg-[#090806] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9AD4D]/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D9AD4D]/30 bg-[#D9AD4D]/10 text-[#D9AD4D] transition-all group-hover:bg-[#D9AD4D] group-hover:text-[#090806]">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold text-[#F5F0E6]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="about-services" className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
              Discover Our Treatments
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-5xl">
              Explore Our Range of
              <span className="block text-[#D9AD4D]">
                Spa Services
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/60 sm:text-base">
              Every customer has different preferences. Our service
              selection offers a variety of massage and wellness
              experiences so you can choose an option that feels
              right for you.
            </p>

            <Link
              href="/#services"
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D9AD4D] transition-colors hover:text-[#F5D88A]"
            >
              View Services & Prices
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-[#D9AD4D]/20 bg-[#17130F] p-6 sm:p-9">
            <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center gap-3 border-b border-white/10 py-4 last:border-0 sm:[&:nth-last-child(2)]:border-0"
                >
                  <span className="font-[var(--font-cormorant)] text-lg text-[#D9AD4D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm text-white/75">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="border-t border-[#D9AD4D]/15 bg-[#17130F] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
              Find Us
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
              Visit <span className="text-[#D9AD4D]">Imperial Wellness Spa</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
              We welcome you to visit our spa in Nipania, Indore.
              Contact us for service enquiries and appointment requests.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">

            <a
              href="https://www.google.com/maps/search/?api=1&query=2nd+Floor+Maharana+Tower+Near+Jardin+Hotel+Tulsinagar+Nipania+Indore+452010"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#D9AD4D]/20 bg-[#090806] p-6 text-center transition-colors hover:border-[#D9AD4D]/60"
            >
              <MapPin className="mx-auto mb-4 text-[#D9AD4D]" size={27} />

              <h3 className="font-[var(--font-cormorant)] text-xl text-[#D9AD4D]">
                Our Location
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                2nd Floor, Maharana Tower, Near Jardin Hotel,
                Tulsinagar, Nipania, Indore 452010,
                Madhya Pradesh, India.
              </p>
            </a>

            <div className="rounded-2xl border border-[#D9AD4D]/20 bg-[#090806] p-6 text-center">
              <Clock3 className="mx-auto mb-4 text-[#D9AD4D]" size={27} />

              <h3 className="font-[var(--font-cormorant)] text-xl text-[#D9AD4D]">
                Opening Hours
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Please contact us to confirm our current opening
                hours and appointment availability.
              </p>
            </div>

            <a
              href="https://wa.me/919407082960"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#D9AD4D]/20 bg-[#090806] p-6 text-center transition-colors hover:border-[#D9AD4D]/60"
            >
              <Phone className="mx-auto mb-4 text-[#D9AD4D]" size={27} />

              <h3 className="font-[var(--font-cormorant)] text-xl text-[#D9AD4D]">
                Get in Touch
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                +91 94070 72008
                <br />
                Imperialwellnessspa@gmail.com
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-20 text-center sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9AD4D]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <Flower2
            className="mx-auto mb-6 text-[#D9AD4D]"
            size={35}
            strokeWidth={1.2}
          />

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
            Make Time for Yourself
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-6xl">
            Your Moment of Relaxation
            <span className="block text-[#D9AD4D]">
              Starts Here
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Get in touch with Imperial Wellness Spa to explore
            our services and discuss your preferred appointment.
          </p>

          <Link
            href="https://wa.me/919407082960"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9AD4D] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#090806] transition-all hover:bg-[#F5D88A]"
          >
            Contact Us on WhatsApp
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
