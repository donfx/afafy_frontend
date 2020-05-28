import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class  HomePageNavBar extends Component {

  render() {
  return (
        <nav className="navbar  navbar-expand-md fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={""}>
                <img src="img/logo.png" alt="" />
                </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#Home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact Us</a>
                  </li>
                  <li className="nav-item">
                  
                    <Link className="btn btn-outline-light login" to={"login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-outline-light signup" to={"signup"}>Create Free Account</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> 
    )
    }
}

