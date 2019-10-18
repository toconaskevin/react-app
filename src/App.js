import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={process.env.PUBLIC_URL + 'MYtineraryLogo.png'} className="Logo-header" alt="logo" />
      </header>
      <body>
        <p className="Normal-font">
          Find your perfect trip, designed by<br></br>
          insiders who know and love their cities.
        </p> 
        <br></br>
        <h2>Start browsing</h2>
        <img src={process.env.PUBLIC_URL + 'circled-right-2.png'} className="Start-btn"/>
        <br></br>
        <br></br>
        <footer>
          <p className="Normal-font">
            Want to build your own MYtinerary?
          </p>
          <div className="Footer-links">
            <div>
              <a href="#" className="Normal-font">Log in</a>
            </div>
            <div>
              <a href="#" className="Normal-font">Create Account</a>
            </div>
          </div>
          <br></br>
          <br></br>
          <a href="#" muted><img src={process.env.PUBLIC_URL + 'homeIcon.png'} className="Home-btn"/></a>
        </footer>
      </body>
    </div>
  );
}

export default App;
