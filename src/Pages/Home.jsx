import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <marquee behavior="scroll" direction="left" scrollamount="10" className="mar" >
          ORWA membership is open!!! &nbsp; ORWA membership is open!!! &nbsp; ORWA membership is open!!!
          &nbsp; ORWA membership is open!!! &nbsp; ORWA membership is open!!!
          &nbsp; ORWA membership is open!!! &nbsp; ORWA membership is open!!!
          &nbsp; ORWA membership is open!!! &nbsp; ORWA membership is open!!!
          &nbsp; ORWA membership is open!!! &nbsp; ORWA membership is open!!!
        </marquee>
      </div>
      {/* banner section */}
      <div className="container-fluid">


        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active position-relative">
              <img src="/images/img1.jpg" className="Banner-img" alt="banner" />

              <div className="banner-text">

                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <div className="Banner-font">
                    Welcome to Your
                    <span className="community-text"> Community Hub</span>
                  </div>

                  <p className="text-white fs-5">
                    We are here to connect residents, promote events, and share community resources to enhance your experience.
                  </p>
             <a href="/JoinUs">  <button className='banner-btn'>Get Involved</button> </a>     
                </div>
              </div>
            </div>
            <div className="carousel-item  position-relative">
              <img src="/images/img2.jpg" className="Banner-img" alt="banner" />

              <div className="banner-text">

                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <div className="Banner-font community-text ">
                    Discover Local Opportunities
                  </div>

                  <p className="text-white fs-5">
                    Join us for exciting events, meet new friends, and make a difference in your community.                  </p>
                  <button className='banner-btn'>Learn More</button>
                </div>
              </div>
            </div>
            <div className="carousel-item  position-relative">
              <img src="/images/img3.jpg" className="Banner-img" alt="banner" />



              <div className="banner-text">

                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <div className="Banner-font community-text">
                    Be a Part of Something Bigger
                  </div>

                  <p className="text-white fs-5">
                    Your voice matters! Engage with us through events and services tailored to everyone.                  </p>
                  <button className='banner-btn'>Jion Now</button>
                </div>
              </div>
            </div>



          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* banner section end */}

      {/* Our Purpose section */}

      <div className="container mt-5 pt-5">
        <div className="row align-items-start">

          <div className="col-md-6 mb-4 mt-3">
            <h3 className="text-success fw-bold">
              Discover Our Purpose and Values
            </h3>
          </div>


          <div className="col-md-6 mb-4 mt-3">
            <p>
              At our Resident’s Association, we are dedicated to building a vibrant community.
              We believe in fostering relationships and providing support that strengthens our
              neighborhood. Our mission is to unite residents, promote events, and provide
              valuable resources to all members.
            </p>

            <div className="row mt-4">

              <div className="col-md-6 mb-4">
                <h4 className="text-success fw-bold">Our Mission</h4>
                <p>
                  We strive to ensure every resident feels valued and connected,
                  enhancing community spirit through shared activities and engagement.
                </p>
              </div>

              <div className="col-md-6 mb-4">
                <h4 className="text-success fw-bold">Our Values</h4>
                <p>
                  Our core values include inclusivity, collaboration, and transparency,
                  guiding our efforts to create a welcoming environment for all.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* Our Purpose section end */}

      {/* Explore Our Services */}
      <div className="services-section text-center mt-5  ">
        <h3 className=" fw-bold">Your Community, Together</h3>
        <h3 className="text-success fw-bold ">Explore Our Services</h3>
       <p className="subtext mx-auto mb-3 ">
  Our Resident’s Association offers a variety of services to enhance community living. From social gatherings to informative resources, we’re here to support you. Join us in making our neighborhood a better place, and connect with fellow residents through our programs and events.
</p>

      </div>
    <div className="container py-5">
  <div className="row g-4">

    <div className="col-12 col-sm-6 col-md-4">
      <div className="card h-100 service-card text-center">
        <div className="mb-2 pt-4">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/star--v1.png" alt="icon" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-success">Community Events</h5>
          <p className="card-text">Join us for regular events that bring neighbors together. Enjoy activities like picnics, workshops, and more.</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4">
      <div className="card h-100 service-card text-center">
        <div className="mb-2 pt-4">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/star--v1.png" alt="icon" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-success">Helpful Vendor Resources</h5>
          <p className="card-text">Access a range of local resources including services, suppliers, classes, and essential information for community members.</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4">
      <div className="card h-100 service-card text-center">
        <div className="mb-2 pt-4">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/star--v1.png" alt="icon" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-success">Member Directory</h5>
          <p className="card-text">Connect with fellow members through our directory. Get to know your neighbors and build lasting friendships.</p>
        </div>
      </div>
    </div>

  </div>

  <div className="d-flex align-items-center justify-content-center mt-4">
    <button className="btn btn-outline-success p-2">Learn More</button>
  </div>
</div>
 {/* Explore Our Services  end*/}

      {/* Members' Experiences */}
      <div className="container-fluid bg-color py-5">
        <div className="services-section text-center">

          <h3 className="fw-bold text-white">What Our Members Say</h3>
          <h4 className="fw-bold text-white">
            Hear from Our Community Members' Experiences
          </h4>

          <div className="d-flex justify-content-center align-items-center gap-2 py-3 ">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/6c757d/square-90.png" alt="square-90" />
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/6c757d/square-90.png" alt="square-90" />
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/6c757d/square-90.png" alt="square-90" />
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/6c757d/square-90.png" alt="square-90" />
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/6c757d/square-90.png" alt="square-90" />

          </div>

          <h1 className="text-light fs-4 px-3 feedback">
            Being a part of this community has truly been amazing. The events are well organized,
            and I always find something valuable to engage with.
          </h1>

          <p className="text-white fw-bold mt-3 mb-0">Aakriti Malhotra</p>
          <p className="text-white">Community Volunteer</p>

        </div>
      </div>

      <div className='container-fluid'>
        <div className="row">

          <div className="col bg-color text-center text-white py-1">
            <h3 className="fw-bold text-white">Get Involved!</h3>

            <h4 className="fw-bold px-3">
              Become a member today and strengthen our community!
            </h4>

            <button className="btn btn-outline-light mt-4 px-4 py-2 mb-2 border-radius-5">
              Join Now
            </button>
          </div>


        </div>
      </div>


      {/* Members' Experiences end */}

    </div>
  )
}

export default Home;
