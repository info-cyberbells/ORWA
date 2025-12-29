import React from 'react'
import "./JoinUs.css"
const JoinUs = () => {
  return (
    <div>
      <div className="container my-5 d-flex justify-content-center">
  <div className="card join-box shadow-sm p-4">
    <h3 className="text-success fw-bold mb-3 text-center">Join Us</h3>

    <p>
      New memberships will be processed only after proper verification
      and formal request as per the association rules.
    </p>

    <div className="alert alert-light border-start border-success">
      Send your request to <strong>9888008210</strong>
    </div>

    <h6 className="fw-semibold mt-4">Request Format</h6>

    <ul className="list-group join-list">
      <li className="list-group-item">Name:</li>
      <li className="list-group-item">Age:</li>
      <li className="list-group-item">Property Details:</li>
      <li className="list-group-item">No. of Family Members:</li>
      <li className="list-group-item">Hobbies:</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default JoinUs;
