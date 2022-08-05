import React from "react";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dev Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Options</div>
    </div>
  );
};
