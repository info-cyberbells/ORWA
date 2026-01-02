import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../features/contactusSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.contact);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      <div className="members-header">
        <h1>Contact List</h1>
        <p className="text-muted">View and manage help and support queries</p>
      </div>
      <div className="card shadow-sm border-0 rounded-4">


        {/* TABLE */}
        <div className="card">
          <div className="table-responsive">
            <table className="table members-table mb-0">
              <thead className="table-light text-center">
                <tr>
                  <th className="text-start ps-4">User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th width="120">Action</th>
                </tr>
              </thead>

              <tbody>
                {contacts?.map((item) => (
                  <tr key={item._id}>

                    {/* USER */}
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="rounded-circle bg-success text-white fw-bold d-flex justify-content-center align-items-center shadow-sm"
                          style={{ width: 42, height: 42 }}
                        >
                          {item.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="fw-semibold">{item.name}</div>
                          <small className="text-muted">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </small>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="text-center text-muted">
                      {item.email}
                    </td>

                    {/* PHONE */}
                    <td className="text-center">
                      {item.phone || <span className="text-muted">N/A</span>}
                    </td>

                    {/* ACTION */}
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-success d-flex align-items-center gap-1 px-3"
                        title="View Details"
                        data-bs-toggle="modal"
                        data-bs-target="#viewContactModal"
                        onClick={() => setSelectedContact(item)}
                      >
                        <i className="bi bi-eye"></i>
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}

                {contacts?.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted py-5">
                      No contact messages found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <div
        className="modal fade"
        id="viewContactModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">

            {/* Header */}
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title fw-bold">
                <i className="bi bi-eye me-2"></i>
                Contact Details
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {selectedContact ? (
                <div className="row g-4">

                  <div className="col-12">
                    <label className="fw-semibold">Name</label>
                    <div className="form-control">
                      {selectedContact.name}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="fw-semibold">Email</label>
                    <div className="form-control">
                      {selectedContact.email}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="fw-semibold">Phone</label>
                    <div className="form-control">
                      {selectedContact.phone || "N/A"}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="fw-semibold">Date</label>
                    <div className="form-control">
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="fw-semibold">Message</label>
                    <div
                      className="form-control bg-light"
                      style={{ minHeight: 120 }}
                    >
                      {selectedContact.message}
                    </div>
                  </div>

                </div>
              ) : (
                <p>No data available</p>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= END MODAL ================= */}
    </div>
  );
};

export default ContactList;
