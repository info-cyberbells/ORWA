import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidentialMembers, fetchMemberById, resetMembersState } from "../../features/membersSlice";
import { Eye, UserCheck, UserX, Clock, X, Edit, Trash2 } from "lucide-react";
import { updateMember } from "../../features/membersSlice";
import { toast } from "react-toastify";
import { verifyMember } from "../../features/membersSlice";
import "./Members.css";

const Residential = () => {
  const dispatch = useDispatch();
  const [membershipStatus, setMembershipStatus] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [SelectedMember, setSelectedMember] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);





  const { members, loading, page, totalPages, statusCounts, selectedMember, } =
    useSelector((state) => state.members);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchResidentialMembers({ page: currentPage, limit: 10 }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (selectedMember) {
      setSelectedMember(selectedMember);
      setMembershipStatus(selectedMember.membershipStatus || "");
    }
  }, [selectedMember]);


  const handleViewDetails = (member) => {
    dispatch(fetchMemberById(member._id));
    setMembershipStatus(member.membershipStatus);
  };
  const handleCheckbox = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (!members?.length) return;

    setSelectedIds((prev) =>
      prev.length === members.length ? [] : members.map((m) => m._id)
    );
  };
  const handleUpdate = () => {
    if (!SelectedMember) return;

    // Prepare payload
    const updatedData = {
      ...SelectedMember,
      membershipStatus,
    };

    dispatch(updateMember({ id: SelectedMember._id, updatedData }))
      .unwrap()
      .then(() => {
        toast.success("Member updated successfully");
        closeModal();
        dispatch(fetchMembers({ page: currentPage, limit: 10 })); // refresh table
      })
      .catch((err) => {
        toast.error(err || "Update failed");
      });
  };


  const getStatusBadge = (status) => {
    const styles = {
      active: "badge status-active",
      pending: "badge status-pending",
      inactive: "badge status-inactive"
    };
    return styles[status] || "badge bg-secondary";
  };


  const closeModal = () => {
    setSelectedMember(null);
    dispatch(resetMembersState());
  };


  const getRowNumber = (index) => {
    return (currentPage - 1) * 10 + index + 1;
  };

  const showValue = (value) =>
    value !== undefined && value !== null && value !== "" ? value : "-";


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
    <div className="members-container">
      <div className="container-fluid">
        <div className="members-header">
          <h1>Residential-List</h1>
          <p className="text-muted">Manage and view all society members</p>
        </div>

        {/* Members Table */}
        <div className="card">
          <div className="table-responsive">
            <table className="table members-table mb-0">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={
                        members.length > 0 &&
                        selectedIds.length === members.length
                      }
                    />
                  </th>

                  <th>Name</th>
                  <th>Father/ Husband/Mother /Wife's Name</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(member._id)}
                        onChange={() => handleCheckbox(member._id)}
                      />
                    </td>
                    <td className="fw-semibold"  style={{ whiteSpace: "nowrap" }}>
                      {`${member.firstName} ${member.lastName}`}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {showValue(member.relationName)}
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>

                      {member.createdAt
                        ? new Date(member.createdAt).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })
                        : "-"}
                    </td>
                    <td>
                      <span className={getStatusBadge(member.membershipStatus)}>
                        {member.membershipStatus}
                      </span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div className="d-inline-flex align-items-center gap-2 justify-content-center">

                        <button
                                                    onClick={() => {
                                                        setIsEdit(false);
                                                        handleViewDetails(member)
                                                    }}
                                                    className="btn btn-outline-success btn-sm d-flex align-items-center gap-1"
                                                >
                                                    <Eye size={16} strokeWidth={2} />
                                                    View
                                                </button>

                        <button
                          className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"
                          onClick={() => {
                            setIsEditMode(true);
                            handleViewDetails(member)
                          }}

                        >
                          <Edit size={16} strokeWidth={2} />
                          Edit
                        </button>

                        <button
                          className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                          onClick={() => handleDelete(member._id)}
                        >
                          <Trash2 size={16} strokeWidth={2} />
                          Delete
                        </button>


                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-wrapper">
            <span className="text-muted">Page {page} of {totalPages}</span>
            <div>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="btn btn-outline-secondary btn-sm me-2"
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="btn btn-outline-secondary btn-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {SelectedMember && (
        <div
          className="modal-wrapper"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.2)", // IMPORTANT
          }}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="modal-header"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <h2>Member Details</h2>
              <button onClick={closeModal} className="btn-close">
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="row g-3">
                {/* Personal Info */}
                <div className="col-12"><h6 className="section-title">Personal Information</h6></div>

                <div className="col-12">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={SelectedMember.firstName || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, firstName: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={SelectedMember.middleName || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, middleName: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={SelectedMember.lastName || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, lastName: e.target.value })}
                  />
                </div>


                <div className="col-12">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    disabled={!isEditMode}
                    value={SelectedMember.dateOfBirth ? SelectedMember.dateOfBirth.split("T")[0] : ""}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, dateOfBirth: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={SelectedMember.email || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, email: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={SelectedMember.phone || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, phone: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label>Occupation</label>
                  <input
                    type="text"
                    className="form-control"
                    value={SelectedMember.occupation || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, occupation: e.target.value })}
                  />
                </div>


                <div className="col-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={SelectedMember.livingHere}
                      disabled={!isEditMode}
                      onChange={(e) =>
                        setSelectedMember({ ...SelectedMember, livingHere: e.target.checked })
                      }
                    />
                    <label className="form-check-label" htmlFor="livingHereCheckbox">
                      Living Here
                    </label>
                  </div>
                </div>

                <div className="col-6 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={SelectedMember.traveling}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, traveling: e.target.checked })}
                  />
                  <label className="form-check-label">Traveling</label>
                </div>
                {/* Documents */}
                {/* Uploaded Documents */}
                <div className="row g-3 mt-4">
                  <div className="col-12">
                    <h6 className="section-title">Uploaded Documents</h6>
                  </div>

                  <div className="col-md-3">
                    <label>Identity Proof</label>
                    {SelectedMember.identityProofDocument ? (
                      <img
                        src={SelectedMember.identityProofDocument}
                        alt="Identity Proof"
                        className="img-fluid border rounded"
                      />
                    ) : (
                      <p>-</p>
                    )}
                  </div>

                  <div className="col-md-3">
                    <label>Address Proof</label>
                    {SelectedMember.addressProofDocument ? (
                      <img
                        src={SelectedMember.addressProofDocument}
                        alt="Address Proof"
                        className="img-fluid border rounded"
                      />
                    ) : (
                      <p>-</p>
                    )}
                  </div>

                  <div className="col-md-3">
                    <label>Ownership Proof</label>
                    {SelectedMember.ownershipProofDocument ? (
                      <img
                        src={SelectedMember.ownershipProofDocument}
                        alt="Ownership Proof"
                        className="img-fluid border rounded"
                      />
                    ) : (
                      <p>-</p>
                    )}
                  </div>

                  <div className="col-md-3">
                    <label>Applicant Photo</label>
                    {SelectedMember.applicantPhoto ? (
                      <img
                        src={SelectedMember.applicantPhoto}
                        alt="Applicant"
                        className="img-fluid border rounded"
                      />
                    ) : (
                      <p>-</p>
                    )}
                  </div>
                </div>
                {/* Signature */}
                <div className="row mt-4">
                  <div className="col-12">
                    <h6 className="section-title">Signature</h6>

                    {SelectedMember.signature ? (
                      <img
                        src={SelectedMember.signature}
                        alt="Member Signature"
                        className="img-fluid border rounded"
                        style={{ maxWidth: "300px", height: "auto" }}
                      />
                    ) : (
                      <p>-</p>
                    )}
                  </div>
                </div>

                {/* Membership Status */}
                <div className="col-6">
                  <label>Membership Status</label>
                  <select
                    className="form-select"
                    value={membershipStatus}
                    disabled={!isEditMode}
                    onChange={(e) => setMembershipStatus(e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>

                {/* Society ID */}
                <div className="col-12">
                  <label>Society ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={SelectedMember.societyId || ""}
                    disabled={!isEditMode}
                    onChange={(e) => setSelectedMember({ ...SelectedMember, societyId: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {isEditMode && (<button onClick={handleUpdate} className="btn btn-primary">Update</button>)}
              <button onClick={closeModal} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Residential;