import React from "react";
import "./AdminPage.css";
import AddGallery from "./AddGallery";
import LeftMenu from "./LeftMenu";

const AdminPage = () => {
  return (
    <div className="content">
      <div className="admin-content">
        <div className="left-content">
          <div className="admin-left-menu">
            <LeftMenu />
          </div>
        </div>
        <div className="right-content">
          <AddGallery />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
