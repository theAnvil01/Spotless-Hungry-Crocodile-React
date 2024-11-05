import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq11.css'

const FAQ11 = (props) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div className="faq11faq8 thq-section-padding">
      <div className="faq11-max-width thq-section-max-width">
        <div className="thq-section-max-width thq-flex-column faq11-container10">
          <div className="faq11-section-title">
            <div className="faq11-content1">
              <h2 className="faq11-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="faq11-text30">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="faq11-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="faq11-text23">
                      The bug-hunting platform offers website security services,
                      vulnerability scanning, and subdomain enumeration to
                      enhance cybersecurity measures.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="faq11-list">
            <div className="faq11-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq11-trigger1"
              >
                <p className="faq11-faq1-question1 thq-body-large">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq11-text19">
                        What services does the bug-hunting platform offer?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq11-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon10">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon12">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq11-container13">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="faq11-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq11-trigger2"
              >
                <p className="faq11-faq2-question1 thq-body-large">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq11-text29">
                        What are the pricing plans available?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq11-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon14">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon16">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq11-container16">
                  <span className="thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="faq11-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq11-trigger3"
              >
                <p className="faq11-faq2-question2 thq-body-large">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq11-text22">
                        How can I access the reports?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq11-icons-container3">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon18">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon20">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq11-container19">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="faq11-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq11-trigger4"
              >
                <p className="faq11-faq2-question3 thq-body-large">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq11-text28">
                        Is support available around the clock?
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq11-icons-container4">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon22">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon24">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq11-container22">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="faq11-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq11-trigger5"
              >
                <p className="faq11-faq1-question2 thq-body-large">
                  {props.faq1Question1 ?? (
                    <Fragment>
                      <span className="faq11-text24">
                        Frequently Asked Questions
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="faq11-icons-container5">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon26">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq11-icon28">
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq11-container25">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="faq11-content2 thq-flex-column">
          <div className="faq11-content3">
            <h2 className="faq11-text17 thq-heading-2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq11-text20">Still have a question?</span>
                </Fragment>
              )}
            </h2>
            <p className="faq11-text18 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="faq11-text25">
                    <span>
                      Users can choose from different pricing plans based on
                      their needs and budget.
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
          <button className="thq-button-filled">
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="faq11-text21">Contact</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ11.defaultProps = {
  faq1Question: undefined,
  heading2: undefined,
  action: undefined,
  faq3Question: undefined,
  content1: undefined,
  faq1Question1: undefined,
  content2: undefined,
  faq4Question: undefined,
  faq2Question: undefined,
  heading1: undefined,
}

FAQ11.propTypes = {
  faq1Question: PropTypes.element,
  heading2: PropTypes.element,
  action: PropTypes.element,
  faq3Question: PropTypes.element,
  content1: PropTypes.element,
  faq1Question1: PropTypes.element,
  content2: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Question: PropTypes.element,
  heading1: PropTypes.element,
}

export default FAQ11
