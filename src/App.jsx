import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";

import AppLayout from "./Layouts/App"
import AuthLayout from "./Layouts/AuthLayout"

// Pages
import Home from './Pages/Home'
import AboutUs from './Pages/Aboutus/AboutUs'
import TeamSlider from './Pages/Aboutus/Teamslider/TeamSlider'
import Constitution from "./Pages/Aboutus/Constitution/Constitution"
import Events from './Pages/Events/Events'
import DandiyaNight from './Pages/DandiyaNight/DandiyaNight'
import AGM2025 from './Pages/DandiyaNight/AGM/AGM2025'
import DandiyaNightRegistration from './Pages/DandiyaNight/DandiyaNightRegistration'
import StallBooking from './Pages/DandiyaNight/StallBooking'
import AGMs from './Pages/AGMs/AGMs'
import AGMArchiveSection from "./Pages/AGMs/AGMArchiveSection"
import AGMViewDetails2025 from "./Pages/AGMs/AGMViewDetails2025"
import Memberdirectory from "./Pages/MemberDirectory/Memberdirectory"
import JoinUs from './Pages/MemberDirectory/JoinUs'
import Volunteer from "./Pages/Volunteer/Volunteer"
import ContactUs from './Pages/ContactUs/ContactUs'
import TeamCondition from './Pages/Terms&Conditions/TeamCondition'
import OmaxeNews from './Pages/OmaxeNews/OmaxeNews'
import FAQs from './Pages/FAQs/FAQS'
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ApplicationFrom from "./Pages/ApplicationFrom/ApplicationFrom"


// Admin
import AdminLogin from './admin/Adminlogin'
import Dashboard from './admin/Dashboard'
import Members from './admin/Members/Members'
import Residential from './admin/Members/Residential'
import ContactList from "./admin/ContactList/ContactList";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/teamSlider" element={<TeamSlider />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/dandiyaNight" element={<DandiyaNight />} />
          <Route path="/DandiyaNightRegistration" element={<DandiyaNightRegistration />} />
          <Route path="/StallBooking" element={<StallBooking />} />
          <Route path="/AGM2025" element={<AGM2025 />} />
          <Route path="/AGMs" element={<AGMs />} />
          <Route path="/AGMArchiveSection" element={<AGMArchiveSection />} />
          <Route path="/AGMViewDetails2025" element={<AGMViewDetails2025 />} />
          <Route path="/Memberdirectory" element={<Memberdirectory />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/TeamCondition" element={<TeamCondition />} />
          <Route path="/OmaxeNews" element={<OmaxeNews />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/ApplicationFrom" element={<ApplicationFrom />} />

        </Route>

        {/*  ADMIN LOGIN (NO Header / NO Footer) */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ADMIN PANEL */}
        <Route element={<AuthLayout />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-members" element={<Members />} />
          <Route path="/admin-residential" element={<Residential/>} />
          <Route path="/admin-contactList" element={<ContactList />} />

        </Route>

      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
