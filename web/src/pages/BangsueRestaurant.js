import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import axios from 'axios'

export class BangsueRestaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  }

  componentDidMount = async () => {
    if (!localStorage.getItem('restaurants')) {
      const response = await axios.get("http://localhost:3001/scg/restaurants-bangsue")
      if (response.data.status === 'OK') {
        this.setState({ data: response.data.results})
        localStorage.setItem('restaurants', JSON.stringify(response.data.results))
      }
    } else {
      this.setState({ data: JSON.parse(localStorage.getItem('restaurants')) })
    }
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <h6 className="pb-md-6 display-4">BangSue Restaurant JSON</h6>
        <div className="col-md-12">
          <JSONPretty id="json-pretty" data={this.state.data}></JSONPretty>
        </div>
      </div>
    )
  }
}

export default BangsueRestaurant;
