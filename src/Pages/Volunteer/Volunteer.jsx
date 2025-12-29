import React from 'react'
import "./Volunteer.css"
const Volunteer = () => {
  return (
    <div>
      <div class="container my-5">
  <div class="vol-form-box mx-auto">

    <h3 class="mb-4 text-center text-success">Volunteer Form</h3>

    <form>
      {/* <!-- Name --> */}
      <div class="mb-3">
        <label class="form-label fw-semibold">Name <span class="text-danger">*</span></label>
        <div class="row g-2">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="First Name"/>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Last Name"/>
          </div>
        </div>
      </div>

      {/* <!-- Email --> */}
      <div class="mb-3">
        <label class="form-label fw-semibold">Email <span class="text-danger">*</span></label>
        <input type="email" class="form-control" placeholder="Enter your email"/>
      </div>

      {/* <!-- Message --> */}
      <div class="mb-4">
        <label class="form-label fw-semibold">Comment or Message</label>
        <textarea class="form-control" rows="4" placeholder="Write your message here"></textarea>
      </div>

      {/* <!-- Button --> */}
      <div class="text-center">
        <button type="submit" class="btn btn-success px-4">
          Submit
        </button>
      </div>
    </form>

  </div>
</div>
    </div>
  )
}

export default Volunteer
