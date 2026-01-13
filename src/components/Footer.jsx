import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-color1 mt-3 text-dark py-5">
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* Logo & Social */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <img src="/images/logo.png" width="80" alt="Logo" />

            <p className="subtext1 mb-3">
              Explore our community services and stay updated on events,
              resources, and more from any page.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="https://www.facebook.com/orwanewchd">
                <img src="/images/facebook-logo.png" width="30" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=%2Forwanewchd%2F">
                <img src="/images/instagram-logo.png" width="30" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@orwanewchd">
                <img src="/images/youtube-logo.png" width="30" alt="YouTube" />
              </a>
              <a href="https://x.com/orwanewchd">
                <img src="/images/twitterx-logo.png" width="30" alt="X" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h3 className="h-3 mb-3">Essential Links</h3>
            <ul className="list-unstyled footer-links">
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/TeamCondition">Terms And Conditions</a></li>
              <li><a href="/OmaxeNews">Omaxe News</a></li>
              <li><a href="/FAQs">FAQs</a></li>
              <li><a href="/ContactUs">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h3 className="h-3 mb-3">Contact Us</h3>

            <p>
              <a href="mailto:info@orwa.co.in">Email: info@orwa.co.in</a>
            </p>
            <p>
              <a href="tel:+919888008210">Phone: +91 9888008210</a>
            </p>
          </div>

          {/* Map */}
          <div className="col-12 col-md-3">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7473648625337!2d76.78071417446648!3d30.697383474601306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec8cc0000001%3A0x5c3a559a3e1208f1!2sCyberbells%20ITES%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1765451290831!5m2!1sen!2sin"
                width="350"
                height="200"
                style={{ border: 0, borderRadius: 5 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
