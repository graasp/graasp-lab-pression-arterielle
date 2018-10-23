import React, { Component } from 'react';
import MainView from '../components/MainView';

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      intensity: 'moyen',
    };
    this.handleSection = this.handleSection.bind(this);
  }

  handleSection = () => {
    const { addClass } = this.state;
    this.setState({
      addClass: !addClass,
    });
  };

  render() {
    const { addClass, intensity } = this.state;
    const pressionBottomClass = ['pression'];
    const sices = ['sices'];
    const heartClass = ['heart'];
    if (addClass) {
      pressionBottomClass.push('pression-enable-nerf-bottom');
      heartClass.push('heart-enable');
      sices.push('sices-enable');
    }
    return (
      <div className="App pt-5">
        <MainView
          pressionBottomClass={pressionBottomClass}
          sices={sices}
          heartClass={heartClass}
          intensity={intensity}
          handleSection={this.handleSection}
        />
      </div>
    );
  }
}

export default StudentView;
