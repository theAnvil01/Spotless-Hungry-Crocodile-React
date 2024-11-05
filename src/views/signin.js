import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SignIn10 from '../components/sign-in10'
import './signin.css'

const Signin = (props) => {
  return (
    <div className="signin-container">
      <Helmet>
        <title>signin - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="signin - Spotless Hungry Crocodile"
        />
      </Helmet>
      <Navbar></Navbar>
      <SignIn10
        action1={
          <Fragment>
            <span className="signin-text1">Sign in</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="signin-text2">Create an account</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="signin-text3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="signin-text4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="signin-text5">Sign in to your account</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="signin-text6">Create an account</span>
          </Fragment>
        }
      ></SignIn10>
    </div>
  )
}

export default Signin
