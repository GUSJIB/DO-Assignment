import React from 'react';
import profile from '../assets/images/me.jpg';
import bg from '../assets/images/bg.jpg';
import MdMail from 'react-ionicons/lib/MdMail'
import MdPhonePortrait from 'react-ionicons/lib/MdPhonePortrait'

export class Me extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  }

  componentDidMount = async () => {

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto">
          <div className="name">
            <h3 className="title text-primary">Chaiwat Chaichan</h3>
            <h5 className="text-secondary">Full Stack Developer</h5>
            <div className="row">
              <p className="col-md-6 text-info"><MdMail /> chachaic@scg.com</p>
              <p className="col-md-6 text-info"><MdPhonePortrait /> 087-5482377</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="skills">
                <h6>Skills</h6>
                <ul className="list">
                  <li className="list-item">Javascript (NodeJS, React, Angular, etc)</li>
                  <li className="list-item">TypeScript</li>
                  <li className="list-item">Java (Spring Boot)</li>
                  <li className="list-item">PHP (Laravel, CodeIgniter)</li>
                  <li className="list-item">MySQL, MSSQL</li>
                </ul>
              </div>
              <div className="experience">
                <h6>Education</h6>
                <ul className="list">
                  <li className="list-item">Dhurakij pundit university —​ ​Bechelor degree</li>
                  <li className="list-item">Nawamintrachinuthit Benjamarachalai, —​ High School</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="experience">
                <h6>Experience</h6>
                <ul className="list">
                  <li className="list-item">Full Stack Developer<span className="text-info">@</span>Nexter Digitals</li>
                  <li className="list-item">Senior Developer<span className="text-info">@</span>Lansing Business System</li>
                  <li className="list-item">Web Developer<span className="text-info">@</span>Firecreek Web Development</li>
                  <li className="list-item">Software Architect<span className="text-info">@</span>2C2P Thailand</li>
                </ul>
              </div>
              <div className="experience">
                <h6>Languages</h6>
                <ul className="list">
                  <li className="list-item">Thai: Good</li>
                  <li className="list-item">English: Fair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ml-auto mr-auto order-first">
          <div className="profile">
            <div className="avatar">
              <img src={profile}
                className="img-raised img-fluid" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Me;
