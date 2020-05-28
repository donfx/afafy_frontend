import React, { Component } from 'react';


export default class  Footer extends Component {

  render() {
  return (
    <footer id="footer">
    <div className="container">
      <footer className>
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src="img/logo.png" alt="" width={70} />
            <small className="d-block mb-3 ">© Afafy 2020</small>
          </div>
          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
              <li><a className href="#">About</a></li>
              <li><a className href="#">Contact</a></li>
              <li><a className href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
              <li><a className href="#">Facebook</a></li>
              <li><a className href="#">Twitter</a></li>
              <li><a className href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <div className>Subscribe to our newsletter</div>
            <div className="d-flex">
              <input type="text" style={{display: 'inline', width: '80%'}} />
              <button type="button" style={{display: 'inline'}}>Send</button>
            </div>
          </div>
          <div className="col-6 col-md">
            101, Plot 414, Oregun Road, Ikeja, Lagos
          </div>
        </div>
      </footer>
    </div>
  </footer>

    )
    }
}

