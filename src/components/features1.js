import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImgAlt: 'Vulnerability Scanning Icon',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1606978297876-ca1d2a75e631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDc4NzY2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: 'Scan websites for vulnerabilities and security issues.',
  feature2ImgAlt: 'Website Scanning Icon',
  feature1Description: 'Discover all subdomains associated with a website.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1661866724675-4d375e3ec856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDc4NzY2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Subdomain Enumeration',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1663587482482-444c06006d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDc4NzY2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: 'Initiate scans on websites to identify subdomains.',
  feature2Title: 'Website Scanning',
  feature1ImgAlt: 'Subdomain Enumeration Icon',
  feature3Title: 'Vulnerability Scanning',
}

Features1.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features1
