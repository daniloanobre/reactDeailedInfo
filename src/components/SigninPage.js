import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startSignin } from "../actions/auth";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";

class SigninPage extends Component {
  onSubmit = formProps => {
    this.props.startSignin(formProps, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Detailed Infos</h1>
          <div>
            <Link className="page-login_link" to="/signup">
              Signup
            </Link>
          </div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <fieldset className="page-login_fieldset">
                <Field
                  name="email"
                  type="text"
                  component="input"
                  autoComplete="off"
                  className="text-input page-login_field"
                  placeholder="Email..."
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="page-login_fieldset">
                <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="off"
                  className="text-input page-login_field"
                  placeholder="Password..."
                />
              </fieldset>
            </div>
            <div className="page-login_error">{this.props.errorMessage}</div>
            <button className="button">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    { startSignin }
  ),
  reduxForm({ form: "signin" })
)(SigninPage);
