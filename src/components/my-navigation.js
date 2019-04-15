import React, { Component } from 'react'
import { Link } from "gatsby"

class MyNavigation extends Component { 
  myFunction() {
    var x = document.getElementById("demo");
    if (x) { 
      if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
      } else { 
        x.className = x.className.replace(" w3-show", "");
      }
    }
  }

  // componentDidMount() { 
  //   if (window) { 
  //     // Change style of navbar on scroll
  //     window.onscroll = function() {myFunction()};
  //     function myFunction() {
  //       var navbar = document.getElementById("myNavbar")
  //       var navbarTop = document.getElementById("myNavbarTop")
  //         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //             navbar.className = "w3-bar w3-animate-top";
  //             navbarTop.className = "w3-container w3-top  w3-card w3-white"
  //         } else {
  //             navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
  //             navbarTop.className = "w3-container"
  //         }
  //     }
  //   }
  // }

  render() {
    return (
      <div className="w3-top w3-white w3-large" style={{ zIndex: 1000 }}>
        <div className='w3-bar'>
          <Link to="/" className="w3-bar-item w3-button w3-red w3-hide-small"><i className="fa fa-home w3-margin-right"></i>BERANDA</Link>
          <a href="#kalender-libur" className="w3-bar-item w3-button w3-hide-small w3-hover-none w3-text-grey w3-hover-text-black">KALENDER LIBUR</a>
          <a href="#layanan-24-jam" className="w3-bar-item w3-button w3-hide-small w3-hover-none w3-text-grey w3-hover-text-black">TIKET MURAH</a>
          <a href="#kontak" className="w3-bar-item w3-button w3-hide-small w3-hover-none w3-text-grey w3-hover-text-black">KONTAK</a>
          <a href="/" className="w3-bar-item w3-button w3-left w3-hide-large w3-hide-medium w3-hover-none w3-text-deep-orange w3-hover-text-orange w3-large w3-animate-left">BERANDA</a>
          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium w3-hover-none w3-text-deep-orange w3-hover-text-orange w3-large" onClick={this.myFunction}>&#9776;</a>
        </div>
        
        <div id="demo" className="w3-bar-block w3-hide w3-hide-large w3-hide-medium w3-animate-right" style={{ textTransform: 'uppercase', maxWidth: 960, margin: '0 auto' }}>
          <a href="#kalender-libur" className="w3-bar-item w3-button w3-mobile" onClick={this.myFunction}>Kalender Libur</a>
          <a href="#layanan-24-jam" className="w3-bar-item w3-button w3-mobile" onClick={this.myFunction}>Tiket Murah</a>
          <a href="#kontak" className="w3-bar-item w3-button w3-mobile" onClick={this.myFunction}>Kontak</a> 
        </div>

      </div>
    )
  }
}


export default MyNavigation