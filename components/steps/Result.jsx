import React, { Component } from "react";
import countries from '../../data/countries';
import cities from '../../data/cities';

class Result extends Component {
  render() {
    const {
      values: {
        firstName,
        lastName,
        gender,
        phone,
        email,
        country,
        city,
        avatar
      }
    } = this.props;

    const countryName = countries.find(item => item.id === Number(country)).name;
    const cityName = cities[city].name;
    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img width="100%" src={avatar} alt="user_icon" />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>
              {firstName} {lastName}
            </h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Mobile:</strong> {phone}
            </p>
            <p>
              <strong>Location:</strong> {countryName}, {cityName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
