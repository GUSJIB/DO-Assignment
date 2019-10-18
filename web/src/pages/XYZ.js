import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export class XYZ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  }

  componentDidMount = () => {
    if (!localStorage.getItem('XYZ')) {
      let input = ['X', 5, 9, 15, 23, 'Y', 'Z']
      let result = {}
      input.map((item, index) => {
        if (typeof item === 'string') {
          if (index <= 1) {
            let nextIndex = input[index + 1]
            let next2Index = input[index + 2]
            let range = next2Index - nextIndex
            result[item] = nextIndex - (range - 2)
          } else {
            let prevIndex = input[index - 1]
            let prev2Index = input[index - 2]
            let range = prevIndex - prev2Index
            result[item] = prevIndex + (range + 2)
          }
          input[index] = result[item]
        }
      });
      this.setState({ data: result })
      localStorage.setItem('XYZ', JSON.stringify(result))
    } else {
      this.setState({ data: JSON.parse(localStorage.getItem('XYZ')) })
    }
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <h6 className="pb-md-4 display-4">Find X, Y, Z from ['X', 5, 9, 15, 23, 'Y', 'Z']</h6>
        <div className="col-md-6">
          <JSONPretty id="json-pretty" data={this.state.data}></JSONPretty>
        </div>
      </div>
    )
  }
}

export default XYZ;
