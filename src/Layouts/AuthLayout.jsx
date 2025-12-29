import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token || !user) {
      navigate('/admin-login', { replace: true });
    }
  }, [navigate]);
  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <Sidebar />

        <main className="col-lg-10 col-md-9 col-12 main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;