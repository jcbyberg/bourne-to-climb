import type { Metadata } from "next"

import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Privacy Policy | Bourne To Climb Tree Service",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p>Legal entity: Bourne To Climb</p>
        <p>
          Website:{" "}
          <a href="https://bournetoclimb.ca">https://bournetoclimb.ca</a> (the
          &ldquo;Site&rdquo;)
        </p>

      <h2 className="text-2xl font-bold sm:text-3xl">1. Overview</h2>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our
        Site or our tree services. It is tailored for operations in Ontario, Canada and is intended to align with
        applicable privacy laws such as PIPEDA. This is general information, not legal advice.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">2. What We Collect</h2>
      <p>
        We may collect the following information when you contact us or request services: name, phone number, email
        address, service address, details about your property and requested work, and any messages or attachments you
        submit. If you communicate with us by phone or email, we may also keep related correspondence.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">3. How We Collect It</h2>
      <p>
        We collect information directly from you via our contact form and other interactions (calls, email). We may also
        collect limited technical information automatically when you visit the Site (such as IP address, browser type,
        pages visited, and general time-on-page) to maintain and improve the Site.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">4. How We Use Your Information</h2>
      <p>
        We use personal information to: respond to inquiries; prepare and deliver quotes; schedule and perform services;
        send service communications and invoices; improve our Site and services; maintain records and comply with legal
        obligations; and (with consent) send optional marketing updates. You can opt out of marketing at any time.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">5. Legal Bases / Consent</h2>
      <p>
        We generally rely on your consent, our legitimate interests in providing and improving services, and our legal
        obligations. By submitting the contact form or otherwise providing information, you consent to our collection
        and use for the purposes described here. Where required, we will seek express consent (e.g., for marketing).
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">6. Cookies &amp; Analytics</h2>
      <p>
        Our Site may use essential cookies for basic functionality and may use simple analytics to understand usage and
        performance. You can control cookies through your browser settings. Disabling certain cookies may affect site
        functionality.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">7. Sharing Your Information</h2>
      <p>
        We do not sell personal information. We may share limited information with service providers who help us operate
        our Site, communicate with you, schedule work, or process payments. These providers are only permitted to use
        personal information to perform services for us. We may also disclose information if required by law or to
        protect our rights, safety, or property.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">8. Data Location &amp; Transfers</h2>
      <p>
        Personal information may be stored or processed in Canada or other jurisdictions (for example, where our hosting
        or communications providers operate). As a result, your information may be subject to the laws of those
        jurisdictions and accessible to their authorities under lawful process.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">9. Retention</h2>
      <p>
        We retain personal information only as long as necessary to fulfill the purposes described in this Policy and to
        comply with legal, accounting, or reporting requirements. When no longer needed, information is securely deleted
        or anonymized.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">10. Security</h2>
      <p>
        We take reasonable physical, organizational, and technical measures to protect personal information against loss,
        theft, and unauthorized access. No method of transmission or storage is 100% secure, so we cannot guarantee
        absolute security.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">11. Your Choices &amp; Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information (subject to legal limits). You
        may withdraw consent to optional uses (like marketing) at any time. To exercise these rights, please use our{" "}
        <a href="https://bournetoclimb.ca/contact">contact form</a>.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">12. Children’s Privacy</h2>
      <p>
        Our services are intended for adults. We do not knowingly collect personal information from children without
        verifiable parental consent. If you believe a child has provided personal information, please contact us so we
        can delete it.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">13. Communications &amp; CASL</h2>
      <p>
        We comply with Canada’s anti-spam rules (CASL). We only send commercial electronic messages with consent or as
        otherwise permitted by law, and we include an unsubscribe mechanism. Service messages (e.g., quotes, scheduling,
        invoices) may still be necessary while work is in progress.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">14. Third-Party Links</h2>
      <p>
        The Site may link to third-party websites. We are not responsible for their content or privacy practices. Review
        their policies before providing personal information to those sites or services.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">15. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The “Effective date” above shows the latest revision. Your
        continued use of the Site or our services after changes are posted means you accept the updated Policy.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">16. Contact</h2>
      <p>
        Questions or requests regarding this Privacy Policy? Please use the{" "}
        <a href="https://bournetoclimb.ca/contact">contact form</a>.
      </p>
      </Container>
    </section>
  )
}
