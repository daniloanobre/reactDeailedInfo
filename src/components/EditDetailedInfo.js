import React from "react";
import { connect } from "react-redux";
import DetailedInfoForm from "./DetailedInfoForm";
import {
  startEditDetailedInfo,
  startRemoveDetailedInfo
} from "../actions/detailedInfo";

export class EditDetailedInfoPage extends React.Component {
  onSubmit = detailedInfo => {
    this.props.startEditDetailedInfo(this.props.detailedInfo.id, detailedInfo);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemoveDetailedInfo({ id: this.props.detailedInfo.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit</h1>
          </div>
        </div>
        <div
          className="content-container"
          style={{ marginTop: "0px", marginBottom: "10px" }}
        >
          <DetailedInfoForm
            detailedInfo={this.props.detailedInfo}
            onSubmit={this.onSubmit}
          />
          <button
            className="button button--secondary"
            style={{ marginTop: "0px" }}
            onClick={this.onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  detailedInfo: state.detailedInfos.find(
    detailedInfo => detailedInfo.id === props.match.params.id
  )
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditDetailedInfo: (id, detailedInfo) =>
    dispatch(startEditDetailedInfo(id, detailedInfo)),
  startRemoveDetailedInfo: data => dispatch(startRemoveDetailedInfo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDetailedInfoPage);
