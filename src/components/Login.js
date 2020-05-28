import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar'
import Footer from './Footer';


const loginContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '40px',
  paddingBottom: '40px',
}; 


export default class  Login extends Component {

  
  
  render() {

  return (
   <div style={loginContainer}>
        {/* <HomePageNavBar/> */}
      <form className="form-signin">
        <div className="text-center mb-4">
          <img className="mb-4" src="img/logo.png" alt="" width={100}  />
          
        </div>
        <div className="form-label-group">
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        </div>
        <div className="form-label-group">
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
 
      </form>
     {/* <Footer/> */}
     </div>
 

    )
    }
}

