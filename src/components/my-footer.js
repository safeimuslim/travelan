import React, { Component } from 'react'

class MyFooter extends Component { 
  render() { 
    return (
      <footer className="w3-container w3-center w3-opacity w3-margin-bottom">
        <h5>Find Us On</h5>
        <div className="w3-xlarge w3-padding-16">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>Developed by <a href="https://github.com/safeimuslim" target="_blank" rel="noopener noreferrer" className="w3-hover-text-green">safeimuslim</a></p>
      </footer>
    )
  }
}

export default MyFooter