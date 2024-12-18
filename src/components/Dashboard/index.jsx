import React, { useState } from "react";
import Sidebar from "../commom/Sidebar";
import DashboardHeader from "../commom/DashboardHeader";
import Home from "./Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Reward from "./Reward";
import NewReward from "./Reward/NewReward";
import Competition from "./Competitions";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [alert, isAlert] = useState(true);

  return (
    <div className="">
      <DashboardHeader show={show} setShow={setShow} />
      <div className="d-flex">
        <div>
          <Sidebar show={show} />
        </div>
        <div
          style={{
            // Adjust content margin when sidebar is open
            transition: "margin-left 0.3s ease-in-out", // Smooth transition
            width: "100%",
            height: "100vh"
          }}
          className={`${show ? "main-dash" : "m-0"}`}
        >
          {alert && (
            <div
              style={{ backgroundColor: "rgba(63, 131, 248, 1)" }}
              onClose={() => isAlert(false)}
              dismissible
              className="mx-3 mt-2 px-3 py-2 rounded-3 d-flex justify-content-between"
            >
              <p className="p-0 m-0 text-light alert-text">
                Please note that all accounts we provide to our clients are demo
                accounts in a simulated trading environment.
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  onClick={() => isAlert(false)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0.25C4.615 0.25 0.25 4.615 0.25 10C0.25 15.385 4.615 19.75 10 19.75C15.385 19.75 19.75 15.385 19.75 10C19.75 4.615 15.385 0.25 10 0.25ZM8.28 7.22C8.21134 7.14631 8.12854 7.08721 8.03654 7.04622C7.94454 7.00523 7.84522 6.98318 7.74452 6.98141C7.64382 6.97963 7.54379 6.99816 7.4504 7.03588C7.35701 7.0736 7.27218 7.12974 7.20096 7.20096C7.12974 7.27218 7.0736 7.35701 7.03588 7.4504C6.99816 7.54379 6.97963 7.64382 6.98141 7.74452C6.98318 7.84522 7.00523 7.94454 7.04622 8.03654C7.08721 8.12854 7.14631 8.21134 7.22 8.28L8.94 10L7.22 11.72C7.14631 11.7887 7.08721 11.8715 7.04622 11.9635C7.00523 12.0555 6.98318 12.1548 6.98141 12.2555C6.97963 12.3562 6.99816 12.4562 7.03588 12.5496C7.0736 12.643 7.12974 12.7278 7.20096 12.799C7.27218 12.8703 7.35701 12.9264 7.4504 12.9641C7.54379 13.0018 7.64382 13.0204 7.74452 13.0186C7.84522 13.0168 7.94454 12.9948 8.03654 12.9538C8.12854 12.9128 8.21134 12.8537 8.28 12.78L10 11.06L11.72 12.78C11.7887 12.8537 11.8715 12.9128 11.9635 12.9538C12.0555 12.9948 12.1548 13.0168 12.2555 13.0186C12.3562 13.0204 12.4562 13.0018 12.5496 12.9641C12.643 12.9264 12.7278 12.8703 12.799 12.799C12.8703 12.7278 12.9264 12.643 12.9641 12.5496C13.0018 12.4562 13.0204 12.3562 13.0186 12.2555C13.0168 12.1548 12.9948 12.0555 12.9538 11.9635C12.9128 11.8715 12.8537 11.7887 12.78 11.72L11.06 10L12.78 8.28C12.8537 8.21134 12.9128 8.12854 12.9538 8.03654C12.9948 7.94454 13.0168 7.84522 13.0186 7.74452C13.0204 7.64382 13.0018 7.54379 12.9641 7.4504C12.9264 7.35701 12.8703 7.27218 12.799 7.20096C12.7278 7.12974 12.643 7.0736 12.5496 7.03588C12.4562 6.99816 12.3562 6.97963 12.2555 6.98141C12.1548 6.98318 12.0555 7.00523 11.9635 7.04622C11.8715 7.08721 11.7887 7.14631 11.72 7.22L10 8.94L8.28 7.22Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          )}
          <Routes>
            <Route path="/dashboard" element="">
              <Route path="" index element={<Home />} />
              <Route path="reward" index element={<Reward />} />
              <Route path="new-reward" index element={<NewReward />} />
              <Route path="competitions" index element={<Competition />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
