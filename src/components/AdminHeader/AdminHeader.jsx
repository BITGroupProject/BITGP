import React from "react";
import Button from "../Button/Button";
import "./AdminHeader.css";

function AdminHeader() {
  return (
    <header className="admin-header">
      <h2 className="admin-header--logo">Reports Administration</h2>
      <div className="btn-container">
        <Button name="Reports"></Button>
        <Button name="Create Report"></Button>
      </div>
    </header>
  );
}

export default AdminHeader;
