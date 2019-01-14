import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainView from '../components/MainView';

class StudentView extends Component {
  static propTypes = {
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

    const { t } = this.props;

    return (
      <div className="App">
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
