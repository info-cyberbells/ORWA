import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="container my-5">
      <div className="policy-box p-4 p-md-5 shadow-sm">

        <h2 className="text-success fw-bold mb-1 text-center">
          Privacy Policy
        </h2>

        <p className="text-muted text-center mb-4">
          Effective Date: 01/01/2026
        </p>

        <p className="policy-intro">
          Omaxe Residents Welfare Association (“ORWA”, “we”, “us”, or “our”) is
          committed to protecting the privacy and personal information of its
          members, residents, visitors, and users (“you”). This Privacy Policy
          explains how we collect, use, store, and protect your information.
        </p>

        <hr />

        <div className="policy-section">
          <h5 className="policy-title">1. Information We Collect</h5>
          <p>
            We may collect personal information such as name, flat/unit number,
            contact details, email address, membership details, and payment
            information. We may also collect non-personal information such as
            browser type, IP address, and website usage data.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">2. How We Collect Information</h5>
          <p>
            Information is collected through membership forms, website
            submissions, payments, communications, and participation in
            association activities.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">3. Purpose of Collection</h5>
          <p>
            Information is used for membership management, communication,
            subscription handling, legal compliance, safety, and the smooth
            functioning of the residential community.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">4. Sharing of Information</h5>
          <p>
            ORWA does not sell or rent personal information. Data may be shared
            with service providers or government authorities only when required
            by law or for operational purposes.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">5. Data Security</h5>
          <p>
            Reasonable security measures are implemented to protect personal
            data. However, absolute security of information transmitted over the
            internet cannot be guaranteed.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">6. Data Retention</h5>
          <p>
            Personal information is retained only as long as necessary to fulfill
            association requirements and legal obligations.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">7. Your Rights</h5>
          <p>
            Members may request access to their personal information, request
            corrections, or withdraw consent for non-essential communications.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">8. Digital Communication</h5>
          <p>
            By joining ORWA digital platforms, you consent to receive official
            notices, updates, and communications through electronic means.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">9. Children’s Privacy</h5>
          <p>
            Information related to minors is not knowingly collected without
            parental or guardian consent.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">10. Changes to Policy</h5>
          <p>
            ORWA reserves the right to update this Privacy Policy from time to
            time. Any changes will be communicated appropriately.
          </p>
        </div>

        <div className="policy-section">
          <h5 className="policy-title">11. Contact Information</h5>

          <p className="mb-1">
            Omaxe Residents Welfare Association (ORWA)
          </p>

          <p className="mb-1">
            <strong>Email:</strong> admin@orwa.co.in
          </p>

          <p className="mb-0">
            <strong>Address:</strong> New Chandigarh
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
