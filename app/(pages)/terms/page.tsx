import type { Metadata } from "next"

import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Terms of Service | Bourne To Climb Tree Service",
}


export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl">Bourne To Climb — Terms of Service</h1>
         <p>Legal entity: Bourne To Climb </p>
      <p>
        Website: <a href="https://bournetoclimb.ca">https://bournetoclimb.ca</a> (the “Site”)
      </p>


      <h2 className="text-2xl font-bold sm:text-3xl">1. Acceptance of Terms</h2>
      <p>
        By requesting a quote, booking services, approving an estimate, paying an invoice, or using the Site, you
        (“Client”, “you”, “your”) agree to these Terms of Service and our Privacy Policy. If you enter into this
        agreement for an organization, you confirm you have authority to bind that organization.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">2. Scope of Services</h2>
      <p>
        We provide arboricultural services including, but not limited to: tree removal (full or sectional), pruning,
        crown reduction, dead-wooding, storm response, brush chipping, stump grinding, hedge trimming, and related
        cleanup and haul-away. The specific scope, pricing, and assumptions for your project appear on your written
        estimate or work order. Only the items listed are included; all others are excluded unless approved as a Change
        Order (see Section 7).
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">3. Estimates &amp; Pricing</h2>
      <p>Estimates are valid for 30 days unless stated otherwise.</p>
      <p>All prices are before HST. HST is added to invoices per applicable law.</p>
      <p>
        Pricing assumes the site conditions described at the time of estimate, including access, ground conditions,
        obstacles, and utility clearance. We may revise pricing if conditions differ on the work day.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">4. Client Responsibilities</h2>
      <p>
        You will provide clear access for crew, trucks, chippers, and equipment, including driveway and yard access and
        adequate turning radius. Please move vehicles, trailers, and obstacles before arrival.
      </p>
      <p>
        You will remove or protect delicate items such as patio furniture, planters, ornaments, lighting, trampolines,
        toys, and irrigation heads or lines. Unless explicitly included, we do not move or protect these items.
      </p>
      <p>You will keep pets and people indoors or away from the work zone at all times.</p>
      <p>
        You will obtain required underground utility locates prior to stump grinding, excavation, or any subsurface
        work (for example, via Ontario One Call), and you will identify private lines such as sprinklers, pool lines,
        low-voltage lighting, septic, and internet drops.
      </p>
      <p>
        You will secure any necessary municipal permits, heritage or tree-protection approvals, and neighbour consents
        for boundary trees or over-hang.
      </p>
      <p>
        You will inform us of hazards such as wasp or bee nests, unstable soil, hidden debris, septic locations, wells,
        or contaminated materials.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">5. Scheduling, Weather &amp; Delays</h2>
      <p>
        We provide an estimated window or date. Start times may vary due to traffic, prior job overruns, equipment
        needs, or weather.
      </p>
      <p>
        High winds, lightning, heavy rain, snow or ice, or extreme temperatures may require postponement for safety.
      </p>
      <p>
        We will reschedule the earliest practical date. We are not liable for Client costs arising from delays beyond
        our reasonable control (see Force Majeure, Section 19).
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">6. Safety &amp; Work Methods</h2>
      <p>
        We follow industry safety practices and will choose the work methods, equipment, and drop zones in our sole
        discretion. The crew leader may stop work if unsafe conditions arise. You authorize minor trimming or removals
        strictly to create safe access when reasonably necessary and not material to landscape design.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">7. Changes &amp; Additional Work</h2>
      <p>
        Changes requested after estimate approval must be documented and approved as a Change Order with revised pricing
        or time. Examples include extra pruning, additional trees, wood removal that was initially “leave on site,” or
        stump grinding not on the estimate.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">8. Debris, Wood &amp; Stump Grindings</h2>
      <p>
        Unless stated otherwise, we will chip branches and brush and rake affected areas reasonably clean. “Reasonably
        clean” does not mean hand-raked perfection or lawn restoration.
      </p>
      <p>Your estimate will specify whether firewood or logs are hauled away, bucked to length and left on site, or left in rounds.</p>
      <p>
        Stump grinding produces a mix of chips and soil (“grindings”). Unless otherwise stated, grindings are left on
        site and leveled over the stump area. Removal of grindings and any topsoil, seed, or sod is not included unless
        listed on the estimate.
      </p>
      <p>
        We are not responsible for damage to unmarked or undisclosed utilities or private lines encountered during
        grinding or excavation.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">9. Lawn, Surface &amp; Subsurface Conditions</h2>
      <p>
        Tree work is heavy-duty. Normal impacts may include turf ruts or indentations from equipment and foot traffic,
        sawdust and wood or leaf debris, minor scuffs to driveways or walkways from movement of wood and equipment, and
        soil disturbance near stump areas.
      </p>
      <p>Low-impact matting may be used at our discretion but does not eliminate all marks.</p>
      <p>
        We are not responsible for restoring pre-existing or fragile conditions such as thin turf, shallow irrigation,
        recent sod, or unmarked lines. If you require protection or restoration beyond standard cleanup, request it in
        writing in the estimate.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">10. Wildlife &amp; Nesting</h2>
      <p>
        If protected wildlife such as active bird nests or bats is discovered, we may pause or modify work to comply
        with applicable laws. Additional visits or delays may incur extra costs.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">11. Payments</h2>
      <p>We may require a deposit to secure the booking.</p>
      <p>Unless otherwise stated, payment is due in full upon substantial completion of the work day.</p>
      <p>We accept the payment methods shown on your invoice, such as e-transfer or card.</p>
      <p>
        Invoices unpaid after 15 days may accrue 2% per month (24% per annum) or the maximum allowed by law, plus
        collection costs and reasonable legal fees.
      </p>
      <p>Fees may apply to NSF or returned payments. Unjustified chargebacks may be pursued legally.</p>

      <h2 className="text-2xl font-bold sm:text-3xl">12. Cancellations</h2>
      <p>
        If you cancel within two business days of the scheduled date, we may charge a cancellation fee up to 15% of the
        estimate to cover lost time and mobilization.
      </p>
      <p>
        We may cancel or reschedule for safety, equipment failure, illness, unforeseen site conditions, or force majeure
        without liability beyond refunding any unused deposit.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">13. Insurance</h2>
      <p>
        We maintain $5 million in commercial general liability insurance as required by Ontario law. Certificates are
        available upon request. You agree not to direct unsafe work or request methods that would violate safety standards.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">14. Limited Warranty (Workmanship)</h2>
      <p>
        We warrant our workmanship for 30 days from completion for the specific services performed, such as pruning cut
        quality. This limited warranty does not cover natural events like storms, wind, or ice, pest or disease,
        pre-existing decay or defects, regrowth, naturally shedding deadwood, or outcomes outside our control. Removals
        and stump grinding carry no warranty beyond the service performed.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">15. Disclaimers</h2>
      <p>
        Trees are living organisms subject to forces of nature. We cannot guarantee the future health, structural
        integrity, or longevity of any tree.
      </p>
      <p>
        We are not responsible for latent or hidden defects such as internal rot or root issues that are not reasonably
        discoverable at the time of estimate.
      </p>
      <p>
        Any information on the Site is general and not a substitute for consultation with a qualified arborist regarding
        your specific situation.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">16. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, our total liability for any claim arising from the services or these
        Terms is limited to the amount you paid for the specific service giving rise to the claim. We will not be liable
        for indirect, consequential, incidental, special, or punitive damages, loss of profits, or diminution in
        property value.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">17. Indemnity</h2>
      <p>
        You agree to defend, indemnify, and hold us harmless from claims, damages, liabilities, costs, and expenses,
        including reasonable legal fees, arising from your breach of these Terms, your failure to obtain required
        permits, consents, or locates, undisclosed hazards or private utilities, or your directions that contradict
        safety standards.
      </p>

      {/* Section 18 was intentionally removed per your request */}

      <h2 className="text-2xl font-bold sm:text-3xl">19. Force Majeure</h2>
      <p>
        We are not liable for delays or failures due to events beyond our reasonable control, including severe weather,
        acts of God, utility outages, strikes, illness, equipment failure, governmental actions, epidemics, or supply
        shortages.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">20. Website Terms of Use</h2>
      <p>
        Site content such as text, graphics, logos, and photos is owned by us or our licensors and protected by law. You
        may not copy, scrape, or republish without permission.
      </p>
      <p>
        You agree not to use the Site to post unlawful content, attempt to gain unauthorized access, or interfere with
        its operation.
      </p>
      <p>
        Links to other sites are provided for convenience; we are not responsible for their content or practices.
      </p>
      <p>
        Submissions via the Site, including bookings and forms, are offers to book service and are not confirmed until
        we send a written confirmation. Electronic approvals are valid and binding.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">21. Privacy &amp; Communications</h2>
      <p>
        Our collection, use, and disclosure of personal information is described in our Privacy Policy linked on the
        Site. By providing your contact information, you consent to us contacting you regarding quotes, scheduling,
        service updates, invoices, and optional marketing. You may unsubscribe from marketing at any time.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">22. Accessibility (AODA)</h2>
      <p>
        We are committed to providing service in a manner accessible to persons with disabilities and will communicate
        in ways that consider accessibility needs. To request accessible formats or support, please use the contact
        form.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">23. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of Ontario, Canada and applicable federal laws. Before formal proceedings,
        the parties will attempt to resolve disputes in good faith. If unresolved, the parties agree to mediation in the
        Regional Municipality of Durham, Ontario, or another mutually agreed location. If still unresolved, disputes may
        be brought in Ontario Small Claims Court or the Ontario Superior Court of Justice, as appropriate. Each party
        bears its own legal fees unless a statute or court order provides otherwise.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">24. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The Effective date above indicates the latest revision. Continued
        use of the Site or services after changes are posted constitutes acceptance of the updated Terms.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">25. Contact</h2>
      <p>
        Questions about these Terms? Please use the contact form at{" "}
        <a href="https://bournetoclimb.ca/contact">https://bournetoclimb.ca/contact</a> and, if available, select
        “Terms of Service” as the topic.
      </p>

      <h2 className="text-2xl font-bold sm:text-3xl">Optional Add-Ons</h2>
      <p>
        Optional add-ons, if included in your estimate, may cover driveway or yard protection mats, premium cleanup such
        as fine raking and blower detail, wood removal or firewood bucking to length, stump grindings haul-away and
        topsoil, seed, or sod restoration, arborist reports or permit application assistance, and emergency response
        surcharges for after-hours or storm work.
      </p>
       
      </Container>
    </section>
  )
}
