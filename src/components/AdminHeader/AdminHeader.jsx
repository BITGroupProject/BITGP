import React, { Component } from "react";
import Button from "../Button/Button";
import "./AdminHeader.css";

export class AdminHeader extends Component {
  static propTypes = {};

  render() {
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
}

export default AdminHeader;
