import React, { Component } from 'react'
class Kontak extends Component { 
  render() { 
    return (
      <div className="w3-display-container" id="kontak" style={{ padding: 10, marginTop: 0 }}>
         <div className="w3-container w3-content w3-center">
            <h1 className="w3-text-deep-orange">HUBUNGI KAMI</h1>
            <div className="w3-row-padding">
              <div className="w3-third">
                <div className="">
                  <h5>KONTAK</h5>
                  <p className="w3-opacity">0878-6909-2223 <br /> 0813-9362-8933</p>
                  <a href="tel:+62-878-6909-2223" target="_blank" rel="noopener noreferrer" className="w3-button w3-red w3-margin-top w3-round-xxlarge">Telepon</a>
                </div>
              </div>
              <div className="w3-third">
                <div className="">
                  <h5>ALAMAT</h5>
                  <p className="w3-opacity">Jl. Matesih-Jatiyoso, Talesan, Matesih, Kabupaten Karanganyar, Jawa Tengah 57781</p>
                  <a target="_blank" href="https://www.google.com/maps/dir//Tatik+Tour+%26+Travel/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e7a211d8c30285b:0x374753471bdd2a33!2m2!1d111.04549899999999!2d-7.652533" rel="noopener noreferrer" className="w3-button w3-red w3-margin-top w3-round-xxlarge">Dapatkan petunjuk arah</a>
                </div>
              </div>
              <div className="w3-third">
              <div className="">
                <h5>JAM OPERASIONAL</h5>
                <p className="w3-opacity">
                  Setiap hari buka jam 08.00–17.00
                </p>
              </div>
            </div>
            </div>
          </div>
      </div>
    ) 
  }
}


export default Kontak