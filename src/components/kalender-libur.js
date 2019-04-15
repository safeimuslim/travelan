import React, { Component } from 'react'
import events from '../utils/events';

let FullCalendar, dayGridPlugin

class KalendarLibur extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      showCalendar: false
    }
  }

  componentDidMount() { 
    if (typeof window !== "undefined") {
      FullCalendar = require('@fullcalendar/react').default;
      dayGridPlugin = require('@fullcalendar/daygrid').default;
      this.setState({ showCalendar: true })
    }
  }
  render() {
    const { showCalendar } = this.state
    return (
      <div className="w3-display-container w3-white" id="kalender-libur" style={{ padding: '10px 10px 50px 10px' }}>
        <div className="w3-container w3-content">
          <h1 className="w3-text-deep-orange">KALENDER LIBUR</h1>
          {showCalendar && 
          <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}   events={events}/> }
        </div>
      
      </div>
    ) 
  }
}


export default KalendarLibur