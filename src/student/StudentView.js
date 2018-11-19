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
      applySection: false,
      heartBeat: false,
      pressure: false,
    };
    this.handleSection = this.handleSection.bind(this);
  }

  handleSection = () => {
    const {
      applySection,
      heartBeat,
      pressure,
    } = this.state;
    this.setState({
      applySection: !applySection,
      pressure: !pressure,
      heartBeat: !heartBeat,
    });
  };

  render() {
    const {
      applySection,
      heartBeat,
      pressure,
    } = this.state;

    const { i18n, t } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App pt-5">
        <Button onClick={() => changeLanguage('fr')} className="btn btn-outline-primary">Fr</Button>
        <Button onClick={() => changeLanguage('en')} className="btn btn-outline-primary ml-2">En</Button>

        <MainView
          pressure={pressure}
          applySection={applySection}
          heartBeat={heartBeat}
          handleSection={this.handleSection}
          t={t}
        />
      </div>
    );
  }
}

export default StudentView;
