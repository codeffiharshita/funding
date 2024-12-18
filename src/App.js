import { Button, Stack } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/commom/Footer/Footer";
import Header from "./components/commom/Header/Header";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import AboutUs from "./components/About";
import Affiliate from "./components/Affiliate";
import FAQ from "./components/FAQ";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Sidebar from "./components/commom/Sidebar";
import Dashboard from "./components/Dashboard";
import Reward from "./components/Dashboard/Reward";
import DashboardHome from "./components/Dashboard/Home";

function App() {
  const location = useLocation();
  const isShowHeader = ["/faq", "/sign-up", "/sign-in", "/sidebar"].includes(
    location.pathname
  );
  const isDashboard = [
    "/dashboard",
    "/dashboard/reward",
    "/dashboard/new-reward",
    "/dashboard/competitions"
  ].includes(location.pathname);
  return (
    <div className={!isShowHeader && !isDashboard ? "main" : "bg-light"}>
      {!isShowHeader &&
        !isDashboard &&
        <section className="header">
          <Header />
        </section>}
      {/* {isDashboard && <Sidebar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      {isDashboard && <Dashboard />}
      {!isShowHeader &&
        !isDashboard &&
        <section className="pb-2">
          <Footer />
        </section>}
    </div>
  );
}

export default App;
