import React, { Component } from "react";

class Avatar extends Component {

	onChangeAvatar = event => {
    const { 
    	onChange,
    	values: { avatarName }
    } = this.props;

    const reader = new FileReader();

    reader.onload = event => {      
      onChange({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });
    };

    onChange({
      target: { 
				name: "avatarName",
				value: event.target.files[0].name
      }
    });

    reader.readAsDataURL(event.target.files[0]);    
  }

	render() {
		// console.log(this.props.values);

		const {
			values: {
				avatar,
				avatarName,
			},			
			errors
		} = this.props,

		  { onChangeAvatar } = this;

		const defaultIconSrc = '../static/default-avatar.png'

		return(
			<React.Fragment>
				<style jsx>{`
	            .user-icon {
	            	display: flex;
	            	justify-content: center;
	            	align-items: center;
	            }
	            .user-icon img {
	            	max-width: 100%;
	            }
	            .invalid-feedback {
		            display: block;
		          }
	            .custom-file-label--error {
	            	border-color: #dc3545;
	            }
	          `}</style>
				<div className="mb-4 user-icon">
					<img src={ avatar ? avatar : defaultIconSrc } alt="user_icon" />
				</div>
				<div className="mb-4">
					<div className="custom-file">
						<input
							type="file"
							className="custom-file-input"
							id="avatar"
							name="avatar"
							onChange={onChangeAvatar}
						/>
						<label
							className={`custom-file-label  ${errors.avatar ? "custom-file-label--error": null}`}
							htmlFor="avatar"
						>
							{ avatarName ? avatarName : 'Choose avatar'}
						</label>
					</div>
					{ errors.avatar ? (<div className="invalid-feedback">{errors.avatar}</div>) : null }
				</div>
			</React.Fragment>
		)
	}
}

export default Avatar;