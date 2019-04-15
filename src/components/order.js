import React, { Component } from 'react'
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


class Order extends Component { 
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
    // document.getElementsByClassName("tablink")[0].click();
  }

  openLink(evt, linkName) {
    // var i, x, tablinks;
    // x = document.getElementsByClassName("myLink");
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablink");
    // for (i = 0; i < x.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    // }
    // document.getElementById(linkName).style.display = "block";
    // evt.currentTarget.className += " w3-red";
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
        window.open(`https://api.whatsapp.com/send?phone=6287869092223&text=${message}`, '_blank');
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
      <div className="w3-container w3-content w3-padding-32 w3-hide-large w3-hide-medium" style={{ marginTop: 30 }}>
        <div className="w3-white" style={{ padding: 10 }}>
          <div className="w3-row-padding">
            <h4>Kemana anda akan pergi ?</h4>
            <div className="w3-half">
              {/* <label>Keberangkatan</label> */}
              <select className="w3-select" name="option" value={this.state.departureSelected} onChange={(e)=> this.selectRouteDeparture(e)}>
                <option value='' disabled>Lokasi keberangkatan</option>
                {routeTravel.map((rt, index) => <option key={index} value={rt.from}>{rt.from}</option>)}
              </select>
            </div>
            <div className="w3-half">
              <label>&nbsp;</label>
              <select className="w3-select" name="option" value={this.state.destinationSelected} onChange={(e)=> this.selectRouteDestination(e)}>
                <option value='' disabled>Lokasi tujuan</option>
                {this.state.routeDestinationBydepartureSelected.map((value, index) => <option key={index} value={value}>{value}</option>)}
              </select>
            </div>

            <div className="w3-half">
              { (this.state.warning) && this.warningContent(this.state.warning) }
              <p><button onClick={() => this.submit()} className="w3-button w3-deep-orange">Booking Now</button></p>
            </div>
          </div>
         </div>
      </div>
    ) 
  }
}


export default Order