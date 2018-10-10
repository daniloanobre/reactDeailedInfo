import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const DetailedInfoListItem = ({ id, contact, salary, publishedDate }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{contact}</h3>
      <span className="list-item__sub-title">
        {moment(publishedDate).format("MMMM Do, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">{numeral(salary).format("$0,0.00")}</h3>
  </Link>
);

export default DetailedInfoListItem;
