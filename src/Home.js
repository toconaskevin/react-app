import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row text-center text-lg-left">
                                <div class="col-lg-6 col-md-4 col-6">
                                    <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-4 col-6">
                                    <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-4 col-6">
                                    <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-4 col-6">
                                    <a href="#" class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>

        </body>
    </div>
)