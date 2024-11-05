import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound1 = (props) => {
  return (
    <div className="not-found1-container1">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <h3 className="not-found1-text1">OOPS! PAGE NOT FOUND</h3>
      <div className="not-found1-container2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHN1cnByaXNlZCUyMGNhdHxlbnwwfHx8fDE3MzA4MjQ4NTF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="not-found1-image"
        />
      </div>
      <div className="not-found1-container3">
        <h2 className="not-found1-text2">
          <span>But bugs can be , try harder and stay curious.</span>
          <br></br>
          <br></br>
        </h2>
      </div>
    </div>
  )
}

export default NotFound1
