import React from "react";
import { connect } from "react-redux";
import DetailedInfoForm from "./DetailedInfoForm";
import { startAddDetailedInfo } from "../actions/detailedInfo";

export class AddDetailedInfoPage extends React.Component {
  onSubmit = detailedInfo => {
    this.props.startAddDetailedInfo(detailedInfo);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Detailed Info</h1>
          </div>
        </div>
        <div className="content-container">
          <DetailedInfoForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddDetailedInfo: detailedInfo =>
    dispatch(startAddDetailedInfo(detailedInfo))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddDetailedInfoPage);
