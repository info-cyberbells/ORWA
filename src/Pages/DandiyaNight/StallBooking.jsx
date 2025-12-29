 import React from 'react'
 
 const StallBooking = () => {
   return (
     <div>
       <div className="container my-5">
  <form className="p-4 shadow rounded bg-white">

    {/* <!-- Name --> */}
    <div className="row mb-3">
      <label className="form-label fw-bold">Name <span className="text-danger">*</span></label>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="First" required />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Last" required />
      </div>
    </div>

    {/* <!-- Email & Phone --> */}
    <div className="row mb-3">
      <div className="col-md-6">
        <label className="form-label fw-bold">Email <span className="text-danger">*</span></label>
        <input type="email" className="form-control" required />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-bold">Phone <span className="text-danger">*</span></label>
        <input type="text" className="form-control" required />
      </div>
    </div>

    {/* <!-- Member --> */}
    <div className="row mb-3">
      <div className="col-md-6">
        <label className="form-label fw-bold">Are you a member <span className="text-danger">*</span></label>
        <select className="form-select">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label fw-bold">Membership No <span className="text-danger">*</span></label>
        <input type="text" className="form-control" required />
      </div>
    </div>

    {/* <!-- Tables & Chairs --> */}
    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label fw-bold">No of Tables</label>
        <input type="range" className="form-range" min="0" max="10" />
        <small>Selected Value: 0</small>
      </div>

      <div className="col-md-4">
        <label className="form-label fw-bold">Number of Chairs</label>
        <input type="range" className="form-range" min="0" max="20" />
        <small>Selected Value: 0</small>
      </div>

      <div className="col-md-4">
        <label className="form-label fw-bold">Fan</label>
        <div className="d-flex align-items-center gap-3">
          <div>
            <input type="radio" name="fan" /> Yes
          </div>
          <div>
            <input type="radio" name="fan" /> No
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Type of stall --> */}
    <div className="mb-3">
      <label className="form-label fw-bold">Type of Stall <span className="text-danger">*</span></label>
      <select className="form-select">
        <option>Home Bakery Items</option>
        <option>Food Stall</option>
        <option>Craft Items</option>
      </select>
    </div>

    <p className="text-muted">
      The Tables and chairs payment to be given directly to the vendor.
    </p>

    {/* <!-- Button --> */}
    <div classNameName='d-flex align-items-center justify-content-center'>

    <button className="btn btn-success px-4  ">Submit</button>
    </div>

  </form>
</div>

     </div>
   )
 }
 
 export default StallBooking
 