import React, { useState ,Fragment} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../store/actions/auth'
 import { Redirect } from 'react-router-dom'
const Login =({ login,isAuth })  =>{

      const [formData,setFormData] = useState({
        email:'',
        password:''
      })
      const {email,password} = formData
      const onChange = e=> setFormData({...formData,[e.target.name]:e.target.value})
      const onsubmit = (async e=>{
          e.preventDefault();
          login({email:email,password:password})
      })
      if(isAuth)
      {
        return <Redirect to="/" />
      }
      
        return (
            <Fragment>
                <section className="container">
                  
      <div className="alert alert-danger">
        Invalid credentials 
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" >
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            
            onChange={(e)=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e)=>onChange(e)}
          />
        </div>
        <button className="btn btn-primary"  onClick={e=>onsubmit(e)} >Login</button>
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
            </Fragment>
          )
    
}

const mapStatetoProps = state =>({
  isAuth:state.auth.isAuth
})

Login.propTypes = {
  login:PropTypes.func.isRequired,
  isAuth:PropTypes.bool

}

export default connect(mapStatetoProps,{login})(Login)
