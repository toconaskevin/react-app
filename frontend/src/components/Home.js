import React, { Component } from 'react';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import { area } from './area';

class Home extends Component {
  render() {
    return(
      <div style={area}>
        <body>
          <header>
            <img src={process.env.PUBLIC_URL + 'MYtineraryLogo.png'} className="Logo-header" alt="logo" />
          </header>
          <p className="text-center font-italic">
          Find your perfect trip, designed by insiders<br/>
          who know and love their cities.
          </p>
          <br/>
          <div className="d-flex justify-content-center">
              <img src={process.env.PUBLIC_URL + 'circled-right-2.png'} className="w-25" alt="button start"/>
          </div>
          <br/>
          <p>Popular MYtineraries</p>

          <Carousel/>
        </body>
      </div>
    )
  }
}

export default Home;