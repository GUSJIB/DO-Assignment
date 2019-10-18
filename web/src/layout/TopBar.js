import React from 'react';
import logo from '../assets/images/logo.jpg'

export class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Chaiwat Chaichan</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/xyz">XYZ</a>
          <a className="p-2 text-dark" href="/bangsue-restaurant">BangSue Restaurant JSON</a>
        </nav>
        <a className="btn btn-outline-primary" href="/me">
          Profile
        </a>
      </div>
    )
  }
}

export default TopBar;
