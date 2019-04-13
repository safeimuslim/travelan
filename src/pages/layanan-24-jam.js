import React from "react"
import mapSrc from '../images/map.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="w3-row-padding" id="about" style={{ margin: 20 }}>
      <div class="w3-col l4 12">
        <h3>Layanan 24 Jam</h3>
        <h4>Tiket Pesawat Murah</h4>
        <h6>
          Kenapa murah? Pada prinsipnya harga tiket pesawat ditentukan oleh dua kondisi musim peek sesion dan low sesion. Harga tiket pesawat murah juga bisa dibilang relatif pada masa kedua musim tersebut.
          <br />  
          Misalnya:
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
      {/* <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p> */}
      </div>
      <div class="w3-col l8 12">
        <img src={mapSrc} alt="mapSrc" class="w3-image w3-greyscale" style={{ width:'100%;' }} />
      </div>
    </div>
    
      <div class="w3-row-padding w3-large w3-center" style={{ margin: '32px 0' }}>
      <div class="w3-third"><i class="fa fa-map-marker w3-text-red"></i>
        <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/dir//Tatik+Tour+%26+Travel/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e7a211d8c30285b:0x374753471bdd2a33!2m2!1d111.04549899999999!2d-7.652533'>
          Jl. Matesih-Jatiyoso, Talesan, Matesih, Kabupaten Karanganyar, Jawa Tengah 57781
          </a>
      </div>
      <div class="w3-third"><i class="fa fa-phone w3-text-red"></i>
        <a target="_blank" rel="noopener noreferrer" href="tel:+62-878-6909-2223" itemprop="telephone">
          Phone: +62-878-6909-2223
        </a>
      </div>
      <div class="w3-third"><i class="fa fa-envelope w3-text-red"></i> Email: mail@mail.com</div>
    </div>

    <div class="w3-panel w3-red w3-leftbar w3-padding-32">
      <h6><i class="fa fa-info w3-deep-orange w3-padding w3-margin-right"></i>Layanan Online 24 Jam | Tiket Pesawat Domestik & Internasional, Kereta Api & Kapal Laut | Paket Tour | Travel Antar Kota | Antar Jemput Bandara dan Stasiun'</h6>
    </div>
  </Layout>
)

export default IndexPage
