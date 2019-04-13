import React, { Component } from 'react'
import { Link } from "gatsby"

class MyNavigation extends Component { 

  render() {
    return (
      <div className="w3-bar w3-white w3-large">
        <Link to="/" className="w3-bar-item w3-button w3-red w3-mobile"><i className="fa fa-home w3-margin-right"></i>Beranda</Link>
        {/* <Link to="/kalender-libur" className="w3-bar-item w3-button w3-mobile">Kalender Libur</Link>
        <Link to="/layanan-24-jam" className="w3-bar-item w3-button w3-mobile">Layanan Online 24 Jam</Link> */}
        <a href="#kalender-libur" className="w3-bar-item w3-button w3-mobile">Kalender Libur</a>
        <a href="#layanan-24-jam" className="w3-bar-item w3-button w3-mobile">Tiket Murah</a>
        <a href="#kontak" className="w3-bar-item w3-button w3-mobile">Kontak</a>
      </div>
    )
  }
}


export default MyNavigation