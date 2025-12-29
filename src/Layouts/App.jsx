import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer"
const AppLayout = () => {
  return (
    <>

       <div className="container-fluid p-0 m-0">

        <Navbar />

        <div>
        <Outlet />
      </div>
       
      </div>
      <Footer />

    </>
  )
}

export default AppLayout;
