import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content">
          <h1 className="hero7-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero7-text7">
                  Enhance Your Website Security with Bug Hunters Platform
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero7-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero7-text8">
                  Protect your website from vulnerabilities and cyber threats
                  with our comprehensive security services.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero7-actions">
            <div className="hero7-container1">
              <button className="thq-button-filled hero7-button1">
                <span className="hero7-text3 thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero7-text6">
                        Choose Your Pricing Plan
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="hero7-container2">
              <button className="thq-button-outline hero7-button2">
                <span className="hero7-text4 thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero7-text5">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero7.defaultProps = {
  action2: undefined,
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

Hero7.propTypes = {
  action2: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero7
