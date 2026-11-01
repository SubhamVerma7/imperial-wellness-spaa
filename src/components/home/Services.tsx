
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Regular Full Body Massage",
    description: "Full body relaxation massage",
    price: "₹999/-",
    image: "/images/services/regular-full-body.jpeg",
  },
  {
    name: "Head Massage",
    description: "Relaxes mind & reduces stress",
    price: "₹799/-",
    image: "/images/services/head-massage.jpeg",
  },
  {
    name: "Foot Massage",
    description: "Soothes tired feet",
    price: "₹899/-",
    image: "/images/services/foot-massage.png",
  },
  {
    name: "Swedish Massage",
    description: "Relaxes muscles & improves flexibility",
    price: "₹1,800/-",
    image: "/images/services/swedish-massage.jpeg",
  },
  {
    name: "Deep Tissue Massage",
    description: "Targets deep muscle tension",
    price: "₹2,000/-",
    image: "/images/services/deep-tissue-massage.jpeg",
  },
  {
    name: "Aroma Therapy Massage",
    description: "With comforting aromatic oils",
    price: "₹1,500/-",
    image: "/images/services/aroma-therapy.jpeg",
  },
  {
    name: "Sports Massage",
    description: "For muscle recovery & performance",
    price: "₹2,500/-",
    image: "/images/services/sports-massage.jpeg",
  },
  {
    name: "Couple Massage",
    description: "Relax together",
    price: "₹3,000/-",
    image: "/images/services/couple-massage.jpeg",
  },
  {
    name: "Full Body Scrub with Massage",
    description: "Cleanses, nourishes & refreshes",
    price: "₹4,500/-",
    image: "/images/services/full-body-scrub.png",
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
      className="group relative block h-[116px] overflow-hidden rounded-lg bg-[#090806] shadow-[0_3px_10px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(0,0,0,0.2)] sm:h-[150px] lg:h-[116px] xl:h-[145px]"
    >
      <Image
        src={service.image}
        alt={service.name}
        fill
        sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090806] via-[#090806]/55 to-transparent" />

      {/* Service information */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 lg:p-3 xl:p-4">
        <h3 className="max-w-[85%] font-[var(--font-cormorant)] text-[15px] font-semibold leading-[1.05] text-white sm:text-lg lg:text-base xl:text-lg">
          {service.name}
        </h3>

        <p className="mt-1 text-[9px] leading-tight text-white/85 sm:text-[11px] lg:text-[9px] xl:text-[11px]">
          {service.description}
        </p>

        <div className="mt-0.5 flex items-center justify-between">
          <span className="font-[var(--font-cormorant)] text-xl font-bold leading-none text-[#F5C84C] sm:text-2xl lg:text-xl xl:text-2xl">
            {service.price}
          </span>

          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F5D88A] to-[#D9AD4D] text-[#17130F] transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={16} />
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
      className="relative overflow-hidden border-y border-[#D9AD4D]/25 bg-[#FBF3E5] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-10"
    >
      {/* Section heading */}
      <div className="relative z-10 mx-auto mb-5 text-center sm:mb-7">
        <p className="mb-1 text-md font-semibold tracking-[0.25em] text-[#A47727]">
          ✦ OUR SERVICES ✦
        </p>

        <h2
          id="services-heading"
          className="font-[var(--font-cormorant)] text-[30px] font-bold leading-none text-[#17130F] sm:text-4xl lg:text-[38px]"
        >
          Massage Therapies
        </h2>

        <p className="mt-2 text-[10px] text-[#4B5563] sm:text-xs">
          Choose from our range of professional massage therapies
        </p>
      </div>

      {/* Desktop: 3 columns and 3 rows */}
      <div className="relative z-10 mx-auto hidden max-w-[1400px] grid-cols-3 gap-3 lg:grid xl:gap-4">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>

      {/* Mobile and tablet: horizontal service cards */}
      <div className="relative z-10 mx-auto flex max-w-[600px] flex-col gap-3 lg:hidden">
        {services.slice(0, 3).map((service) => (
          <Link
            key={service.name}
            href="/treatments"
            className="group flex h-[105px] overflow-hidden rounded-lg bg-[#090806] shadow-[0_3px_10px_rgba(0,0,0,0.13)]"
          >
            <div className="relative h-full w-[36%] shrink-0 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="36vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center p-3">
              <h3 className="font-[var(--font-cormorant)] text-[15px] font-semibold leading-tight text-white">
                {service.name}
              </h3>

              <p className="mt-1 text-[9px] leading-tight text-white/75">
                {service.description}
              </p>

              <div className="mt-1 flex items-center justify-between">
                <span className="font-[var(--font-cormorant)] text-xl font-bold leading-none text-[#F5C84C]">
                  {service.price}
                </span>

                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F5D88A] to-[#D9AD4D] text-[#17130F]">
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="relative z-10 mt-5 flex justify-center lg:hidden">
        <Link
          href="/treatments"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D9AD4D] to-[#F5D88A] px-5 text-[11px] font-bold text-[#17130F] shadow-sm transition-all duration-300 hover:shadow-md"
        >
          View All 9 Services
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
