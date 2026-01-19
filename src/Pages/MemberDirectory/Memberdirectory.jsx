import React from 'react'
import "./Memberdirectory.css"
import TeamSlider from '../Aboutus/Teamslider/TeamSlider'
const Memberdirectory = () => {
  return (
    <div>
      {/* Community's Members */}
      <section className="member-directory">
        <div className="member-content">

          <h5 className="member-subtitle">Explore Together</h5>
          <h2 className="member-title">Discover Our Community's Members</h2>

          <p className="member-text">
            Welcome to our Member Directory! Here, you can connect with fellow residents,
            learn about their backgrounds, and discover shared interests. We encourage
            active engagement and stronger community connections.
          </p>

          <div className="member-actions">
            <a href="/JoinUs">   <button className="btn btn-danger">Join Us</button></a>
            <a href="https://orwa.co.in/list-of-members">   <button className="btn btn-outline-light">Volunteer</button> </a>
            <a href="https://orwa.co.in/list-of-members"><button className="btn btn-outline-light">Current Members</button> </a>
          </div>

        </div>
      </section>
      {/* Community's Members end */}


      {/* FeedBack Section */}
      <div className="container my-5">
        <div className="row g-4 align-items-stretch">

          {/* <!-- Left Info Card --> */}
          <div className="col-md-4">
            <div className="contact-info-card  p-4">
              <h4 className="text-success mb-3">Reach Out</h4>
              <p className="small">
                Have questions or suggestions?
                We’re here to help and connect with you.
              </p>

              <div className="info-box mt-3">
                <strong>Location</strong>
                <p className="mb-0">Omaxe Township<br />New Chandigarh</p>
              </div>

              <div className="info-box mt-3">
                <strong>Email</strong>
                <p className="mb-0">info@orwa.co.in<br />teamorwa@orwa.co.in</p>
              </div>
            </div>
          </div>

          {/* <!-- Right Form Card --> */}
          <div className="col-md-8">
            <div className="contact-form-card p-4 h-100">
              <h4 className="mb-4">Feedback Form</h4>

              <div className="row mb-3">
                <div className="col">
                  <input className="form-control" placeholder="First Name" />
                </div>
                <div className="col">
                  <input className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <input className="form-control mb-3" placeholder="Email" />

              <select className="form-select mb-3">
                <option>Choose Category</option>
                <option>Security</option>
                <option>Maintenance</option>
                <option>General</option>
              </select>

              <textarea className="form-control mb-3" rows="4" placeholder="Your Message"></textarea>

              <button className="btn btn-success px-4">Send</button>
            </div>
          </div>

        </div>
      </div>

      {/* FeedBack Section end */}


      {/* Managing Committee */}

      <div className="container my-5 ">

        <div className="text-center mb-4">
          <h4>Meet Our Managing Committee
          </h4>
          <p className="text-muted">
            Discover the voices behind our community. Each member brings unique strengths and stories.
          </p>
        </div>

        <div className="row g-4 mt-4">
          <TeamSlider />
        </div>
      </div>

      {/* Managing Committee end */}


      {/* Featured Members */}
      <div className="container my-5">
        <div className="row align-items-center g-4 feature-wrap">

          {/* <!-- Image Side --> */}
          <div className="col-md-5">
            <div className="feature-img-box">
              <img
                src="./images/img4.jpg"
                alt="Members"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* <!-- Content Side --> */}
          <div className="col-md-7">

            <h3 className="fw-bold mt-2">Meet Our Featured Members
            </h3>

            <p className="text-muted mt-3">
              Discover our outstanding members and learn about their contributions to our community. Each member plays a vital role in enhancing our events and resources, making our association vibrant and engaging. Dive into their stories and see how you can connect with them and participate in our initiatives.


            </p>


          </div>

        </div>
      </div>
      {/* Featured Members end */}

      {/* Vibrant Community */}
      <div className="cta-sec text-center">
        <h2>Join Our Vibrant Community Today</h2>
        <p>
          Become a part of our community where connections grow. Take part in exciting events and access valuable resources that empower our members. Together, we can create a supportive environment full of opportunities. Join us and start making a difference today!
        </p>
        <button className="btn btn-danger mt-3">Get Involved</button>
      </div>
      {/* Vibrant Community end */}

      {/* Experiences That Inspire Us */}
      <div className="container my-5 text-center">
        <h3 className="text-success fw-bold">What Our Members Say</h3>
        <h4 className="fw-semibold mb-5">Community Voices: Experiences That Inspire Us</h4>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4 d-flex">
            <div className="review-box w-100">
              “Being a part of this community has made a significant difference in my life. From fun events to helpful resources, I truly feel supported here.”
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="review-box w-100">
              “I've met so many great people here and the events are always a blast! It's a fantastic way to connect with others.”
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="review-box w-100">
              “I found amazing resources through this association. The support and information provided were exactly what I needed.”
            </div>
          </div>
        </div>

      </div>
      {/* Experiences That Inspire Us end  */}

      {/* Get in Touch */}



      <div className="container my-5">
        <h4 className="text-center text-success fw-bold mb-5">Get in Touch</h4>

        <div className="row  align-items-center g-4">

          {/* <!-- Map --> */}
          <div className="row align-items-center">

            <div className="col-md-6 mb-4 mb-md-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54835.216360329!2d76.68741942985564!3d30.796996494748306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOmaxe%20Township%2C%20New%20Chandigarh%2C140901!5e0!3m2!1sen!2sin!4v1768306911851!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omaxe Township Location"
              ></iframe>
            </div>

            <div className="col-md-6">
              <h5 className="fw-semibold mb-2">We’re Happy to Help</h5>

              <p className="text-muted">
                Have a question or need information? Reach out to us anytime.
                We’re always here to support our community members.
              </p>

              <p className="d-flex align-items-center gap-2 mt-3 fw-semibold">
                <i className="bi bi-envelope-fill text-success"></i>
                info@orwa.co.in
              </p>

              <div className="d-flex gap-3 mt-3">
                <span className="contact-icon"><i className="bi bi-facebook"></i></span>
                <span className="contact-icon"><i className="bi bi-twitter"></i></span>
                <span className="contact-icon"><i className="bi bi-instagram"></i></span>
              </div>
            </div>

          </div>



        </div>
      </div>
      {/* Get in Touch  end*/}


    </div>
  )
}

export default Memberdirectory
