import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <div className="mt-4 mb-3">
                <h3>Welcome to Your Community Hub</h3>
                <p className="text-muted">
                    Connect, collaborate, and grow together with your community.
                </p>
            </div>

            <div className="top-bar d-flex flex-wrap gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search community..."
                    className="form-control col-lg-3 col-md-6 col-12 w-50"
                />
                <div className="ms-auto">
                    <i className="bi bi-bell"></i>
                    <i className="bi bi-person-circle ms-3"></i>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="stat-card">
                        <i className="bi bi-people-fill"></i>
                        <h6>Total Members</h6>
                        <h4>1,250</h4>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="stat-card">
                        <i className="bi bi-chat-left-text"></i>
                        <h6>Active Discussions</h6>
                        <h4>320</h4>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="stat-card">
                        <i className="bi bi-calendar-check"></i>
                        <h6>Upcoming Events</h6>
                        <h4>12</h4>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="stat-card">
                        <i className="bi bi-graph-up"></i>
                        <h6>Community Growth</h6>
                        <h4>+18%</h4>
                    </div>
                </div>
            </div>

            <div className="card mt-5">
                <div className="card-header fw-bold">Recent Community Activity</div>
                <div className="card-body p-0">
                    <table className="table mb-0">
                        <thead>
                            <tr>
                                <th>Member</th>
                                <th>Activity</th>
                                <th>Status</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rahul</td>
                                <td>Posted in Discussion</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>2 hrs ago</td>
                            </tr>
                            <tr>
                                <td>Neha</td>
                                <td>Joined Event</td>
                                <td><span className="badge bg-primary">Confirmed</span></td>
                                <td>5 hrs ago</td>
                            </tr>
                            <tr>
                                <td>Aman</td>
                                <td>New Member Joined</td>
                                <td><span className="badge bg-warning">New</span></td>
                                <td>1 day ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;