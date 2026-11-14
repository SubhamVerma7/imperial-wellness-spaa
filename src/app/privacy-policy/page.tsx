
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Imperial Wellness Spa",
  description:
    "Read the Privacy Policy of Imperial Wellness Spa, Indore, and learn how we handle customer information and protect privacy.",
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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Your privacy matters to us. This policy explains what information
            we may receive, how we use it, and the steps we take to respect
            and protect your personal information.
          </p>

          <p className="mt-6 text-xs text-white/40">
            Last updated: 1 November 2026
          </p>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#D9AD4D]/15 bg-[#17130F] px-6 py-5 sm:px-10 sm:py-8">

          <PolicySection title="1. Introduction">
            <p>
              Imperial Wellness Spa, located in Indore, Madhya Pradesh,
              respects the privacy of visitors and customers who interact
              with our website or contact us regarding our spa services.
            </p>
            <p>
              This Privacy Policy describes how information may be collected,
              used, stored and protected when you visit our website, contact
              us by phone or email, or communicate with us through WhatsApp.
            </p>
            <p>
              By using our website or voluntarily providing information to
              us, you acknowledge that you have read this policy.
            </p>
          </PolicySection>

          <PolicySection title="2. Information We May Collect">
            <p>
              Our website currently does not provide customer registration,
              enquiry forms, online booking forms or online payment forms.
              We therefore do not collect information through those features.
            </p>
            <p>
              If you contact us directly, we may receive information that
              you voluntarily share, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your name.</li>
              <li>Your phone number or WhatsApp contact details.</li>
              <li>Your email address.</li>
              <li>Your preferred service or appointment enquiry.</li>
              <li>Information you choose to include in your message.</li>
              <li>
                Relevant allergies, sensitivities or health-related details
                that you voluntarily share to discuss treatment suitability.
              </li>
            </ul>
            <p>
              Please avoid sending unnecessary sensitive personal or medical
              information through ordinary messaging channels.
            </p>
          </PolicySection>

          <PolicySection title="3. Website Technical Information">
            <p>
              When you visit our website, certain technical information may
              be processed automatically by the website infrastructure or
              hosting provider. Depending on the technical configuration,
              this may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>IP address and general device information.</li>
              <li>Browser type and operating system.</li>
              <li>Pages visited and approximate visit time.</li>
              <li>Technical error and security logs.</li>
            </ul>
            <p>
              This information may be used to maintain website availability,
              troubleshoot errors, protect against misuse and improve
              website security.
            </p>
          </PolicySection>

          <PolicySection title="4. Cookies and Similar Technologies">
            <p>
              Our website may use essential technical storage or similar
              technologies where required for normal website operation,
              security and performance.
            </p>
            <p>
              We do not claim to use advertising or behavioural tracking
              cookies as part of the current website. If analytics,
              advertising pixels or other non-essential tracking
              technologies are introduced in the future, this policy will
              be updated and any required notices or permissions will be
              provided.
            </p>
            <p>
              You can also manage cookies through your browser settings.
              Disabling certain technical cookies may affect website
              functionality.
            </p>
          </PolicySection>

          <PolicySection title="5. How We Use Your Information">
            <p>
              Information voluntarily provided to us may be used for
              legitimate business purposes, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Responding to service enquiries.</li>
              <li>Communicating about appointment requests.</li>
              <li>Understanding your preferred spa service.</li>
              <li>Discussing treatment suitability and relevant precautions.</li>
              <li>Providing customer support.</li>
              <li>Maintaining business records where appropriate.</li>
              <li>Protecting our website and preventing misuse.</li>
              <li>Meeting applicable legal obligations.</li>
            </ul>
            <p>
              We aim to use personal information only for purposes relevant
              to the interaction or service for which it was provided.
            </p>
          </PolicySection>

          <PolicySection title="6. WhatsApp, Phone and Email Communication">
            <p>
              Customers may contact Imperial Wellness Spa using WhatsApp,
              telephone or email.
            </p>
            <p>
              WhatsApp and other communication services are operated by
              independent third parties. When you use these services, your
              communication may also be subject to their respective privacy
              policies, terms and data-handling practices.
            </p>
            <p>
              We recommend reviewing the privacy policy of the relevant
              communication provider before sharing personal information
              through its platform.
            </p>
            <p>
              Our WhatsApp contact number is{" "}
              <a
                href="https://wa.me/919407082960"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D9AD4D] hover:text-[#F5D88A]"
              >
                +91 94070 72008
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="7. Sharing of Personal Information">
            <p>
              Imperial Wellness Spa does not sell or rent customer personal
              information to third parties for their independent marketing
              purposes.
            </p>
            <p>
              Information may be shared only where reasonably necessary,
              such as:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                With website hosting or technical service providers who
                support website operation and security.
              </li>
              <li>
                With communication service providers when you choose to
                contact us through their platforms.
              </li>
              <li>
                Where disclosure is required by applicable law, a lawful
                request or a competent authority.
              </li>
              <li>
                Where necessary to protect legitimate rights, safety or
                prevent fraud and misuse.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="8. Data Storage and Retention">
            <p>
              We retain personal information only for as long as reasonably
              necessary for the purpose for which it was received, including
              responding to enquiries, managing customer communications,
              maintaining relevant business records and meeting legal
              obligations.
            </p>
            <p>
              Retention periods may vary depending on the type of
              information, the reason it was collected and applicable legal
              requirements.
            </p>
            <p>
              Information held by third-party platforms, such as WhatsApp
              or email providers, may also be subject to their own retention
              policies.
            </p>
          </PolicySection>

          <PolicySection title="9. Information Security">
            <p>
              We take reasonable steps to protect personal information
              against unauthorised access, misuse, loss, alteration or
              disclosure.
            </p>
            <p>
              However, no website, electronic communication or method of
              internet transmission can be guaranteed to be completely
              secure. Customers should use care when sharing personal
              information online.
            </p>
          </PolicySection>

          <PolicySection title="10. Your Privacy Choices and Requests">
            <p>
              You may contact us to request information about personal
              details you have voluntarily shared with us, request
              correction of inaccurate details, or ask us to delete
              information where deletion is appropriate and legally
              permissible.
            </p>
            <p>
              We may need to retain certain information where required by
              law or for legitimate business record-keeping.
            </p>
            <p>
              To submit a privacy-related request, contact us using the
              email address provided below. We may need to verify your
              identity before acting on a request.
            </p>
          </PolicySection>

          <PolicySection title="11. Children's Privacy">
            <p>
              Our website is intended for a general audience interested in
              spa and wellness services. We do not knowingly seek to collect
              personal information from children through the website.
            </p>
            <p>
              Anyone under 18 should not independently arrange a service.
              A parent or legal guardian must contact the spa in advance
              regarding any proposed service for a minor. The spa may
              decline a service where appropriate.
            </p>
          </PolicySection>

          <PolicySection title="12. Third-Party Websites">
            <p>
              Our website may contain links to third-party platforms,
              including WhatsApp and social media services. We do not
              control the content, privacy practices or security of those
              external websites.
            </p>
            <p>
              Visiting an external website is subject to that provider's
              own terms and privacy policy.
            </p>
          </PolicySection>

          <PolicySection title="13. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy when our website features,
              business practices or applicable legal requirements change.
            </p>
            <p>
              The updated version will be published on this page with a
              revised last-updated date. We encourage visitors to review
              this page periodically.
            </p>
          </PolicySection>

          <PolicySection title="14. Applicable Law">
            <p>
              This Privacy Policy is intended to be interpreted in
              accordance with applicable laws of India, including
              applicable data protection and privacy requirements as they
              come into force.
            </p>
          </PolicySection>

          <PolicySection title="15. Contact Us">
            <p>
              For privacy questions, requests or concerns, please contact
              Imperial Wellness Spa:
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
