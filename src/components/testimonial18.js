import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial18.css'

const Testimonial18 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial18-max-width thq-section-max-width">
        <div className="testimonial18-container1 thq-grid-2">
          <div className="testimonial18-section-title">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial18-text25">
                    Customer Testimonials
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial18-text27">
                    We have been using the bug-hunting platform for a year now,
                    and it has significantly improved our cybersecurity
                    measures. The reports are detailed and easy to understand,
                    making it a valuable tool for our team.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial18-container2">
              <button
                type="button"
                className="thq-button-filled testimonial18-button1"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="testimonial18-text32">
                        Primary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button
                type="button"
                className="thq-button-outline testimonial18-button2"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="testimonial18-text29">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="testimonial18-content">
            <div className="testimonial18-column1 thq-card">
              <div className="testimonial18-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-text12 thq-body-small">
                {props.review1 ?? (
                  <Fragment>
                    <span className="testimonial18-text26">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Suspendisse varius enim in eros elementum tristique.
                      Duis cursus, mi quis viverra ornare.&quot;
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar1">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial18-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content1">
                  <span className="testimonial18-text13 thq-body-small">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="testimonial18-text30">
                          Alice Johnson
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text14 thq-body-small">
                    {props.author1Position ?? (
                      <Fragment>
                        <span className="testimonial18-text22">
                          CEO at Tech Co.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column2 thq-card">
              <div className="testimonial18-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-text15 thq-body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="testimonial18-text23">
                      The platform&apos;s scanning services are top-notch. We
                      were able to identify vulnerabilities that we were
                      previously unaware of. The support team is also very
                      responsive and helpful.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar2">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial18-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content2">
                  <span className="testimonial18-text16 thq-body-small">
                    {props.author2 ?? (
                      <Fragment>
                        <span className="testimonial18-text34">Bob Smith</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text17 thq-body-small">
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="testimonial18-text33">
                          CTO at Security Firm
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column3 thq-card">
              <div className="testimonial18-stars3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-text18 thq-body-small">
                {props.review3 ?? (
                  <Fragment>
                    <span className="testimonial18-text35">
                      I highly recommend this platform to anyone looking to
                      enhance their website security. The subdomain
                      identification feature is particularly impressive and has
                      helped us secure our online assets.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar3">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial18-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content3">
                  <span className="testimonial18-text19 thq-body-small">
                    {props.author3 ?? (
                      <Fragment>
                        <span className="testimonial18-text24">Eva Brown</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text20 thq-body-small">
                    {props.author3Position ?? (
                      <Fragment>
                        <span className="testimonial18-text37">
                          Head of IT at Finance Corp.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column4 thq-card">
              <div className="testimonial18-stars4">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="testimonial18-review4 thq-body-small">
                {props.review4 ?? (
                  <Fragment>
                    <span className="testimonial18-text28">
                      As a security analyst, I rely on accurate and reliable
                      tools for my work. This platform has exceeded my
                      expectations with its precision in detecting
                      vulnerabilities. It&apos;s a must-have for any
                      cybersecurity professional.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar4">
                <img
                  alt={props.author4Alt}
                  src={props.author4Src}
                  className="testimonial18-author41 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content4">
                  <span className="testimonial18-author42 thq-body-small">
                    {props.author4 ?? (
                      <Fragment>
                        <span className="testimonial18-text31">David Lee</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="testimonial18-text21 thq-body-small">
                    {props.author4Position ?? (
                      <Fragment>
                        <span className="testimonial18-text36">
                          Security Analyst
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial18.defaultProps = {
  author1Position: undefined,
  review2: undefined,
  author3: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1622278801918-03ae631dd576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDgyMjE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Author Avatar',
  author3Alt: 'Author Avatar',
  heading1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1583090758875-4dc2d02c6c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDgyMjE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  content1: undefined,
  review4: undefined,
  action2: undefined,
  author1Name: undefined,
  author4: undefined,
  author2Alt: 'Author Avatar',
  action1: undefined,
  author2Position: undefined,
  author2: undefined,
  review3: undefined,
  author4Alt: 'Author Avatar',
  author2Src:
    'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDgyMjE0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1464863979621-258859e62245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDgyMjE0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
}

Testimonial18.propTypes = {
  author1Position: PropTypes.element,
  review2: PropTypes.element,
  author3: PropTypes.element,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  heading1: PropTypes.element,
  author4Src: PropTypes.string,
  review1: PropTypes.element,
  content1: PropTypes.element,
  review4: PropTypes.element,
  action2: PropTypes.element,
  author1Name: PropTypes.element,
  author4: PropTypes.element,
  author2Alt: PropTypes.string,
  action1: PropTypes.element,
  author2Position: PropTypes.element,
  author2: PropTypes.element,
  review3: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.element,
  author1Src: PropTypes.string,
  author3Position: PropTypes.element,
}

export default Testimonial18
