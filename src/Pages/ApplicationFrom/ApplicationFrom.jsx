import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitMemberApplication, resetMembersState } from "../../features/membersSlice";
import "./ApplicationFrom.css";
import SignatureCanvas from "react-signature-canvas";


const ApplicationForm = () => {
  const sigCanvas = useRef(null);
  const [signatureData, setSignatureData] = useState(null);

  const dispatch = useDispatch();
  const formRef = useRef(null);

  const captchaRef = useRef(null);
  if (!captchaRef.current) {
    const operators = ["+", "-", "*"];
    captchaRef.current = {
      num1: Math.floor(Math.random() * 20) + 1,
      num2: Math.floor(Math.random() * 20) + 1,
      operator: operators[Math.floor(Math.random() * operators.length)],
    };
  }

  const { loading, success, error } = useSelector(
    (state) => state.members
  );

  const [previews, setPreviews] = React.useState({
    identityProof: null,
    addressProof: null,
    ownershipProof: null,
    photo: null
  });

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({
          ...prev,
          [fieldName]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (success) {
      formRef.current?.reset();
      setPreviews({
        identityProof: null,
        addressProof: null,
        ownershipProof: null,
        photo: null
      });
      formRef.current?.reset();

      const timer = setTimeout(() => {
        dispatch(resetMembersState());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Add signature image if exists
    if (signatureData) {
      const blob = await fetch(signatureData).then(res => res.blob());
      formData.append("signature", blob, "signature.png");
    }

    formData.append("requestSource", "web");
    dispatch(submitMemberApplication(formData));
  };




  return (
    <div className="container my-5">
      <div className="form-card">
        <h3 className="form-title">Membership Application Form</h3>

        {/* Success Message */}
        {success && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Your membership application has been submitted successfully.
            <button
              type="button"
              className="btn-close"
              onClick={() => dispatch(resetMembersState())}
            ></button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => dispatch(resetMembersState())}
            ></button>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit}>

          {/* Name */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>First Name *</label>
              <input name="firstName" type="text" className="form-control" required />
            </div>
            <div className="col-md-4">
              <label>Middle Name</label>
              <input name="middleName" type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Last Name *</label>
              <input name="lastName" type="text" className="form-control" required />
            </div>
          </div>

          {/* Father / Husband */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Father/ Husband/Mother /Wife's Name *</label>
              <input name="relationName" type="text" className="form-control" required />
            </div>
            <div className="col-md-4">
              <label>Middle Name</label>
              <input name="relationMiddleName" type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Last Name *</label>
              <input name="relationLastName" type="text" className="form-control" required />
            </div>
          </div>

          {/* Flat Details */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Flat / Villa / Plot No *</label>
              <input name="flatNumber" type="text" className="form-control" required />
            </div>
            <div className="col-md-4">
              <label>Floor (if applicable)</label>
              <input name="floor" type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Scheme *</label>
              <select name="scheme" className="form-select" required>
                <option value="">Select Scheme</option>
                <option>Ambrosia</option>
                <option>Celestria</option>
                <option>Celstria Royal</option>
                <option>Plot</option>
                <option>Silver Birch</option>
                <option>Villa</option>
              </select>
            </div>
          </div>

          {/* Living */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Are you living here? *</label>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="livingHere" value="true" required />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="livingHere" value="false" />
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="col-md-6">
              <label>No. of Owners *</label>
              <select name="numberOfOwners" className="form-select" required>
                <option>Single</option>
                <option>Dual</option>
                <option>Multiple</option>
              </select>
            </div>
          </div>

          {/* Contact */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Phone *</label>
              <input name="phone" type="tel" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label>Email *</label>
              <input name="email" type="email" className="form-control" required />
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label>Correspondence Address *</label>
            <input name="correspondenceAddress" type="text" className="form-control mb-2" placeholder="Address Line 1" required />
            <input name="address" type="text" className="form-control mb-2" placeholder="Address Line 2" />

            <div className="row">
              <div className="col-md-4">
                <input name="city" type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col-md-4">
                <input name="state" type="text" className="form-control" placeholder="State" />
              </div>
              <div className="col-md-4">
                <input name="postalCode" type="text" className="form-control" placeholder="Pincode" />
              </div>
            </div>
          </div>

          {/* Other Info */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Date of Birth *</label>
              <input name="dateOfBirth" type="date" className="form-control" required />
            </div>
            <div className="col-md-4">
              <label>Occupation *</label>
              <input name="occupation" type="text" className="form-control" required />
            </div>
            <div className="col-md-4">
              <label>No. of Family Members</label>
              <input name="familyMembersCount" type="number" className="form-control" />
            </div>
          </div>

          <div className="mb-3">
            <label>Hobbies / Skills</label>
            <input name="hobbiesAndSkills" type="text" className="form-control" />
          </div>

          {/* Uploads */}
          <div className="row mb-4 g-3">
            <div className="col-lg-3 col-md-6 col-12">
              <h6>Identity Proof *</h6>
              <div className="upload-box">
                {previews.identityProof ? (
                  <>
                    <img src={previews.identityProof} alt="Identity Proof Preview" style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }} />
                    <p style={{ fontSize: '12px', marginTop: '10px', color: '#28a745' }}>File uploaded ✓</p>
                  </>
                ) : (
                  <>
                    <img src="./images/upload-logo.png" alt="" />
                    <label>
                      Drag & Drop Files, Choose Files to Upload
                    </label>
                  </>
                )}
                <input name="identityProofDocument" type="file" onChange={(e) => handleFileChange(e, 'identityProof')} accept="image/*,.pdf" style={{ display: 'none' }} id="identityProof" />
                <label htmlFor="identityProof" style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline', fontSize: '14px' }}>
                  {previews.identityProof ? 'Change File' : 'Choose File'}
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h6>Address Proof *</h6>
              <div className="upload-box">
                {previews.addressProof ? (
                  <>
                    <img src={previews.addressProof} alt="Address Proof Preview" style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }} />
                    <p style={{ fontSize: '12px', marginTop: '10px', color: '#28a745' }}>File uploaded ✓</p>
                  </>
                ) : (
                  <>
                    <img src="./images/upload-logo.png" alt="" />
                    <label>
                      Drag & Drop Files, Choose Files to Upload
                    </label>
                  </>
                )}
                <input name="addressProofDocument" type="file" onChange={(e) => handleFileChange(e, 'addressProof')} accept="image/*,.pdf" style={{ display: 'none' }} id="addressProof" />
                <label htmlFor="addressProof" style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline', fontSize: '14px' }}>
                  {previews.addressProof ? 'Change File' : 'Choose File'}
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h6>Ownership Proof *</h6>

              <div className="upload-box">
                {previews.ownershipProof ? (
                  <>
                    <img src={previews.ownershipProof} alt="Ownership Proof Preview" style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }} />
                    <p style={{ fontSize: '12px', marginTop: '10px', color: '#28a745' }}>File uploaded ✓</p>
                  </>
                ) : (
                  <>
                    <img src="./images/upload-logo.png" alt="" />
                    <label>
                      Drag & Drop Files, Choose Files to Upload
                    </label>
                  </>
                )}
                <input name="ownershipProofDocument" type="file" onChange={(e) => handleFileChange(e, 'ownershipProof')} accept="image/*,.pdf" style={{ display: 'none' }} id="ownershipProof" />
                <label htmlFor="ownershipProof" style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline', fontSize: '14px' }}>
                  {previews.ownershipProof ? 'Change File' : 'Choose File'}
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h6>Photo *</h6>
              <div className="upload-box">
                {previews.photo ? (
                  <>
                    <img src={previews.photo} alt="Photo Preview" style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }} />
                    <p style={{ fontSize: '12px', marginTop: '10px', color: '#28a745' }}>File uploaded ✓</p>
                  </>
                ) : (
                  <>
                    <img src="./images/upload-logo.png" alt="" />
                    <label>
                      Drag & Drop Files, Choose Files to Upload
                    </label>
                  </>
                )}
                <input name="applicantPhoto" type="file" onChange={(e) => handleFileChange(e, 'photo')} accept="image/*" style={{ display: 'none' }} id="applicantPhoto" />
                <label htmlFor="applicantPhoto" style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline', fontSize: '14px' }}>
                  {previews.photo ? 'Change File' : 'Choose File'}
                </label>
              </div>
            </div>
          </div>



          <div>


            <h5 className="mt-4 mb-2">I, the undersigned Applicant, hereby solemnly declare and affirm as follows:

            </h5>

            <ul>
              <li> That I have read and fully understood the ORWA Constitution and Bye-Laws as uploaded on the official website of ORWA and agree to be bound by the same, including all amendments, circulars, notifications and decisions duly issued by the ORWA Management Committee (MC) from time to time.</li>
              <li>That I understand and accept my obligation to pay the monthly subscription fee of Rs. 200.00 per month (or Rs. 2,400.00 annually) or such revised amount as may be determined by the ORWA MC from time to time and duly notified on the ORWA website. I further understand that failure to regularly pay subscription dues shall, after following due process, entitle the MC to debar me from Voting Rights, debar me from Contesting Elections and/or remove my name from the primary membership of ORWA.</li>
              <li>That upon approval of my membership, I understand that I shall be added to the official ORWA Members' Group(s) managed by the designated Admins of ORWA, and I expressly agree to maintain Good Conduct on all ORWA Social Media platforms by complying with all applicable laws, including but not limited to Information Technology Act, 2000, Information Technology (Intermediary Guidelines & Digital Media Ethics Code) Rules, 2021, Digital Personal Data Protection Act, 2023 and to balance my rights under Article 19(1)(a) of the Constitution of India with obligations relating to public order, reputation, dignity, and lawful online behavior.</li>
              <li>That I further fully understand the following are strictly prohibited online viz. Defamation, Hate Speech, Harassment or Cyberbullying, Obscenity, Spreading misinformation / fake news, Malicious propaganda, Any content threatening national security or public order..</li>
              <li>That any violation of the above, or misuse of ORWA platforms, shall render me liable for appropriate action under law, including but not limited to provisions of Defamation – Sections 499, 500 IPC / Section 137 BNS, Promoting Enmity – Section 153-A IPC / Section 109 BNS, Insulting Religion – Section 295-A IPC / Section 298 BNS, Criminal Intimidation – Section 506 IPC / Section 111 BNS, Obscenity – Sections 292, 293 IPC / Section 294 BNS, Insulting Modesty of a Woman – Section 509 IPC / Section 78 BNS, Sedition / Acts threatening public order – Section 124-A IPC / Section 109 BNS..</li>
              <li>That all information provided by me is true and correct, and any concealment, misrepresentation, or violation of ORWA rules or applicable law shall make my membership liable to suspension, cancellation, or legal action.</li>
              <li>I hereby sign this Declaration voluntarily, with full knowledge and understanding of its contents. I confirm that I have read the constitution from orwa.co.in
              </li>
            </ul>
          </div>
          {/* Proof Selection */}
          <div className="row mb-3">
            <p className="fw-bold">I unconditionally subscribe to the objectives of the Society and contribute towards attainment of the same.

              I am enclosing herewith the following documents</p>
            <div className="col-md-4">

              <label>ID Proof *</label>
              <select name="identityProofType" className="form-select" required>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="PAN Card">Pan Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter ID">Voter ID</option>
                <option value="Passport">Passport</option>
                <option value="Other">Other Govt.Proof</option>
              </select>
            </div>

            <div className="col-md-4">
              <label>Address Proof *</label>
              <select name="addressProofType" className="form-select" required>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Utility Bill">Utility Bill</option>
                <option value="Rent Agreement">Rent Agreement</option>
                <option value="Property Documents">Property Documents</option>
                <option value="Bank Statement">Bank Statement</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-md-4">
              <label>Ownership Proof *</label>
              <select name="ownershipProofType" className="form-select" required>
                <option value="Sale Deed">Sale Deed</option>
                <option value="Allotment Letter">Allotment Letter</option>
                <option value="Registry Documents">Registry Documents</option>
                <option value="Lease Agreement">Lease Agreement</option>
                <option value="Other">Other</option>


              </select>
            </div>
          </div>

          {/* Captcha */}
          <div className="mb-3">
            <label>Custom Captcha *</label>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold">
                {captchaRef.current.num1} {captchaRef.current.operator} {captchaRef.current.num2} =
              </span>
              <input name="captcha" type="text" className="form-control w-25" required />
            </div>
          </div>

          {/* Signature */}
          <div className="mb-4 signature-wrapper">
            <label className="signature-label">Signature *</label>

            <div className="signature-box">
              <SignatureCanvas
                ref={sigCanvas}
                penColor="black"
                canvasProps={{
                  width: 400,
                  height: 150,
                  className: "sigCanvas"
                }}
              />
            </div>

            {/* Buttons */}
            <div className="signature-actions">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  const dataURL = sigCanvas.current.toDataURL();
                  setSignatureData(dataURL);
                }}
              >
                Save
              </button>

              <button
                type="button"
                className="btn btn-sm btn-danger ms-2"
                onClick={() => {
                  sigCanvas.current.clear();
                  setSignatureData(null);
                }}
              >
                Clear
              </button>
            </div>

            {/* Preview */}
            {signatureData && (
              <div className="signature-preview">
                <p className="fw-semibold mb-1">Preview:</p>
                <img src={signatureData} alt="Signature Preview" />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;