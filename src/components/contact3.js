import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div className="contact3-contact20 thq-section-padding">
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact3-text26">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact3-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact3-text27">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="contact3-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact3-text21">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact3-row">
          <div className="contact3-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact3-contact-info1">
              <div className="contact3-content3">
                <h3 className="contact3-text13 thq-heading-3">Email</h3>
                <p className="contact3-text14 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact3-text20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact3-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact3-text28">
                      info@bughuntersplatform.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact3-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact3-contact-info2">
              <div className="contact3-content5">
                <h3 className="contact3-text15 thq-heading-3">Phone</h3>
                <p className="contact3-text16 thq-body-large">
                  {props.content4 ?? (
                    <Fragment>
                      <span className="contact3-text25">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact3-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact3-text29">+123-456-7890</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact3-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact3-contact-info3">
              <div className="contact3-content7">
                <h3 className="contact3-text17 thq-heading-3">Office</h3>
                <p className="contact3-text18 thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact3-text24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <span className="contact3-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact3-text19">
                      123 Bug Hunters Street, Cyber City, Techland
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  address1: undefined,
  content3: undefined,
  content1: undefined,
  content5: undefined,
  content4: undefined,
  content2: undefined,
  heading1: undefined,
  email1: undefined,
  phone1: undefined,
}

Contact3.propTypes = {
  address1: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  content5: PropTypes.element,
  content4: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  email1: PropTypes.element,
  phone1: PropTypes.element,
}

export default Contact3
