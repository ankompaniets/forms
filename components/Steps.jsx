import React, { Component } from "react";
import classnames from "classnames";

class Steps extends Component {
  handleClick = step => e => {
    e.preventDefault();

    this.props.changeStep(step);
  };

  getStepClassName = step => {
    return classnames("step", {
      "is-active": this.props.steps[step].isActive,
      "is-completed": this.props.steps[step].isCompleted
    });
  };
  render() {
    const { steps } = this.props;
    return (
      <div className="steps mb-4">
        <style jsx>{`
            .steps {
              display: flex;
            }
            .step {
              position: relative;
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              flex-basis: 0;
              align-items: center;
            }
            .step:not(:first-child)::before {
              height: .2em;
              width: 100%;
              bottom: 0;
              left: -50%;
              top: 1rem;
              content: " ";
              display: block;
              position: absolute;
              background: #b5b5b5;
            }
            .step__marker {
              width: 35px;
              height: 35px;
              display: flex;
              align-items: center;
              border-radius: 50%;
              font-weight: 700;
              justify-content: center;
              background: #b5b5b5;
              color: #fff;
              border: 4px solid #fff;
              z-index: 1;
            }
            .step.is-completed:not(:first-child)::before {
              background: #f26120;
            }
            .step.is-completed .step__marker {
              background: #f26120;
              border: 4px solid #f26120;
            }
            .step.is-active:not(:first-child)::before {
              background: #f26120;
            }
            .step.is-active .step__marker {
              background: #19ddfe;
              border: 4px solid #f26120;
            }
            .step__title {
              font-weight: 700;
            }
        `}</style>
        {steps.map((step, index) => (
          <div key={step.name} className={this.getStepClassName(index)}>
            <div className="step__marker">{index + 1}</div>
            {/*<div className="step__title mt-1">{step.name}</div>*/}
          </div>
        ))}
      </div>
    );
  }
}

export default Steps;



// WEBPACK FOOTER //
// ./src/components/Steps.jsx