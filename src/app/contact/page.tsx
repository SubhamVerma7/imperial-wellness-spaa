import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ReadyToRelax from "@/components/sections/ReadyToRelax";

export const metadata: Metadata = {
  title: "Contact Us | Imperial Wellness Spa",
  description:
    "Contact Imperial Wellness Spa in Nipania, Indore. Get in touch for massage service enquiries, appointment requests and directions.",
};

const address =
  "2nd Floor, Maharana Tower, Near Jardin Hotel, Tulsinagar, Nipania, Indore 452010, Madhya Pradesh, India.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=2nd+Floor+Maharana+Tower+Near+Jardin+Hotel+Tulsinagar+Nipania+Indore+452010";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 94070 72008",
    action: "Call Now",
    href: "tel:+919407072008",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Connect with us directly",
    action: "Chat on WhatsApp",
    href: "https://wa.me/919407072008",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Imperialwellnessspa@gmail.com",
    action: "Send Email",
    href: "mailto:Imperialwellnessspa@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#090806] text-[#F5F0E6]">
      {/* HERO */}
      <section className="relative flex  items-center justify-center overflow-hidden px-5 py-24 text-center ">
        <Image
          src="/images/banner/banner-02.png"
          alt="Imperial Wellness Spa"
          fill
          priority
          className="object-cover object-center opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090806]/75 via-[#090806]/75 to-[#090806]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D9AD4D]">
            We Would Love to Hear From You
          </p>

          <h1 className="font-[var(--font-cormorant)] text-5xl font-semibold sm:text-7xl">
            Contact <span className="text-[#D9AD4D]">Us</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
            Have a question about our spa services or want to enquire about an
            appointment? Get in touch with Imperial Wellness Spa.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D9AD4D]/60" />
        </div>
      </section>

      {/* CONTACT INTRO */}
      <section className="px-5 ">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
            Get in Touch
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
            We're Here to <span className="text-[#D9AD4D]">Help You</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Whether you need information about our treatments, service prices or
            appointment availability, our contact channels are open for your
            enquiries.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#D9AD4D]/20 bg-[#17130F] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D9AD4D]/60 sm:p-9"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D9AD4D]/30 bg-[#D9AD4D]/10 text-[#D9AD4D] transition-all group-hover:bg-[#D9AD4D] group-hover:text-[#090806]">
                  <Icon size={27} strokeWidth={1.5} />
                </div>

                <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-sm text-white/55">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={
                    item.href.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#D9AD4D] transition-colors hover:text-[#F5D88A]"
                >
                  {item.action}
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <ReadyToRelax />
      {/* LOCATION & HOURS */}
      <section className="border-y border-[#D9AD4D]/15 bg-[#17130F] px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LOCATION */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
              Visit Our Spa
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-5xl">
              Find Us in
              <span className="block text-[#D9AD4D]">Nipania, Indore</span>
            </h2>

            <div className="mt-8 flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9AD4D]/30 bg-[#D9AD4D]/10 text-[#D9AD4D]">
                <MapPin size={23} />
              </div>

              <div>
                <h3 className="font-[var(--font-cormorant)] text-xl text-[#D9AD4D]">
                  Our Address
                </h3>

                <p className="mt-2 max-w-md text-sm leading-8 text-white/65">
                  {address}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9AD4D]/30 bg-[#D9AD4D]/10 text-[#D9AD4D]">
                <Clock3 size={23} />
              </div>

              <div>
                <h3 className="font-[var(--font-cormorant)] text-xl text-[#D9AD4D]">
                  Opening Hours
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/65">
                  Please contact us to confirm our current opening hours and
                  appointment availability.
                </p>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9AD4D] px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#090806] transition-all hover:bg-[#F5D88A]"
            >
              <Navigation size={16} />
              Get Directions
              <ExternalLink size={14} />
            </a>
          </div>

          {/* LOCATION IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-[#D9AD4D]/35" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/location/spa-exterior.jpeg"
                alt="Imperial Wellness Spa exterior in Indore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
            Stay Connected
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
            Follow <span className="text-[#D9AD4D]">Our Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
            Connect with Imperial Wellness Spa on social media for updates,
            photos and more.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/imperial_wellness_spa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#D9AD4D]/35 px-7 py-3.5 text-xs uppercase tracking-[0.15em] text-[#D9AD4D] transition-all hover:bg-[#D9AD4D] hover:text-[#090806]"
            >
              <BsInstagram size={18} />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/ImperialWellnessSpaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#D9AD4D]/35 px-7 py-3.5 text-xs uppercase tracking-[0.15em] text-[#D9AD4D] transition-all hover:bg-[#D9AD4D] hover:text-[#090806]"
            >
              <FaFacebook size={18} />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[#D9AD4D]/15 bg-[#17130F] px-5 py-20 text-center sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9AD4D]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D9AD4D]">
            Imperial Wellness Spa
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold sm:text-6xl">
            Let's Connect
            <span className="block text-[#D9AD4D]">& Make Time for You</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Have questions or want to enquire about a service? Reach out to us
            directly.
          </p>

          <Link
            href="https://wa.me/919407072008"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D9AD4D] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#090806] transition-all hover:bg-[#F5D88A]"
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
