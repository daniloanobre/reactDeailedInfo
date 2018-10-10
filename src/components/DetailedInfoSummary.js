import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";

export const DetailedInfoSummary = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button add-button" to="/create">
            Add Detailed Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(undefined)(DetailedInfoSummary);
