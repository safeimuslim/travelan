import React, { Component } from 'react'
import londonSrc from '../images/london.jpg'; // with import

const routeTravel = [
  {
    from: 'Jakarta',
    to: ['Solo']
  },
  {
    from: 'Jogja',
    to: ['Batang', 'Kajen', 'Pekalongan', 'Purwokerto', 'Weleri', 'Wonosobo']
  },
  {
    from: 'Kajen',
    to: ['Jogja', 'Semarang']
  },
  {
    from: 'Pekalongan',
    to: ['Cirebon', 'Jogja', 'Jakarta', 'Semarang', 'Solo']
  },
  {
    from: 'Pemalang',
    to: ['Solo']
  },
  {
    from: 'Purwokerto',
    to: ['Jogja', 'Solo']
  },
  {
    from: 'Salatiga',
    to: ['Pekalongan']
  },
  {
    from: 'Semarang',
    to: ['Purwokerto', 'Wonosobo']
  },
  {
    from: 'Solo',
    to: ['Cirebon', 'Juanda', 'Malang', 'Pekalongan(Kajen)', 'Banjarnegara', 'Jakarta', 'Kudus', 'Pekalongan', 'Pemalang', 'Ponorogo', 'Puwokerto', 'Semarang', 'Surabaya', 'Tanggerang', 'Tegal', 'Temanggung', 'Wonosobo']
  },
  {
    from: 'Tegal',
    to: ['Solo']
  },
  {
    from: 'Temanggung',
    to: ['Solo']
  },
  {
    from: 'Wonosolo',
    to: ['Solo', 'Semarang']
  }
]

class MyHeader extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      departureSelected: '',
      routeDestinationBydepartureSelected: [],
      destinationSelected: '',
      warning: '',
    }
  }
  componentDidMount() {
    document.getElementsByClassName("tablink")[0].click();
  }

  openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }

  selectRouteDeparture({ target }) {
    const routeDestinationBydepartureSelected = routeTravel.filter((rt) => rt.from === target.value )[0].to
    this.setState({ departureSelected: target.value, routeDestinationBydepartureSelected })
  }

  selectRouteDestination({ target }) { 
    this.setState({ destinationSelected: target.value })
  }

  submit() {
    const { departureSelected, destinationSelected } = this.state
    if (departureSelected && destinationSelected) {
      const message = `Hallo travelan! Saya mau pesan travel dari ${departureSelected} ke ${destinationSelected}.`
      this.setState({ warning: '' }, () => {
        window.open(`https://api.whatsapp.com/send?phone=6282329230000&text=${message}`, '_blank');
      })
    } else { 
      this.setState({ warning: 'Pilih lokasi keberangkatan dan tujuan dengan benar.' })
    }
  }

  warningContent(warning) { 
    return (
      <div className="w3-panel w3-red">
        {/* <h3>Pesan!</h3> */}
        <p>{warning}</p>
      </div>
    )
  }

  render() {
    return (
      // Header
      <header className="w3-display-container w3-content w3-hide-small" style={{ maxWidth: '1500px' }}>
        <img className="w3-image" src={londonSrc} alt="London" width="1500" height="700" />
        <div className="w3-display-middle" style={{ width: '65%' }}>
          <div className="w3-bar w3-black">
            <button className="w3-bar-item w3-button tablink" onClick={(event) => this.openLink(event, 'Flight')}><i className="fa fa-plane w3-margin-right"></i>Travel</button>
            {/* <button className="w3-bar-item w3-button tablink" onClick={(event) => this.openLink(event, 'Hotel')}><i className="fa fa-bed w3-margin-right"></i>Hotel</button> */}
            {/* <button className="w3-bar-item w3-button tablink" onClick={(event) => this.openLink(event, 'Car')}><i className="fa fa-car w3-margin-right"></i>Rental</button> */}
            </div>
            
          <div id="Flight" className="w3-container w3-white w3-padding-16 myLink">
            <h3>Travel the world with us</h3>
            <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
              <div className="w3-half">
                <label>Keberangkatan</label>
                <select className="w3-select" name="option" value={this.state.departureSelected} onChange={(e)=> this.selectRouteDeparture(e)}>
                  <option value='' disabled>Pilih lokasi keberangkatan</option>
                  {routeTravel.map((rt, index) => <option key={index} value={rt.from}>{rt.from}</option>)}
                </select>
              </div>
              <div className="w3-half">
                <label>Tujuan</label>
                <select className="w3-select" name="option" value={this.state.destinationSelected} onChange={(e)=> this.selectRouteDestination(e)}>
                  <option value='' disabled>Pilih lokasi tujuan</option>
                  {this.state.routeDestinationBydepartureSelected.map((value, index) => <option key={index} value={value}>{value}</option>)}
                </select>
              </div>
            </div>
            { (this.state.warning) && this.warningContent(this.state.warning) }
            <p><button onClick={() => this.submit()} className="w3-button w3-dark-grey">Booking Now</button></p>
          </div>
        </div>
      </header>
    ) 
  }
}


export default MyHeader