import React, { Component } from 'react';


class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/cities/all")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  
  render() {
    return(
      <ul>
        {this.state.data.map(quote => <li key={quote}>{quote}</li>)}
      </ul>
        
    )
  }

}

export default Cities;