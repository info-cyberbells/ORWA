import React from 'react'

const RefundPolicy = () => {
  return (
 

 <div>

<section className="container my-5">
  <div className="policy-box p-4 shadow-sm">

    <h2 className="text-success fw-bold mb-2">Refund Policy</h2>
    <p className="mb-1 fw-semibold">Omaxe Residents Welfare Association (ORWA)</p>
    <p className="text-muted">Effective Date: <span>[Insert Date]</span></p>

    <p className="mt-3">At ORWA, we strive to maintain transparency and fairness in all financial dealings with our members. Please read the following refund policy carefully before making any payments.</p>

    <div className="mt-4">
      <h5 className="policy-title fw-bold">1. Membership Fees</h5>
      <ul className="mt-2">
        <li>Membership fees once paid are <strong>non-refundable</strong>.</li>
        <li>This applies in cases of withdrawal, disqualification, or termination.</li>
        <li>Applicable to both regular and associate (tenant) memberships.</li>
      </ul>
    </div>

    <div className="mt-4">
      <h5 className="policy-title fw-bold">2. Event Participation Fees</h5>
      <ul className="mt-2">
        <li>Event fees are generally non-refundable.</li>
        <li>If an event is cancelled by ORWA, a <strong>full refund</strong> will be processed within 14 working days.</li>
        <li>Cancellation at least 7 days before the event may be eligible for a <strong>50% refund</strong>, subject to approval.</li>
      </ul>
    </div>

    <div className="mt-4">
      <h5 className="policy-title fw-bold">3. Donations and Voluntary Contributions</h5>
      <p className="mt-2">All donations and voluntary contributions are <strong>non-refundable</strong> and are used for community welfare and development activities.</p>
    </div>

    <div className="alert alert-success mt-4 mb-0">
      <strong>Refund Queries:</strong> Please contact the ORWA Office at 
      <a href="mailto:teamorwa@orwa.co.in" className="text-decoration-none fw-semibold">teamorwa@orwa.co.in</a>
      or submit a written request during office hours.
    </div>

  </div>
</section>



    </div>
  )
}

export default RefundPolicy
