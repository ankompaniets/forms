import React, { Component } from "react";
import Field from '../Field';
import countries from '../../data/countries';
import cities from '../../data/cities';

class Contacts extends Component {

  addPassiveEventListener = items => {
    items.addEventListener('touchstart', handler, {passive: true});
  }
  

  getOptionItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ));
  }

  getCitiesList = country => {
    const citiesList = [];

    for (let key in cities) {
      if (cities[key].country === Number(country)) {
        citiesList.push({
          id: key,
          name: cities[key].name
        });
      }
    }

    return citiesList;
  }

	render() {
    // console.log(this.props.props);

    const { 
      values: {
        email,
        phone,
        country,
        city
      },
      errors,
      onChange } = this.props,
      { 
        getOptionItems,
        getCitiesList } = this;   

    const citiesList = getCitiesList(country);

		return (
      <React.Fragment>
        <style jsx>{`
          .invalid-feedback {
            display: block;
          }
          .form-control--error {
            border-color: #dc3545;
          }
        `}</style>
        <Field
          labelText="E-mail:"
          type="text"
          id="email"
          placeholder="Enter your e-mail"
          value={email}
          name="email"
          onChange={onChange}
          error={errors.email}
        />
        <Field
          labelText="Phone number:"
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          value={phone}
          name="phone"
          onChange={onChange}
          error={errors.phone}
        />
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select 
            className={`form-control ${errors.country ? "form-control--error": null}`}
            id="country"
            name="country"
            value={country}
            onChange={onChange}
          >
            <option value="">Select country</option>
            { getOptionItems(countries) }
          </select>
          { errors.country ? (<div className="invalid-feedback">{errors.country}</div>) : null }
        </div>
        <div className="form-group">
          <label htmlFor="country">City:</label>
          <select 
            className={`form-control ${errors.city ? "form-control--error": null}`}
            id="city"
            name="city"
            value={city}
            onChange={onChange}
          >
            <option value="">Select city</option>
            { getOptionItems(citiesList) }
          </select>
          { errors.city ? (<div className="invalid-feedback">{errors.city}</div>) : null }
        </div>
      </React.Fragment>
		)
	}
	
}

export default Contacts;