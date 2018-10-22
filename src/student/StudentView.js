import React, { Component } from 'react';
import MainView from '../components/MainView';

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      intensity: 'moyen',
    };
  }

  handleSection = () => {
    const { addClass } = this.state;
    this.setState({
      addClass: !addClass,
    });
  };

  render() {
    const { addClass, intensity } = this.state;
    const pressionClass = ['pression'];
    const heartClass = ['heart'];
    if (addClass) {
      pressionClass.push('pression-enable');
      heartClass.push('heart-enable');
    }
    return (
      <div className="App pt-5">
        <MainView
          pressionClass={pressionClass}
          heartClass={heartClass}
          intensity={intensity}
          handleSection={this.handleSection}
        />
      </div>
    );
  }
}

export default StudentView;
