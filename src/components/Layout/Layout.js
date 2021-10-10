import React,{Fragment, useState,useEffect}  from 'react'
import { connect } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logout } from '../../store/actions/auth'
const Layout = ({logout,auth:{isAuth,loading,user}}) => {
  
  const Logout = ()=>
   {
     logout()
   }
   
    const authLinks = (
      <ul>
      {/* <li >{user.email}</li> */}
      <li><a href="profiles.html" >Developers</a></li>
      <li ><a onClick={e=>Logout(e)} href="#">Logout</a></li>
      <li ><Link to="/dashboard" >Dashboard </Link></li>
    </ul>
     )

   
   
   const guestLinks = (
    <ul>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
   )
    
    return (
        <Fragment>
            <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> DevConnector</a>
      </h1>
      {!loading&&(<Fragment>{isAuth ? authLinks:guestLinks}</Fragment>)}
    </nav>
        </Fragment>
    )}

Layout.propTypes = {
  logout:PropTypes.func.isRequired,
 auth:PropTypes.object,
 
}

const mapStatetoProps = state =>({
  auth:state.auth,
  
})
export default connect(mapStatetoProps,{logout})(Layout)
