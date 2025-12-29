
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers, fetchMemberById, resetMembersState } from "../../features/membersSlice";
import { Eye, UserCheck, UserX, Clock, X } from "lucide-react";
import "./Members.css";

const Members = () => {
    const dispatch = useDispatch();
    const [membershipStatus, setMembershipStatus] = useState("");

    const { members, loading, page, totalPages, statusCounts, selectedMember } =
        useSelector((state) => state.members);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMembers({ page: currentPage, limit: 10 }));
    }, [dispatch, currentPage]);

    const handleViewDetails = (member) => {
        dispatch(fetchMemberById(member._id));
        setMembershipStatus(member.membershipStatus);
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
                    <h1>Members Directory</h1>
                    <p className="text-muted">Manage and view all society members</p>
                </div>

                {/* Status Cards */}
                <div className="row mb-4 g-3">
                    <div className="col-md-4">
                        <div className="status-card status-card-active">
                            <div className="status-card-content">
                                <div className="status-info">
                                    <p className="status-label">Active</p>
                                    <h2 className="status-count">
                                        {statusCounts?.find(s => s._id === "active")?.count || 0}
                                    </h2>
                                </div>
                                <UserCheck className="status-icon" size={28} strokeWidth={2} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="status-card status-card-pending">
                            <div className="status-card-content">
                                <div className="status-info">
                                    <p className="status-label">Pending</p>
                                    <h2 className="status-count">
                                        {statusCounts?.find(s => s._id === "pending")?.count || 0}
                                    </h2>
                                </div>
                                <Clock className="status-icon" size={28} strokeWidth={2} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="status-card status-card-inactive">
                            <div className="status-card-content">
                                <div className="status-info">
                                    <p className="status-label">Inactive</p>
                                    <h2 className="status-count">
                                        {statusCounts?.find(s => s._id === "inactive")?.count || 0}
                                    </h2>
                                </div>
                                <UserX className="status-icon" size={28} strokeWidth={2} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members Table */}
                <div className="card">
                    <div className="table-responsive">
                        <table className="table members-table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Father/ Husband/Mother /Wife's Name</th>
                                    <th>Date</th>
                                    {/* <th>Flat/Villa</th> */}
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member, index) => (
                                    <tr key={member._id}>
                                        <td>
                                            <span className="row-number">{getRowNumber(index)}</span>
                                        </td>
                                        <td className="fw-semibold">
                                            {`${member.firstName} ${member.lastName}`}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            {showValue(member.relationName)}  
                                        </td>
                                        <td>
                   
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
                                        {/* <td>{member.phone}</td> */}
                                        <td>
                                            <span className={getStatusBadge(member.membershipStatus)}>
                                                {member.membershipStatus}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleViewDetails(member)}
                                                className="btn btn-outline-success btn-sm"
                                            >
                                                <Eye size={16} strokeWidth={2} />
                                                View
                                            </button>
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
            {/* Modal */}
            {selectedMember && (
                <>
                    <div className="modal-backdrop" onClick={closeModal}></div>
                    <div className="modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Member Details</h2>
                                <button onClick={closeModal} className="btn-close">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="row g-3">

                                    {/* Personal Info */}
                                    <div className="col-12">
                                        <h6 className="section-title">Personal Information</h6>
                                    </div>

                                    <div className="col-12"><div className="detail-group"><label>First Name</label><p>{showValue(selectedMember.firstName)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Middle Name</label><p>{showValue(selectedMember.middleName)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Last Name</label><p>{showValue(selectedMember.lastName)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Full Name</label><p>{showValue(selectedMember.name)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Date of Birth</label><p>{selectedMember.dateOfBirth ? new Date(selectedMember.dateOfBirth).toLocaleDateString() : "-"}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Email</label><p>{showValue(selectedMember.email)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Phone</label><p>{showValue(selectedMember.phone)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Occupation</label><p>{showValue(selectedMember.occupation)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Living Here</label><p>{selectedMember.livingHere ? "Yes" : "No"}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Traveling</label><p>{selectedMember.traveling ? "Yes" : "No"}</p></div></div>

                                    {/* Relation Info */}
                                    <div className="col-12"><h6 className="section-title">Relation Information</h6></div>
                                    <div className="col-12"><div className="detail-group"><label>Relation First Name</label><p>{showValue(selectedMember.relationName)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Relation Middle Name</label><p>{showValue(selectedMember.relationMiddleName)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Relation Last Name</label><p>{showValue(selectedMember.relationLastName)}</p></div></div>

                                    {/* Residence */}
                                    <div className="col-12"><h6 className="section-title">Residence Details</h6></div>
                                    <div className="col-12"><div className="detail-group"><label>Flat Number</label><p>{showValue(selectedMember.flatNumber)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Floor</label><p>{showValue(selectedMember.floor)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Scheme</label><p>{showValue(selectedMember.scheme)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Family Members</label><p>{showValue(selectedMember.familyMembersCount)}</p></div></div>

                                    {/* Address */}
                                    <div className="col-12"><h6 className="section-title">Address Information</h6></div>
                                    <div className="col-12"><div className="detail-group"><label>Correspondence Address</label><p>{showValue(selectedMember.correspondenceAddress)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>City</label><p>{showValue(selectedMember.city)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>State</label><p>{showValue(selectedMember.state)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Country</label><p>{showValue(selectedMember.country)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Postal Code</label><p>{showValue(selectedMember.postalCode)}</p></div></div>

                                    {selectedMember.address && (
                                        <div className="col-12">
                                            <div className="detail-group">
                                                <label>Additional Address</label>
                                                <p>{showValue(selectedMember.address)}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Skills */}
                                    <div className="col-12">
                                        <div className="detail-group">
                                            <label>Hobbies & Skills</label>
                                            <p>{showValue(selectedMember.hobbiesAndSkills)}</p>
                                        </div>
                                    </div>

                                    {/* Documents – UNCHANGED */}
                                    <div className="col-12"><h6 className="section-title">Documents</h6></div>

                                    {selectedMember.identityProofDocument && (
                                        <div className="col-md-6">
                                            <div className="detail-group">
                                                <label>Identity Proof ({selectedMember.identityProofType})</label>
                                                <a href={selectedMember.identityProofDocument} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">View Document</a>
                                            </div>
                                        </div>
                                    )}

                                    {selectedMember.addressProofDocument && (
                                        <div className="col-md-6">
                                            <div className="detail-group">
                                                <label>Address Proof ({selectedMember.addressProofType})</label>
                                                <a href={selectedMember.addressProofDocument} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">View Document</a>
                                            </div>
                                        </div>
                                    )}

                                    {selectedMember.ownershipProofDocument && (
                                        <div className="col-md-6">
                                            <div className="detail-group">
                                                <label>Ownership Proof ({selectedMember.ownershipProofType})</label>
                                                <a href={selectedMember.ownershipProofDocument} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">View Document</a>
                                            </div>
                                        </div>
                                    )}

                                    {selectedMember.signature && (
                                        <div className="col-md-6">
                                            <div className="detail-group">
                                                <label>Signature</label>
                                                <img src={selectedMember.signature} className="img-fluid rounded" style={{ maxHeight: "100px" }} />
                                            </div>
                                        </div>
                                    )}

                                    {selectedMember.applicantPhoto && (
                                        <div className="col-md-6">
                                            <div className="detail-group">
                                                <label>Applicant Photo</label>
                                                <img src={selectedMember.applicantPhoto} className="img-fluid rounded" style={{ maxHeight: "150px" }} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Additional Info */}
                                    <div className="col-12"><h6 className="section-title">Additional Information</h6></div>
                                    <div className="col-12"><div className="detail-group"><label>Role</label><p>{showValue(selectedMember.role)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Request Source</label><p>{showValue(selectedMember.requestSource)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Active Status</label><p>{selectedMember.isActive ? "Yes" : "No"}</p></div></div>

                                    <div className="col-12">
                                        <div className="detail-group">
                                            <label>Membership Status</label>
                                            <select className="form-select" value={membershipStatus} onChange={(e) => setMembershipStatus(e.target.value)}>
                                                <option value="active">Active</option>
                                                <option value="pending">Pending</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12"><div className="detail-group"><label>Society ID</label><p>{showValue(selectedMember.societyId)}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Joined Date</label><p>{selectedMember.createdAt ? new Date(selectedMember.createdAt).toLocaleDateString() : "-"}</p></div></div>
                                    <div className="col-12"><div className="detail-group"><label>Last Updated</label><p>{selectedMember.updatedAt ? new Date(selectedMember.updatedAt).toLocaleDateString() : "-"}</p></div></div>

                                </div>
                            </div>

                            <div className="modal-footer">
                                <button onClick={closeModal} className="btn btn-secondary">Close</button>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </div>
    );
};

export default Members;