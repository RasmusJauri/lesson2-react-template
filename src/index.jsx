/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <div>Hello!</div>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "tähän dataa"
    }
  }
  componentDidMount(){
    console.log("moi")
  fetch("https://weatherapp.eficode.fi/api/forecast?lat=60.1698509&lon=24.9247536")
   .then(result => result.json())
   .then((data) => {
    this.setState({data: JSON.stringify(data) })
   })
   .catch(error => console.log(error))
  }

  render() {
    return (
      this.state.data
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
