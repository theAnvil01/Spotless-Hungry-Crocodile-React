import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className="footer1-footer1 thq-section-padding">
      <div className="footer1-max-width thq-section-max-width">
        <div className="footer1-content">
          <div className="footer1-newsletter">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer1-image1"
            />
            <span className="thq-body-small">
              Subscribe to our newsletter for the latest updates on new features
              and product releases.
            </span>
            <div className="footer1-actions">
              <div className="footer1-form">
                <div className="footer1-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer1-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer1-button">
                  <span className="thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="footer1-text10">Subscribe</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <span className="footer1-content2 thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="footer1-text24">
                      Stay up to date with our latest news and updates.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="footer1-links">
            <div className="footer1-column1">
              <strong className="thq-body-large footer1-column1-title">
                {props.column1Title ?? (
                  <Fragment>
                    <span className="footer1-text21">Company</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer1-footer-links1">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer1-text12">About Us</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link2 ?? (
                    <Fragment>
                      <span className="footer1-text26">Contact Us</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link3 ?? (
                    <Fragment>
                      <span className="footer1-text28">FAQs</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link4 ?? (
                    <Fragment>
                      <span className="footer1-text15">Blog</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link5 ?? (
                    <Fragment>
                      <span className="footer1-text23">
                        Plans &amp; Pricing
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="footer1-column2">
              <strong className="thq-body-large footer1-column2-title">
                {props.column2Title ?? (
                  <Fragment>
                    <span className="footer1-text14">Resources</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer1-footer-links2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link6 ?? (
                    <Fragment>
                      <span className="footer1-text19">Terms of Service</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link7 ?? (
                    <Fragment>
                      <span className="footer1-text22">Privacy Policy</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link8 ?? (
                    <Fragment>
                      <span className="footer1-text25">Cookies Policy</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link9 ?? (
                    <Fragment>
                      <span className="footer1-text20">Newsletter</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small"
                >
                  {props.link10 ?? (
                    <Fragment>
                      <span className="footer1-text16">Bug Bounty Program</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="footer1-column3">
              <strong className="thq-body-large footer1-social-link1-title">
                {props.socialLinkTitleCategory ?? (
                  <Fragment>
                    <span className="footer1-text11">Follow Us</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer1-social-links">
                <div className="footer1-link14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="thq-body-small">Facebook</span>
                </div>
                <div className="footer1-link15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="thq-body-small">Instagram</span>
                </div>
                <div className="footer1-link16">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <span className="thq-body-small">X</span>
                </div>
                <div className="footer1-link17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <span className="thq-body-small">LinkedIn</span>
                </div>
                <div className="footer1-link18">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                  <span className="thq-body-small">Youtube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer1-row">
            <span className="thq-body-small">
              {props.content3 ?? (
                <Fragment>
                  <span className="footer1-text17">
                    © 2023 BugHunter. All rights reserved.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="footer1-footer-links3">
              <span className="thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer1-text27">/privacy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer1-text13">/terms</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer1-text18">/cookies</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  action1: undefined,
  socialLinkTitleCategory: undefined,
  logoAlt: 'BugHunter Logo',
  link1: undefined,
  termsLink: undefined,
  column2Title: undefined,
  link4: undefined,
  link10: undefined,
  content3: undefined,
  cookiesLink: undefined,
  link6: undefined,
  link9: undefined,
  column1Title: undefined,
  link7: undefined,
  link5: undefined,
  content2: undefined,
  link8: undefined,
  link2: undefined,
  privacyLink: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link3: undefined,
}

Footer1.propTypes = {
  action1: PropTypes.element,
  socialLinkTitleCategory: PropTypes.element,
  logoAlt: PropTypes.string,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  column2Title: PropTypes.element,
  link4: PropTypes.element,
  link10: PropTypes.element,
  content3: PropTypes.element,
  cookiesLink: PropTypes.element,
  link6: PropTypes.element,
  link9: PropTypes.element,
  column1Title: PropTypes.element,
  link7: PropTypes.element,
  link5: PropTypes.element,
  content2: PropTypes.element,
  link8: PropTypes.element,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  logoSrc: PropTypes.string,
  link3: PropTypes.element,
}

export default Footer1
