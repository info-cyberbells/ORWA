import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetAuthState } from "../features/AdminSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.api);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if (user) {
      toast.success("Login successfully");
      dispatch(resetAuthState());
      setTimeout(() => {
        setEmail("");
        setPassword("");
        navigate("/admin-members");
      }, 1500);
    }

    if (error) {
      toast.error(error);
    }
  }, [user, error, navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      navigate('/admin-members', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-8 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">

                <div className="text-center mb-4">
                  <h3 className="fw-bold">Welcome To ORWA Admin</h3>
                  <p className="text-muted mb-0">Login to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>

                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-control-lg"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        required
                      />

                      <span
                        className="input-group-text"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}></i>
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 rounded-pill"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "LOG IN"}
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
