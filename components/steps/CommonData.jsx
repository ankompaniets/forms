import React, { Component } from "react";
import Field from '../Field';

class CommonData extends Component {

	render() {

		// console.log(this.props.props.values);

		const {
			values:
				{ firstName, 
        	lastName,
        	password,
        	repeatPassword,
       	  gender},
      errors,
			onChange } = this.props;

		return (
			<React.Fragment>
				<style jsx>{`
            .form-group__radio {
              display: flex;
              justify-content: flex-start;
              -ms-align-items: center;
              align-items: center;
            }

            .form-group__radio-input + label {
              margin: 0 0 0 10px;
            }
        `}</style>
	      <Field
	      	labelText="First name"
					type="text"
          id="firstName"
          placeholder="Enter first name"
          value={firstName}
          name="firstName"
          onChange={onChange}
          error={errors.firstName}
	      />
	      <Field
	      	labelText="Last name"
					type="text"
          id="lastName"
          placeholder="Enter last name"
          value={lastName}
          name="lastName"
          onChange={onChange}
          error={errors.lastName}
	      />
	      <Field
	      	labelText="Password"
					type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          name="password"
          onChange={onChange}
          error={errors.password}
	      />
	      <Field
	      	labelText="Repeat password"
					type="password"
          id="repeatPassword"
          placeholder="Repeat password"
          value={repeatPassword}
          name="repeatPassword"
          onChange={onChange}
          error={errors.repeatPassword}
	      />
	      <div className="form-group">
	        <div>Your sex:</div>
	        <div className="form-group__radio">                
	          <input 
	            type="radio"
	            className="form-group__radio-input"
	            id="male"
	            name="gender"
	            value="male"
	            checked={gender === "male"}
	            onChange={onChange}
	          />                  
	          <label htmlFor="male">male</label>
	        </div>
	        <div className="form-group__radio">                
	          <input 
	            type="radio"
	            className="form-group__radio-input"
	            id="female"                  
	            name="gender"
	            value="female"
	            checked={gender === "female"}
	            onChange={onChange}
	          />                  
	          <label htmlFor="female">female</label>
	        </div>              
	      </div>
	    </React.Fragment>
		)
	}
	
}

export default CommonData;