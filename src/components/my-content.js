import React, { Component } from 'react'
import travelan1Src from '../images/travelan-1.jpeg';
import travelan2Src from '../images/travelan-2.jpeg';
import travelan3Src from '../images/travelan-3.jpeg';
import travelan4Src from '../images/travelan-4.jpg';
import mapSrc from '../images/map.jpg'
import Order from './order'

class MyContent extends Component { 
  toggleGrid() { 
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
      x.className = "w3-row-padding";
    } else { 
      x.className = x.className.replace("w3-row-padding", "w3-row");
    }
  }

  render() {
    return (
      <div className="w3-content" style={{ maxWidth: '1100px' }}>
        <Order />
        <div className="w3-container w3-content w3-center w3-padding-32" style={{ maxWidth:'800px' }} id="band">
          <h1 className="w3-xxxlarge w3-text-deep-orange w3-hover-text-orange">TRAVELAN</h1>
          <p>Kami adalah Biro Perjalanan dan wisata, Agen Resmi Tiket Pesawat Domestik/Internasional, Kerata Api dan Kapal Laut serta Agen Travel</p>

          <p className="">
            <button className="w3-button w3-grey w3-round-small" onClick={() => this.toggleGrid()}>
              Toggle Grid Padding
            </button>
          </p>
        </div>
        <div className="w3-container">
            <div className="w3-row-padding" id="myGrid" style={{ marginBottom: '10px' }}>
              <div className="w3-third">
                <img className='' src={travelan1Src} alt="travelan1Src" style={{ width: '100%' }} />
                <img className='' src={travelan2Src} alt="travelan2Src" style={{ width: '100%' }} />
              </div>
              <div className="w3-third">
                <img className='' src={travelan3Src} alt="travelan3Src" style={{ width: '100%' }} />
                <img className='' src={travelan4Src} alt="travelan4Src" style={{ width: '100%' }} />
            </div>
            <div className="w3-third">
                <img className='' src={travelan4Src} alt="travelan4Src" style={{ width: '100%' }} />
                <img className='' src={travelan2Src} alt="travelan2Src" style={{ width: '100%' }} />
              </div>
            </div>
        </div>

        <div className="w3-row-padding" id="layanan-24-jam" style={{ margin: 20 }}>
          <div className="w3-col l12 12">
            <h1 className="w3-text-deep-orange">TIKET MURAH</h1>
            <h6>
              Kenapa murah? Pada prinsipnya harga tiket pesawat ditentukan oleh dua kondisi musim peek sesion dan low sesion. Harga tiket pesawat murah juga bisa dibilang relatif pada masa kedua musim tersebut. Misalnya:
              <br />
              Pada mas low sesion untuk rute penerbangan kelas LCC (low Cost Carier) solo-jakarta harga promo terendah Rp. 320.000. Tetapi tidak demikian pada masa peek sesion dimana biasanya harga promo lebih sedikit atau sama sekali tidak dibuka dan dibatasi pada kelas harga ekonomi Rp.440.000, Apakah ini dikatakan mahal? tentunya tidak karena ini pada masa liburan atau peek sesion.
              <br />
              Maka dari hal tersebut kami memberikan pelayanan yang berbeda untuk mendapatkan harga tiket pesawat Murah.
              <br />
              <ol>
                <li>Pemesanan Tiket Pesawat dari Limit Booking tercepat 1 jam hingga 7 hari.</li>
                <li>Limit Booking bisa diperpanjang Apabila masih ada harga yang sama.</li>
                <li>Apabila dalam masa Pemesanan masih dalam Limit Booking dan harga pemesanan turun dari harga awal maka harga mengikuti harga yang termurah.</li>
              </ol>  
            </h6>
            <div className="w3-panel w3-red w3-padding-32">
              <h6><i className="fa fa-info w3-deep-orange w3-padding w3-margin-right"></i>Layanan Online 24 Jam | Tiket Pesawat Domestik & Internasional, Kereta Api & Kapal Laut | Paket Tour | Travel Antar Kota | Antar Jemput Bandara dan Stasiun'</h6>
            </div>
          {/* <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p> */}
          </div>
          <div className="w3-col l12 12">
            <img src={mapSrc} alt="mapSrc" className="w3-image w3-greyscale" style={{ width:'100%' }} />
          </div>
        </div>
{/* 
        <div className="w3-container">
          <div className="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
            <h2>Get the best offers first!</h2>
            <p>Join our newsletter.</p>
            <label>E-mail</label>
            <input className="w3-input w3-border" type="text" placeholder="Your Email address" />
            <button type="button" className="w3-button w3-red w3-margin-top">Subscribe</button>
          </div>
        </div> */}
        
        {/* <div className="w3-container">
          <h2>Contact</h2>
          <p>Let us book your next trip!</p>
          <i className="fa fa-map-marker" style={{ width:'30px' }}></i> Chicago, US<br />
          <i className="fa fa-phone" style={{ width:'30px' }}></i> Phone: +00 151515<br />
          <i className="fa fa-envelope" style={{ width:'30px' }}> </i> Email: mail@mail.com<br />
          <form action="/action_page.php" target="_blank">
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message" /></p>
            <p><button className="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
          </form>
        </div> */}
        
      </div>
    )
  }
}

export default MyContent