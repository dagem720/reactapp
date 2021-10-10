import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { setAlert } from '../../store/actions/actions'
import PropTypes from 'prop-types'
import { register } from '../../store/actions/auth'
import { Redirect } from 'react-router'
  const Register=({setAlert,register,isAuth}) =>{
   
    const [formData,setFormData] = useState({
      
            name:'',
            email:'',
            password:'',
            password2:''
    });
    const {name,email,password,password2} = formData;

     const onChange = e=> setFormData({...formData,[e.target.name]:e.target.value})
     const onSubmit = (async e=>{
         e.preventDefault();
         if(password!=password2)
          return  setAlert('password do not match','danger')
        const newUser = {
            email:formData.email,
            password:formData.password
        }
       
        register(newUser)
     })
        if(isAuth)
        {
          return <Redirect to='/'/>
        }
        return (
            <Fragment>
                <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" >
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" required  value={name} onChange={e=>onChange(e)}/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)}/>
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} onChange={e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2} onChange={e=>onChange(e)}
          />
        </div>
     
      </form>
      <button onClick = {e=>onSubmit(e)} className='btn btn-primary'>Submit</button>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
            </Fragment>
        )
    
}
Register.propTypes = {
  setAlert:PropTypes.func.isRequired,
  isAuth:PropTypes.bool
}

const mapStatetoProps = state =>({
  isAuth:state.auth.isAuth
})
export default connect(mapStatetoProps,{setAlert,register})(Register);
