import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

export const Landing =({isAuth})=>  {
   if(!isAuth)
   {
     return <Redirect to="/login" />
   }
        return (
            <Fragment>
                <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
            </Fragment>
        )
    }

Landing.propTypes = {
  isAuth:PropTypes.bool
}

const mapStatetoProps = state =>({
  isAuth:state.auth.isAuth
})
export default connect(mapStatetoProps,{}) (Landing)
