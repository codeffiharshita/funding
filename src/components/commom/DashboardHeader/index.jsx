import React from "react";
import "./dashboardHeader.css";
import { DarkLogoSvg, LogoBudgeSvg, TogglerIcon } from "../../svg";
const DashboardHeader = ({ setShow, show }) => {
  return (
    <div className="sidebar-header">
      <div
        className="d-flex gap-3 align-items-center ps-5 py-3 border-bottom"
        style={{ overflow: "hidden" }}
      >
        <div className="pe-4" onClick={() => setShow(!show)}>
          <TogglerIcon />
        </div>
        <div className="logo">
          <DarkLogoSvg color="black" />
        </div>
        <div className="text">
          <h3 className="mb-0">
            Funding Pipe{" "}
            <span className="badge-svg">
              {" "}
              <LogoBudgeSvg />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
