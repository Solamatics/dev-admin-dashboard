import React from "react";
import "./single.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="editBtn">Edit</div>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">kebs@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">+234 765 49876</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">24, Earth's Way, Woodworth</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bahamas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
