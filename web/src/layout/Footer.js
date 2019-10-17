import React from 'react';

export class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://www.facebook.com/gusjib.j">Chaiwat Chaichan</a>.</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
