import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import GoogleMapsContainer from "./GoogleMapsContainer";

export default class DetailedInfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: props.detailedInfo ? props.detailedInfo.address : "",
      companyName: props.detailedInfo ? props.detailedInfo.companyName : "",
      contact: props.detailedInfo ? props.detailedInfo.contact : "",
      contactPhone: props.detailedInfo ? props.detailedInfo.contactPhone : "",
      description: props.detailedInfo ? props.detailedInfo.description : "",
      jobType: props.detailedInfo ? props.detailedInfo.jobType : "",
      location: props.detailedInfo ? props.detailedInfo.location : "",
      moreInfo: props.detailedInfo ? props.detailedInfo.moreInfo : "",
      createdAt: props.detailedInfo
        ? moment(props.detailedInfo.publishedDate)
        : moment(),
      role: props.detailedInfo ? props.detailedInfo.role : "",
      salary: props.detailedInfo ? props.detailedInfo.salary : "",
      scholarity: props.detailedInfo ? props.detailedInfo.scholarity : "",
      summary: props.detailedInfo ? props.detailedInfo.summary : "",
      title: props.detailedInfo ? props.detailedInfo.title : "",
      lat: props.detailedInfo ? props.detailedInfo.lat : "",
      lng: props.detailedInfo ? props.detailedInfo.lng : "",
      calendarFocused: false,
      error: ""
    };
  }
  onAddressChange = e => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };

  onCompanyNameChange = e => {
    const companyName = e.target.value;
    this.setState(() => ({ companyName }));
  };

  onContactChange = e => {
    const contact = e.target.value;
    this.setState(() => ({ contact }));
  };

  onContactPhoneChange = e => {
    const contactPhone = e.target.value;
    this.setState(() => ({ contactPhone }));
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onJobTypeChange = e => {
    const jobType = e.target.value;
    this.setState(() => ({ jobType }));
  };

  onLocationChange = e => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  };

  onMoreInfoChange = e => {
    const moreInfo = e.target.value;
    this.setState(() => ({ moreInfo }));
  };

  onRoleChange = e => {
    const role = e.target.value;
    this.setState(() => ({ role }));
  };

  onSalaryChange = e => {
    const salary = e.target.value;

    if (!salary || salary.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ salary }));
    }
  };

  onMoreInfoChange = e => {
    const moreInfo = e.target.value;
    this.setState(() => ({ moreInfo }));
  };

  onScholarityChange = e => {
    const scholarity = e.target.value;
    this.setState(() => ({ scholarity }));
  };

  onSummaryChange = e => {
    const summary = e.target.value;
    this.setState(() => ({ summary }));
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onHandleGeoLocation = position => {
    if (position) {
      this.setState(() => ({ lat: position.lat, lng: position.lng }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (
      !this.state.address ||
      !this.state.companyName ||
      !this.state.contact ||
      !this.state.contactPhone ||
      !this.state.description ||
      !this.state.jobType ||
      !this.state.location ||
      !this.state.createdAt ||
      !this.state.role ||
      !this.state.salary ||
      !this.state.scholarity ||
      !this.state.summary ||
      !this.state.title ||
      !this.state.lat ||
      !this.state.lng
    ) {
      this.setState(() => ({
        error: "Fill all the fields before submit."
      }));
    } else {
      this.setState(() => ({ error: "" }));

      this.props.onSubmit({
        address: this.state.address,
        companyName: this.state.companyName,
        contact: this.state.contact,
        contactPhone: this.state.contactPhone,
        description: this.state.description,
        jobType: this.state.jobType,
        location: this.state.location,
        moreInfo: this.state.moreInfo,
        publicationDate: this.state.createdAt.format("DD/MM/YYYY"),
        publishedDate: this.state.createdAt.valueOf(),
        role: this.state.role,
        salary: this.state.salary,
        scholarity: this.state.scholarity,
        summary: this.state.summary,
        title: this.state.title,
        lat: this.state.lat,
        lng: this.state.lng
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Address"
          autoFocus
          className="text-input"
          value={this.state.address}
          onChange={this.onAddressChange}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="text-input"
          value={this.state.companyName}
          onChange={this.onCompanyNameChange}
        />
        <input
          type="text"
          placeholder="Contact"
          className="text-input"
          value={this.state.contact}
          onChange={this.onContactChange}
        />
        <input
          type="text"
          placeholder="Concact Phone"
          className="text-input"
          value={this.state.contactPhone}
          onChange={this.onContactPhoneChange}
        />
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Job Type"
          className="text-input"
          value={this.state.jobType}
          onChange={this.onJobTypeChange}
        />
        <input
          type="text"
          placeholder="Location"
          className="text-input"
          value={this.state.location}
          onChange={this.onLocationChange}
        />
        <GoogleMapsContainer
          handleGeoLocation={this.onHandleGeoLocation}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <input
          type="text"
          placeholder="Latitude"
          className="text-input"
          value={this.state.lat}
          disabled
        />
        <input
          type="text"
          placeholder="Longitude"
          className="text-input"
          value={this.state.lng}
          disabled
        />
        <textarea
          className=""
          placeholder="More Info"
          className="textarea detailedArea"
          value={this.state.moreInfo}
          onChange={this.onMoreInfoChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <input
          type="text"
          placeholder="Role"
          className="text-input"
          value={this.state.role}
          onChange={this.onRoleChange}
        />
        <input
          type="text"
          placeholder="Salary"
          className="text-input"
          value={this.state.salary}
          onChange={this.onSalaryChange}
        />
        <input
          type="text"
          placeholder="Scholarity"
          className="text-input"
          value={this.state.scholarity}
          onChange={this.onScholarityChange}
        />
        <input
          type="text"
          placeholder="Summary"
          className="text-input"
          value={this.state.summary}
          onChange={this.onSummaryChange}
        />
        <input
          type="text"
          placeholder="Title"
          className="text-input"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <div>
          <button className="button">Save Detailed Info</button>
        </div>
      </form>
    );
  }
}
