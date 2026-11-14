
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Imperial Wellness Spa",
  description:
    "Read the Terms and Conditions for using the Imperial Wellness Spa website and spa services in Indore, Madhya Pradesh.",
};

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#D9AD4D]/15 py-7 last:border-0">
      <h2 className="mb-3 font-[var(--font-cormorant)] text-2xl font-semibold text-[#D9AD4D] sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-7 text-white/70 sm:text-base">
        {children}
      </div>
    </section>
  );
}

const services = [
  ["Regular Full Body Massage", "₹999"],
  ["Head Massage", "₹799"],
  ["Foot Massage", "₹899"],
  ["Swedish Massage", "₹1,800"],
  ["Deep Tissue Massage", "₹2,000"],
  ["Aroma Therapy Massage", "₹1,500"],
  ["Sports Massage", "₹2,500"],
  ["Couple Massage", "₹3,000"],
  ["Full Body Scrub with Massage", "₹4,500"],
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#090806] text-[#F5F0E6]">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden border-b border-[#D9AD4D]/20 px-5 py-20 text-center sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D9AD4D]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D9AD4D]">
            Imperial Wellness Spa
          </p>

          <h1 className="font-[var(--font-cormorant)] text-4xl font-semibold sm:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Please read these terms carefully before using our website,
            contacting our spa or requesting any of our wellness services.
          </p>

          <p className="mt-6 text-xs text-white/40">
            Last updated: 1 November 2026
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#D9AD4D]/15 bg-[#17130F] px-6 py-5 sm:px-10 sm:py-8">

          <PolicySection title="1. Introduction and Acceptance">
            <p>
              Welcome to Imperial Wellness Spa, located in Indore, Madhya
              Pradesh, India.
            </p>
            <p>
              These Terms & Conditions govern your access to and use of
              our website and your interactions with Imperial Wellness
              Spa regarding its spa and wellness services.
            </p>
            <p>
              By accessing or using this website, or requesting a service
              from us, you agree to these terms. If you do not agree,
              please discontinue use of the website and do not request
              services under these terms.
            </p>
          </PolicySection>

          <PolicySection title="2. Website Information">
            <p>
              This website provides general information about Imperial
              Wellness Spa, its location, available services and contact
              details.
            </p>
            <p>
              The website currently does not provide online registration,
              an online appointment booking system, customer accounts or
              online payment processing. Service enquiries and appointment
              requests are handled directly through our contact channels.
            </p>
            <p>
              Information displayed on the website is provided for general
              guidance and may be updated from time to time.
            </p>
          </PolicySection>

          <PolicySection title="3. Spa Services">
            <p>
              Imperial Wellness Spa offers spa and wellness services
              intended to provide relaxation and personal care. Available
              services may include the following:
            </p>

            <div className="overflow-hidden rounded-xl border border-[#D9AD4D]/20">
              <div className="grid grid-cols-2 bg-[#090806] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#D9AD4D]">
                <span>Service</span>
                <span className="text-right">Listed Price</span>
              </div>

              {services.map(([name, price]) => (
                <div
                  key={name}
                  className="grid grid-cols-2 gap-3 border-t border-white/10 px-4 py-3 text-sm"
                >
                  <span className="text-white/75">{name}</span>
                  <span className="text-right font-medium text-[#D9AD4D]">
                    {price}
                  </span>
                </div>
              ))}
            </div>

            <p>
              Services are subject to availability and suitability. The
              actual services provided will be confirmed directly with
              the customer before the appointment.
            </p>
          </PolicySection>

          <PolicySection title="4. Pricing and Service Changes">
            <p>
              The prices displayed on the website are the listed prices
              for the services at the time this page was updated.
            </p>
            <p>
              Prices, service availability and offerings may change.
              Please confirm the applicable price and service details
              with the spa before making an appointment.
            </p>
            <p>
              Any price agreed upon and confirmed for a particular
              appointment should be communicated to the customer before
              the service begins. We will not intentionally apply an
              undisclosed price increase to an already confirmed
              appointment.
            </p>
          </PolicySection>

          <PolicySection title="5. Appointments and Booking Confirmation">
            <p>
              Customers may contact us by WhatsApp or telephone to enquire
              about services and request an appointment.
            </p>
            <p>
              Sending a message or making an enquiry does not automatically
              mean that an appointment has been confirmed.
            </p>
            <p>
              An appointment is considered confirmed only after the spa
              has communicated its acceptance and the appointment details
              have been mutually agreed.
            </p>
            <p>
              Customers should arrive at the agreed appointment time and
              communicate promptly if they expect to be delayed.
            </p>
          </PolicySection>

          <PolicySection title="6. Cancellations, Rescheduling and Late Arrival">
            <p>
              If you need to cancel or reschedule an appointment, please
              inform the spa as early as reasonably possible using our
              official contact details.
            </p>
            <p>
              Rescheduling requests are subject to availability and
              confirmation by the spa.
            </p>
            <p>
              If a customer arrives late, the available treatment time
              may be affected by the remaining schedule. We will
              communicate any practical adjustment before proceeding.
            </p>
            <p>
              If the spa needs to cancel or reschedule an appointment,
              we will make reasonable efforts to inform the customer and
              discuss an alternative appointment or any applicable
              refund.
            </p>
            <p>
              Any cancellation fee, advance payment condition or
              appointment-specific cancellation arrangement must be
              communicated and agreed upon with the customer in advance.
              No undisclosed cancellation charge will be assumed under
              this general policy.
            </p>
          </PolicySection>

          <PolicySection title="7. Payments and Refunds">
            <p>
              The current website does not accept online payments.
              Payment arrangements for services are communicated directly
              by the spa.
            </p>
            <p>
              Customers should confirm the total service price and
              applicable payment method before receiving a service.
            </p>
            <p>
              If a payment has been made for a service that the spa is
              unable to provide, the customer should contact us to discuss
              an appropriate refund or alternative arrangement, subject
              to applicable law.
            </p>
            <p>
              Any advance payment, package, promotional offer or special
              payment condition must be explained to the customer before
              payment. Its applicable cancellation and refund conditions
              should be communicated clearly at that time.
            </p>
            <p>
              Nothing in this policy is intended to remove or restrict
              consumer rights or remedies available under applicable law.
            </p>
          </PolicySection>

          <PolicySection title="8. Customer Health and Treatment Suitability">
            <p>
              Customers should inform the spa before treatment about
              relevant health conditions, injuries, allergies,
              sensitivities, skin conditions, recent surgeries or other
              circumstances that may affect treatment suitability.
            </p>
            <p>
              Customers should seek advice from a qualified healthcare
              professional where they are unsure whether a massage or
              wellness treatment is appropriate for them.
            </p>
            <p>
              The spa may ask for additional information, modify a
              treatment where appropriate, recommend that a customer
              seek medical advice or decline a service where there is a
              reasonable concern about safety or suitability.
            </p>
            <p>
              Customers are responsible for communicating relevant
              information accurately and not withholding important
              safety-related details.
            </p>
          </PolicySection>

          <PolicySection title="9. Nature and Limitations of Spa Services">
            <p>
              Spa and massage services are intended for relaxation,
              comfort and general wellness.
            </p>
            <p>
              Our services are not a substitute for medical examination,
              diagnosis, treatment, physiotherapy or professional
              healthcare advice.
            </p>
            <p>
              We do not guarantee that a massage or wellness service
              will diagnose, cure, prevent or treat any medical condition.
              Individual experiences and results may vary.
            </p>
            <p>
              Customers should stop a treatment and inform the spa
              immediately if they experience discomfort, pain,
              irritation or any unexpected reaction during the service.
            </p>
          </PolicySection>

          <PolicySection title="10. Hygiene, Safety and Professional Conduct">
            <p>
              Imperial Wellness Spa aims to maintain a clean, hygienic
              and comfortable environment for customers and staff.
            </p>
            <p>
              Customers are expected to respect the premises, staff
              members and other customers and to follow reasonable
              hygiene and safety instructions.
            </p>
            <p>
              Our services are professional spa and wellness services.
              Any inappropriate, abusive, threatening, harassing,
              unlawful or sexually inappropriate behaviour is strictly
              unacceptable.
            </p>
            <p>
              The spa reserves the right to refuse, discontinue or
              terminate a service where a customer's behaviour creates
              a safety concern, violates these terms or makes it
              inappropriate to continue.
            </p>
          </PolicySection>

          <PolicySection title="11. Couple Services">
            <p>
              Couple massage appointments are subject to availability
              and prior confirmation with the spa.
            </p>
            <p>
              Both customers must voluntarily agree to receive the
              service and must follow the same health, hygiene,
              safety and professional conduct requirements.
            </p>
            <p>
              The spa may decline or discontinue a service if either
              customer raises a safety concern or behaves in a manner
              inconsistent with these terms.
            </p>
          </PolicySection>

          <PolicySection title="12. Customer Responsibilities">
            <p>
              When using our website or requesting our services, you
              agree to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide accurate contact and appointment information.</li>
              <li>Communicate relevant treatment-related health concerns.</li>
              <li>Respect spa staff, premises and other customers.</li>
              <li>Follow reasonable safety and hygiene instructions.</li>
              <li>Use the website only for lawful purposes.</li>
              <li>
                Avoid submitting false, misleading, abusive or
                inappropriate communications.
              </li>
              <li>
                Avoid attempting to disrupt, damage or gain unauthorised
                access to the website or its infrastructure.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="13. Website Content and Intellectual Property">
            <p>
              Unless otherwise stated, website text, branding, logos,
              design elements, graphics, photographs and other original
              content associated with Imperial Wellness Spa are
              protected by applicable intellectual property laws.
            </p>
            <p>
              You may view and use the website for personal,
              non-commercial purposes.
            </p>
            <p>
              You must not copy, reproduce, distribute, modify, publish
              or commercially exploit website content without prior
              written permission from the relevant rights holder,
              except where permitted by applicable law.
            </p>
          </PolicySection>

          <PolicySection title="14. Third-Party Links and Services">
            <p>
              Our website may contain links to third-party services,
              including WhatsApp and social media platforms.
            </p>
            <p>
              These external services are independently operated.
              We do not control their content, availability, security
              or policies and are not responsible for changes made
              to their services.
            </p>
            <p>
              Your use of third-party platforms is subject to their
              own terms and privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="15. Website Availability and Disclaimer">
            <p>
              We make reasonable efforts to keep the website available
              and its information accurate. However, uninterrupted
              access cannot be guaranteed.
            </p>
            <p>
              The website may occasionally be unavailable due to
              maintenance, technical problems, hosting issues or
              circumstances outside our reasonable control.
            </p>
            <p>
              Website information is provided for general guidance.
              Nothing on the website should be interpreted as a
              medical diagnosis or professional healthcare advice.
            </p>
          </PolicySection>

          <PolicySection title="16. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, Imperial
              Wellness Spa will not be responsible for losses arising
              solely from circumstances beyond its reasonable control,
              temporary website interruptions or misuse of third-party
              platforms.
            </p>
            <p>
              Nothing in these terms excludes or limits liability
              where such exclusion or limitation is prohibited by law,
              including applicable consumer rights and remedies.
            </p>
            <p>
              Customers should communicate relevant safety and health
              information before receiving a treatment so that
              reasonable precautions can be considered.
            </p>
          </PolicySection>

          <PolicySection title="17. Complaints and Customer Support">
            <p>
              If you have a concern regarding a service, appointment,
              payment or your experience at the spa, please contact
              us directly so that we can review the matter.
            </p>
            <p>
              We will make reasonable efforts to understand and
              address customer concerns. This does not affect any
              rights you may have under applicable consumer
              protection laws.
            </p>
          </PolicySection>

          <PolicySection title="18. Changes to These Terms">
            <p>
              We may revise these Terms & Conditions when our
              services, website functionality, business practices
              or legal requirements change.
            </p>
            <p>
              Updated terms will be published on this page with a
              revised last-updated date. Continued use of the website
              after publication of updated terms will be subject to
              the revised terms, to the extent permitted by law.
            </p>
          </PolicySection>

          <PolicySection title="19. Governing Law and Jurisdiction">
            <p>
              These terms are governed by the applicable laws of India.
            </p>
            <p>
              Subject to applicable consumer protection laws and
              mandatory legal requirements, disputes arising in
              connection with these terms shall be subject to the
              jurisdiction of competent courts in Indore, Madhya
              Pradesh, India.
            </p>
          </PolicySection>

          <PolicySection title="20. Contact Information">
            <p>
              For appointment enquiries, service-related questions,
              complaints or clarification about these terms, contact:
            </p>

            <div className="mt-4 space-y-3 rounded-xl border border-[#D9AD4D]/15 bg-[#090806] p-5">
              <p className="font-medium text-[#D9AD4D]">
                Imperial Wellness Spa
              </p>
              <p>
                2nd Floor, Maharana Tower, Near Jardin Hotel, Tulsinagar,
                Nipania, Indore 452010, Madhya Pradesh, India.
              </p>
              <p>
                Phone / WhatsApp:{" "}
                <a
                  href="https://wa.me/919407082960"
                  className="text-[#D9AD4D] hover:text-[#F5D88A]"
                >
                  +91 94070 72008
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Imperialwellnessspa@gmail.com"
                  className="break-all text-[#D9AD4D] hover:text-[#F5D88A]"
                >
                  Imperialwellnessspa@gmail.com
                </a>
              </p>
            </div>
          </PolicySection>

          <div className="pt-7 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#D9AD4D]/50 px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#D9AD4D] transition-all hover:bg-[#D9AD4D] hover:text-[#090806]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
