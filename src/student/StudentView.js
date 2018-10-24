import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MainView from '../components/MainView';

class StudentView extends Component {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    t: PropTypes.func.isRequired,
  }

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
    const { i18n, t } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App pt-5">
        <Button onClick={() => changeLanguage('fr')} className="btn btn-outline-primary">Fr</Button>
        <Button onClick={() => changeLanguage('en')} className="btn btn-outline-primary ml-2">En</Button>

        <MainView
          pressionBottomClass={pressionBottomClass}
          sices={sices}
          heartClass={heartClass}
          intensity={intensity}
          handleSection={this.handleSection}
          t={t}
        />
      </div>
    );
  }
}

export default StudentView;
