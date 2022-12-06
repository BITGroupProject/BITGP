import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";
import "./AdminHeader.css";

export class AdminHeader extends Component {
  static propTypes = {};

  render() {
    return (
      <header className="admin-header">
        <h2 className="admin-header--logo">Reports Administration</h2>
        <div className="btn-container">
          <Button></Button>
          <Button></Button>
        </div>
      </header>
    );
  }
}

export default AdminHeader;
