import React from "react";
import { connect } from "react-redux";
import DetailedInfoListItem from "./DetailedInfoListItem";

export const DetailedInfoList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Detailed Infos</div>
      <div className="show-for-desktop">Detailed Infos</div>
      <div className="show-for-desktop">Details</div>
    </div>
    <div className="list-body">
      {props.detailedInfos.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Detailed Infos</span>
        </div>
      ) : (
        props.detailedInfos.map(detailedInfo => {
          return (
            <DetailedInfoListItem key={detailedInfo.id} {...detailedInfo} />
          );
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    detailedInfos: state.detailedInfos
  };
};

export default connect(mapStateToProps)(DetailedInfoList);
