import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import FullCalendar from 'fullcalendar-reactwrapper';
// import events from '../utils/events';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="w3-row-padding" id="about" style={{ margin: 20 }}>
      {/* <FullCalendar
              id = "your-custom-ID"
          header = {{
              left: 'prev,next today myCustomButton',
              center: 'title',
              right: 'month,basicWeek,basicDay'
          }}
          defaultDate={new Date()}
          navLinks= {true} // can click day/week names to navigate views
          editable= {true}
          eventLimit= {true} // allow "more" link when too many events
          events = {events}	 */}
      />
    </div>
  </Layout>
)

export default IndexPage
