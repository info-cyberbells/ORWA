import React from 'react'
import './AboutUs.css'
import TeamSlider from './Teamslider/TeamSlider'
const AboutUs = () => {
  return (
    <div>
      {/* banner section */}
  <div className="position-relative">
  <img  src="/images/img1.jpg" className="img-fluid Banner-img" alt="img" />

  <div className="img-overlay">
<div 
    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center px-3"
  >
    <div className="text-white About-text">

      <div className="img-font mb-1">Welcome Home</div>

      <span className="img-font d-block mb-3">
        Join Our Vibrant Community
      </span>

      <p className="fs-6 mx-auto mb-3">
        Welcome to our Resident’s Association! We’re here to connect neighbors,
        support local events, and share valuable resources. Join us in creating
        a stronger community where everyone feels at home.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
      <a href="/Volunteer"> <button className="banner-btn">Get Involved</button> </a> 
     <button className="btn btn-outline-light">Learn More</button>
      </div>

    </div>
  </div>
  </div>
</div>

      {/* banner section  end */}

{/* Our Mession section */}
     <div className="container section-box mt-5">
  <div className="row align-items-center">

    {/* Text Section */}
    <div className="col-md-6 mb-4">
      <div className="mission-text text-center text-md-start">

        <h3 className="mission-title">Our Mission and Values</h3>

        <p className="mission-desc">
          We are dedicated to building a vibrant community by fostering connections
          and providing resources that uplift residents. Our mission is to increase
          engagement, promote events, and offer support in various community services.
        </p>

     <a href="/Constitution">  <button className="btn learn-btn">Learn More</button></a>     

      </div>
    </div>

    {/* Image Section */}
    <div className="col-md-6 mb-4 d-flex justify-content-center">
      <img 
        src="/images/img4.jpg" 
        className="img-fluid mission-img"
        alt="mission-image" 
      />
    </div>

  </div>
</div>

{/* Our Mession section end */}



{/* Our Journey section */}

      <div className="container  my-5">

        <h4 className="fw-bold text-center">Our Journey</h4>
        <h5 className="text-success fw-semibold text-center">Milestones in Our Association’s Growth</h5>
        <p className="text-muted text-center">
          Look back at our association’s milestones…
        </p>

        <div className="row mt-4  justify-content-center">

          <div className="col-auto d-flex justify-content-center">
            <div className="timeline-line"></div>
          </div>

          <div className="col-auto ">

            <div className="timeline-card mb-4">
              <h6 className="timeline-card-text">Nov 2019 - First Community Event</h6>
              <p className=''>We kicked off the year by hosting our first community event, bringing neighbors together to share ideas and build connections..</p>
              <div className="d-flex gap-5">
                <button className="btn btn-outline-success btn-sm">Read More</button>
                <a className="text-success btn btn-link btn-sm fs-6 text-decoration-none ">
                  Learn More
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-filled/50/008000/more-than.png"
                    alt="more-than"
                    className="ms-1"
                  />
                </a>        </div>
            </div>

            <div className="timeline-card mb-4">
              <h6 className="timeline-card-text">March 2023 - New Member Drive</h6>
              <p>We launched a successful campaign to welcome new residents and enhance community engagement through our Member Directory.</p>
              <div className="d-flex gap-5">
                <button className="btn btn-outline-success btn-sm ">See Details</button>
                <a className="text-success btn btn-link btn-sm  fs-6 text-decoration-none ">
                  Get Info
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-filled/50/008000/more-than.png"
                    alt="more-than"
                    className="ms-1"
                  />
                </a>


              </div>
            </div>

            <div className="timeline-card mb-4">
              <h6 className="timeline-card-text">Dec 2024 - First Annual Carnival</h6>
              <p>Our Community Resource Fair brought together local services and resources, ensuring residents knew how to access what they needed.</p>
              <div className="d-flex gap-5">
                <button className="btn btn-outline-success btn-sm ">Find Out More</button>
                <a className="text-success btn btn-link btn-sm fs-6 text-decoration-none ">
                  Discover More  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-filled/50/008000/more-than.png"
                    alt="more-than"
                    className="ms-1"
                  />
                </a>        </div>
            </div>

          </div>

        </div>
      </div>

{/* Our Journey section  end*/}


{/* slider section */}
<div className="container my-5">

  <div className="text-center mb-4">
    <h4>Meet Our Team</h4>
    <h5 className="fw-bold">Introducing Our Team</h5>
    <p className="text-muted">
      Our dedicated team works tirelessly to enhance our community.
    </p>
  </div>

  <div className="row g-4">
  <TeamSlider/>
  </div>
</div>
{/* slider section end */}

 {/* Co-opt Members section */}
 <div className="container-fluid text-start mt-5 mb-5">
        <h4 className="members-title">Co-opt Members</h4>

        <div className="lines-wrapper">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="review-section">
        <div className="container text-center">
          <h5 className="review-title">What Our Members Say</h5>

          <p className="review-text">
            Joining this association has been a wonderful experience.
            I’ve met so many amazing people and have found resources
            that truly make a difference.
          </p>
        </div>
      </div>
 {/* Co-opt Members section end */}


      {/* join us Section */}
<div className='container'>


 <section className=" d-flex justify-content-center align-items-center py-5 py-md-5 py-lg-5">
    <div className="join-box text-center px-3 px-sm-4 px-md-5 py-4 py-md-5">

      <h4 className="fw-bold text-success fs-4 fs-md-3">
        Join Us and Make a Difference Today!
      </h4>

      <p className="mt-2 mb-4 text-dark">
        Become a valued member of our community! Joining us opens doors to exclusive events,
        access to resources, and a chance to connect with your neighbors. Enjoy the benefits
        of being part of a supportive network that enhances our community.
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
      <a href="/JoinUs"><button className="btn btn-outline-danger px-4">Join Now</button> </a>  
    <a href="/Volunteer">  <button className="btn btn-outline-success px-4">Volunteer</button></a>   
      </div>

    </div>
  </section>
</div>
      {/* join us Section  end*/}

 </div>
  )
}

export default AboutUs
