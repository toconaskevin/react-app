import React from 'react';
import { Carousel } from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'

export const Home = () => (
    <div>
        Home
        <body>
            <p className="text-center font-italic">
            Find your perfect trip, designed by insiders<br/>
            who know and love their cities.
            </p>
            <br/>
            <div className="d-flex justify-content-center">
                <img src={process.env.PUBLIC_URL + 'circled-right-2.png'} className="w-25"/>
            </div>
            <br/>
            <p>Popular MYtineraries</p>

            <Carousel/>

        </body>
    </div>
)