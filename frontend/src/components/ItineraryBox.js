import React, { Component } from 'react'

export default class ItineraryBox extends Component {
    render() {

        const itineraries = this.props.itineraries;

        return (
            <div>
                <ul>
                {itineraries.map((itinerary, id) => (
                  <li key={id}>{itinerary.author} - {itinerary.rating}</li>
                ))}
                </ul>
            </div>
        )
    }
}