import React, { useState } from "react";
import {
  AddSvg,
  UsersSvg,
  DarkLogoSvg,
  FileSvg,
  HomeSvg,
  LogoBudgeSvg,
  SettingSvg,
  SidebarCalenderSvg,
  SidebarTrophySvg,
  SidebarWorldSvg,
  TogglerIcon,
  LogoutSvg,
  OpenSidebarAddSvg
} from "../../svg";
import "./sidebar.css";
import { Button, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = ({ show }) => {
  const [page, setPage] = useState("Home");
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="l-navbar border-end"
        id="nav-bar"
        style={{ width: "100%" }}
      >
        <nav className="nav d-flex flex-coulmn align-items-center justify-content-between">
          <div>
            <div className="nav_logo">
              <Button className="px-4">
                <AddSvg />
              </Button>
            </div>

            <div className="ps-3">
              <hr />
            </div>
            <div className="nav_list d-flex flex-column align-items-center">
              {" "}
              <div className="nav_link">
                <Button
                  className="px-4 border-0"
                  style={{
                    background:
                      page === "Home"
                        ? "rgba(67, 135, 212, 0.5)"
                        : "transparent"
                  }}
                  onClick={() => {
                    navigate("/dashboard");
                    setPage("Home");
                  }}
                >
                  <HomeSvg />
                </Button>
              </div>
              <div className="nav_link">
                <Button
                  className="px-4 border-0"
                  style={{
                    background:
                      page === "Reward"
                        ? "rgba(67, 135, 212, 0.5)"
                        : "transparent"
                  }}
                  onClick={() => {
                    navigate("/dashboard/reward");
                    setPage("Reward");
                  }}
                >
                  <FileSvg />
                </Button>
              </div>
              <div className="nav_link">
                <Button
                  className="px-4 border-0 bg-transparent"
                  style={{
                    background:
                      page === "Competition"
                        ? "rgba(67, 135, 212, 0.5)"
                        : "transparent"
                  }}
                  onClick={() => {
                    navigate("/dashboard/competitions");
                    setPage("Competition");
                  }}
                >
                  <SidebarTrophySvg />
                </Button>
              </div>
              <div className="nav_link">
                <Button className="px-4 border-0 bg-transparent">
                  <SidebarWorldSvg />
                </Button>
              </div>
              <div className="nav_link ">
                <Button className="px-4 border-0 bg-transparent">
                  <SidebarCalenderSvg />
                </Button>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="ps-3">
              <hr />
            </div>
            <div className="nav_link">
              <Button className="px-4 border-0 bg-transparent">
                <UsersSvg />
              </Button>
            </div>
            <div className="nav_link">
              <Button className="px-4 border-0 bg-transparent">
                <SettingSvg />
              </Button>
            </div>
            <div className="nav_link">
              <Button className="px-4 border-0 bg-transparent">
                <LogoutSvg />
              </Button>
            </div>
          </div>
        </nav>
      </div>
      <Offcanvas
        show={show}
        placement="start"
        style={{
          position: "fixed",
          top: "11%",
          width: "20%"
        }}
        backdrop={false}
      >
        <Offcanvas.Header>
          <Button className="off mx-auto d-flex">
            <span>
              {" "}
              <OpenSidebarAddSvg />
            </span>
            <NavLink to="/" className="ps-2 text-white text-decoration-none">
              New Challenge
            </NavLink>
          </Button>
        </Offcanvas.Header>
        <div className="px-3">
          <hr />
        </div>
        <Offcanvas.Body className="d-flex flex-column gap-1">
          <Button className="off bg-transparent border-0 d-flex justify-cntent-start">
            <span className="canvas-body">
              {" "}
              <HomeSvg />
            </span>
            <NavLink to="/dashboard" className="ps-2">
              Home
            </NavLink>
          </Button>
          <Button className="off bg-transparent border-0 d-flex">
            <span className="canvas-body">
              {" "}
              <FileSvg />
            </span>
            <NavLink to="/dashboard/reward" className="ps-2">
              Rewards
            </NavLink>
          </Button>
          <Button className="off bg-transparent border-0 d-flex">
            <span className="canvas-body">
              {" "}
              <SidebarTrophySvg />
            </span>
            <NavLink to="/dashboard/competitions" className="ps-2">
              Competitions
            </NavLink>
          </Button>
          <Button className="off bg-transparent border-0 d-flex">
            <span className="canvas-body">
              {" "}
              <SidebarWorldSvg />
            </span>
            <NavLink to="/" className="ps-2">
              LeaderBoard
            </NavLink>
          </Button>
          <Button className="off bg-transparent border-0 d-flex pb-4">
            <span className="canvas-body">
              {" "}
              <SidebarCalenderSvg />
            </span>
            <NavLink to="/" className="ps-2">
              Calender
            </NavLink>
          </Button>
          <div className="px-3">
            <hr />
          </div>
          <div>
            <Button className="off bg-transparent border-0 d-flex pb-4">
              <span className="canvas-body">
                {" "}
                <UsersSvg />
              </span>
              <NavLink to="/" className="ps-2">
                Affiliate
              </NavLink>
            </Button>
            <Button className="off bg-transparent border-0 d-flex pb-4">
              <span className="canvas-body">
                {" "}
                <SettingSvg />
              </span>
              <NavLink to="/" className="ps-2">
                Settings
              </NavLink>
            </Button>
            <Button className="off bg-transparent border-0 d-flex pb-4">
              <span className="canvas-body">
                {" "}
                <LogoutSvg />
              </span>
              <NavLink to="/" className="ps-2">
                Logout
              </NavLink>
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
