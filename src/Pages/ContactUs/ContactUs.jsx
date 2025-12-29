import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { useDispatch, useSelector } from "react-redux";
import { contactus, resetContactState } from "../../features/contactusSlice";
import { toast } from "react-toastify";
const ContactUs = () => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.contact
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
      phone: "",   

    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactus(formData));
  };
  useEffect(() => {
    if (success) {
      toast.success("Message sent successfully ");
      setFormData({ name: "", email: "",  phone: "",
 message: "" });
      dispatch(resetContactState());
    }

    if (error) {
      toast.error(error);
    }
  }, [success, error, dispatch]);
  return (
    <div>
      <div className="contact-section container py-5">
        <div className="contact-header text-center mb-5">
          <h2 className="text-success fw-bold">Get in Touch with Us</h2>
          <p className="text-muted mx-auto description">
            We're here to help you connect and provide the information you need. Feel free to reach out with any questions or ideas. Your engagement is valuable to us, and we look forward to hearing from you!
          </p>
        </div>

        {/* Contact Content */}
        <div className="row g-4 justify-content-center">
          {/* Map */}
          <div className="col-12 col-md-6">
            <div className="card shadow-sm rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7473648625337!2d76.78071417446648!3d30.697383474601306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec8cc0000001%3A0x5c3a559a3e1208f1!2sCyberbells%20ITES%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1765451290831!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 4 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-5">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3 contact-item">
                <i className="bi bi-envelope-fill text-success fs-4"></i>
                <div>
                  <h5 className="fw-bold mb-1">Contact Us</h5>
                  <a href="mailto:info@orwa.co.in">info@orwa.co.in</a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 contact-item">
                <i className="bi bi-telephone-fill text-success fs-4"></i>
                <div>
                  <h5 className="fw-bold mb-1">Reach Us</h5>
                  <p className="mb-0">9888008210</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 contact-item">
                <i className="bi bi-geo-alt-fill text-success fs-4"></i>
                <div>
                  <h5 className="fw-bold mb-1">Our Office</h5>
                  <p className="mb-0">Silver Birch, Omaxe Township, 140901</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 contact-item">
                <i className="bi bi-star-fill text-success fs-4"></i>
                <div>
                  <h5 className="fw-bold mb-1">Stay Connected</h5>
                  <div className="d-flex gap-3 mt-1">
                    <a href="https://www.facebook.com/orwanewchd"><i className="bi bi-facebook text-success"></i></a>
                    <a href="https://x.com/orwanewchd/#"><i className="bi bi-twitter text-success"></i></a>
                    <a href="https://www.instagram.com/orwanewchd/"><i className="bi bi-instagram text-success"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 d-flex justify-content-center">
        <div className="card p-4 shadow-sm border-success w-100" style={{ maxWidth: "500px" }}>
          <h5 className="text-center text-success mb-4">Get in Touch</h5>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
  <label className="form-label">Phone Number</label>
  <input
    type="tel"
    className="form-control"
    id="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your phone number"
    required
  />
</div>
            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>    </form>
        </div>
      </div>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h3 className="text-success">Find Us Here</h3>
          <p>Explore Our Local Community Hub. We're dedicated to serving our community and making connections.</p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Map */}
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7473648625337!2d76.78071417446648!3d30.697383474601306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec8cc0000001%3A0x5c3a559a3e1208f1!2sCyberbells%20ITES%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1765451290831!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 4 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6">
            <div className="row g-3 mt-5">
              <div className="col-6 d-flex align-items-start gap-2">
                <i className="bi bi-envelope-fill text-success fs-4"></i>
                <div>
                  <h6 className="fw-bold mb-1">Email Us</h6>
                  <p className="mb-0">contact@community.org</p>
                </div>
              </div>
              <div className="col-6 d-flex align-items-start gap-2">
                <i className="bi bi-telephone-fill text-success fs-4"></i>
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="mb-0">+81 524-9876</p>
                </div>
              </div>
              <div className="col-6 d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-success fs-4"></i>
                <div>
                  <h6 className="fw-bold mb-1">Our Office</h6>
                  <p className="mb-0">123 Community Lane, Cityville</p>
                </div>
              </div>
              <div className="col-6 d-flex align-items-start gap-2">
                <i className="bi bi-star-fill text-success fs-4"></i>
                <div>
                  <h6 className="fw-bold mb-1">Stay Connected</h6>
                  <div className="d-flex gap-2">
                    <a href="https://www.facebook.com/orwanewchd"><i className="bi bi-facebook text-success"></i></a>
                    <a href="https://x.com/orwanewchd/#"><i className="bi bi-twitter text-success"></i></a>
                    <a href="https://www.instagram.com/orwanewchd/"><i className="bi bi-instagram text-success"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className='text-success'>Frequently Asked Questions</h2>
        <p>Here are some common questions about getting in touch with us.</p>

        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                How can I contact the association?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can contact us via email, phone, or our contact form on the website.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                What events do you host?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                We host community meetups, workshops, and networking events throughout the year.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                How do I become a member?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can become a member by filling out our membership form on the website.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                Where can I find community resources?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                All community resources are available in our online resource center.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                Can I volunteer with the association?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes! You can sign up to volunteer through our volunteer form online.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center text-success fw-bold mb-5">
          Join Our Community Today!
        </h2>

        <div className="row  g-4 justify-content-start">

          <div className="col-md-4">
            <div className="membership-box p-4 text-center">
              <h4 className="fw-bold text-success mb-3">
                Discover the Benefits of Membership
              </h4>
              <p className="text-muted">
                Being a member connects you to local events, resources, and a supportive network.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="membership-box p-4 text-center">
              <h4 className="fw-bold text-success mb-3">
                Engage and Make a Difference
              </h4>
              <p className="text-muted">
                Participate in initiatives that strengthen our community and enhance communication.           </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="membership-box p-4 text-center ">
              <h4 className="fw-bold text-success mb-3">
                Stay Informed and Involved
              </h4>
              <p className="text-muted">
                Subscribe to our newsletter for updates on events and community news.         </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs
