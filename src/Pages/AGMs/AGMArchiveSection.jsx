import './AGMArchiveSection.css'
import React from 'react'

const AGMArchiveSection = () => {
  return (
    <div>
  <div className="container my-5">

  <div className="text-center bg-secondary py-2 rounded text-white pt-3 mb-5">
    <h4 className="agm-archive-title ">ORWA Annual General Meetings Archive
</h4>
    <p className="agm-archive-subtitle">Held every October – Records from 2020 to 2024
</p>
  </div>

  <div className="agm-timeline-wrapper">

    <div className="agm-timeline-item">
      <div className="agm-timeline-card">
        <h6>October 2024</h6>
        <ul className="agm-points">
          <li>Welcome address by President</li>
          <li>Secretary report</li>
          <li>Financial presentation</li>
          <li>Future roadmap discussion</li>
        </ul>
        <a href="/AGMViewDetails2025" className="btn btn-danger btn-sm">View Details</a>
      </div>
    </div>

    <div className="agm-timeline-item">
      <div className="agm-timeline-card">
        <h6>October 2023</h6>
        <ul className="agm-points">
          <li>Welcome address</li>
          <li>AGM report</li>
          <li>Financial summary</li>
          <li>Community initiatives</li>
        </ul>
        <a href="/AGMViewDetails2025" className="btn btn-danger btn-sm">View Details</a>
      </div>
    </div>

    <div className="agm-timeline-item">
      <div className="agm-timeline-card">
        <h6>30 October 2022</h6>
        <ul className="agm-points">
          <li>President address</li>
          <li>Secretary report</li>
          <li>Budget approval</li>
        </ul>
        <a href="/AGMViewDetails2025" className="btn btn-danger btn-sm">View Details</a>
      </div>
    </div>

    <div className="agm-timeline-item">
      <div className="agm-timeline-card">
        <h6>October 2021</h6>
        <ul className="agm-points">
          <li>AGM conducted online</li>
          <li>Financial review</li>
          <li>Future planning</li>
        </ul>
        <a href="/AGMViewDetails2025" className="btn btn-danger btn-sm">View Details</a>
      </div>
    </div>

    <div className="agm-timeline-item">
      <div className="agm-timeline-card">
        <h6>October 2020</h6>
        <p className="agm-note">Not held due to COVID-19</p>
        <a href="/AGMViewDetails2025" className="btn btn-danger btn-sm">View Details</a>
      </div>
    </div>

  </div>

</div>

    </div>
  )
}

export default AGMArchiveSection




