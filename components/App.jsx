import React, { Component } from "react";
import Steps from "./Steps";
import NavigationBottom from "./NavigationBottom";
import CommonData from './steps/CommonData';
import Contacts from './steps/Contacts';
import Avatar from './steps/Avatar';
import Result from './steps/Result';
import countries from '../data/countries';
import validate from "./validate";

class App extends Component {  

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      steps: [
        {
          name: "Step 1",
          isActive: true,
          isCompleted: false
        },
        {
          name: "Step 2",
          isActive: false,
          isCompleted: false
        },
        {
          name: "Step 3",
          isActive: false,
          isCompleted: false
        },
        {
          name: "Step 4",
          isActive: false,
          isCompleted: false
        }
      ],
      values: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        country: '',
        city: '',
        gender: 'male',
        email: '',
        phone: '',
        avatar: '',
        avatarName: ''
      },
      errors: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false,
        email: false,
        phone: false,
        country: false,
        city: false,
        avatar: false
      }
    };
  }

  onChange = event => {
    // console.log(event.target.name, event.target.value);
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };

    const newErrors = {
      ...this.state.errors,
      [event.target.name]: false
    };

    this.setState(prevState => ({
      ...prevState,
      values: newValues,
      errors: newErrors
    }));
  }

  goNextStep = () => {
    const errors = validate(this.state.values, this.state.activeStep);

    if (Object.keys(errors).length === 0) {
      const newSteps = [...this.state.steps];
      const newActiveStes = this.state.activeStep + 1;
      newSteps[this.state.activeStep].isActive = false;
      newSteps[newActiveStes].isActive = true;
      newSteps[this.state.activeStep].isCompleted = true;
      this.setState({
        activeStep: newActiveStes,
        steps: newSteps
      });
    } else {
      this.setState({
        errors
      });
    }
  };

  goPrevStep = () => {
    const newSteps = [...this.state.steps];
    const newActiveStes = this.state.activeStep - 1;
    newSteps[this.state.activeStep].isActive = false;
    newSteps[newActiveStes].isActive = true;
    this.setState({
      activeStep: newActiveStes,
      steps: newSteps
    });
  };

  render() {
    // console.log(this.state);
    const { 
      onChange,
      onChangeAvatar,
      onSubmit
    } = this,

    {
      steps,
      values,
      errors,
      activeStep
    } = this.state;


    return (
      <div className="form-container card">
        <style jsx>{`
            .form-container {
              position: absolute;                
              left: 50%;
              min-width: 450px;
              margin-top: 20px;
              transform: translateX(-50%);
            }

            .form-group {
              display: flex;
              flex-direction: column;
            }

            .form-group__radio {
              display: flex;
              justify-content: flex-start;
              -ms-align-items: center;
              align-items: center;
            }

            .form-group__radio-input + label {
              margin: 0 0 0 10px;
            }

            .btn-primary {
              align-self: center;
            }
          `}</style>
        <form action="" className="form card-body">
          <Steps steps={steps} activeStep={activeStep} />
            {steps[0].isActive && (
              <CommonData
                onChange={onChange}
                values={values}
                errors={errors}
              />
            )}
            {steps[1].isActive && (
              <Contacts
                onChange={onChange}
                values={values}
                errors={errors}
              />
            )}
            {steps[2].isActive && (
              <Avatar
                onChange={onChange}
                values={values}
                errors={errors}
              />
            )}
            {steps[3].isActive && <Result values={values} />}
            <NavigationBottom
              activeStep={activeStep}
              goNextStep={this.goNextStep}
              goPrevStep={this.goPrevStep}
            />                      
        </form>
      </div>
    );
  }
}

export default App;