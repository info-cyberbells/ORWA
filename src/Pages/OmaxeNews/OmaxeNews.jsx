import React from 'react'
import './OmaxeNews.css'
const OmaxeNews = () => {
  return (
    <div>
      {/* Community News */}
      <section className="news-section">
        <div className="container text-center text-white py-5">
          <h5 className="fw-bold">Stay Updated with Community News</h5>
          <p className="small mb-0">
            Discover what’s happening around you and connect with local events.
          </p>
        </div>
      </section>
      {/* Community News end */}

      {/* Latest Community Updates */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6 border py-3">
            <h5 className="text-success fw-bold">Latest Community Updates</h5>
            <p className="small text-muted">
              Stay updated with the latest news and events happening in our community. We share articles and announcements that highlight our initiatives, activities, and opportunities for engagement. Whether it’s an upcoming event, community service project, or important updates, you’ll find it all here. Connect with us and stay informed!      </p>
          </div>

          <div className="col-md-6  border py-3">
            <h5 className="text-success fw-bold">Upcoming Events</h5>
            <p className="small text-muted">
              Don’t miss out on our exciting events! Join us for activities designed to bring our community together. Find out when and where we meet by checking our event calendar. We look forward to seeing you at our next gathering!      </p>
          </div>

          <div className="col-md-6  border py-3">
            <h5 className="text-success fw-bold">Community Highlights</h5>
            <p className="small text-muted">
              We celebrate the incredible stories and achievements of our community members. From inspiring individuals to meaningful events, there are countless narratives that showcase our community spirit and collaboration. Join us in exploring these highlights that spark enthusiasm and connection among us.      </p>
          </div>

          <div className="col-md-6  border py-3">
            <h5 className="text-success fw-bold">Event Spotlights</h5>
            <p className="small text-muted">
              Our events bring everyone together, providing opportunities to learn, share, and connect. Explore the latest happenings that make our community vibrant and engaging. Whether it’s a gathering, workshop, or celebration, these events enrich our communal life and strengthen our bonds.

            </p>
          </div>
        </div>
      </section>
      {/* Latest Community Updates end */}



      {/* upcoming Events */}
      <section class="container py-5">
        <div class="row g-5">
          {/* left Side */}
          <div class="col-md-6">
            <h3 class="text-uppercase fw-bold text-success">Upcoming Events</h3>
            <h5 class=" text-black mt-1">Join Us</h5>

            <p class="text-muted mt-2">
              We’re excited to share our upcoming events! Join us for opportunities
              to connect, engage, and have fun with fellow members of our community.
            </p>

            <h5 class="fw-bold text-success mt-4">Community Picnic</h5>
            <p class="fw-semibold">Sat, February 10, 2024</p>

            <p class="text-muted">
              Join us for a Community Picnic! Bring your favorite dish to share
              and a chair to relax. This is a great chance to meet new friends.
            </p>

            <button class="btn btn-outline-success btn-sm">Find Out More</button>
          </div>

          {/* <!-- RIGHT SIDE --> */}
          <div class="col-md-6">

            <div class="event-item">
              <h6 class="fw-bold text-success">Yoga in the Park</h6>
              <p class="text-muted small">
                Join us for a relaxing yoga session in a beautiful park setting.
              </p>
              <button class="btn btn-outline-success btn-sm">Learn More</button>
            </div>

            <hr />

            <div class="event-item">
              <h6 class="fw-bold text-success">Book Club Night</h6>
              <p class="text-muted small">
                Join us for a vibrant discussion on this month’s book.
              </p>
              <button class="btn  btn-outline-success btn-sm">Read More</button>
            </div>

            <hr />

            <div class="event-item">
              <h6 class="fw-bold text-success">Local Art Fair</h6>
              <p class="text-muted small">
                Come support local artists and enjoy a day of creativity.
              </p>
              <button class="btn btn-outline-success btn-sm">Details Here</button>
            </div>

          </div>

        </div>
      </section>


      {/* upcoming Events end */}



    </div>
  )
}

export default OmaxeNews
