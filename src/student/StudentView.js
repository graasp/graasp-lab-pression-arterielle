import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideMe from '../components/Main/SideMe';
import { AppState } from '../config/AppState';
import { titleState } from '../actions';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    themeColor: PropTypes.string.isRequired,
    dispatchTitleState: PropTypes.func.isRequired,
  }

  state = AppState;

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
    this.postMessage({
      heart_beat: heartBeat,
      breath_pressure: pressure,
      cut_nerve: applySection,
    });
  };

  handleCarotidHover = () => {
    const { showCarotidSinus } = this.state;
    this.setState({ showCarotidSinus: !showCarotidSinus });
    this.postMessage({
      organ_name: 'Carotid Nerve',
      show_title: showCarotidSinus,
    });
  }

  handleHeringHover = () => {
    const { showHeringNerve } = this.state;
    this.setState({ showHeringNerve: !showHeringNerve });
    this.postMessage({
      organ_name: 'Hering Nerve',
      show_title: showHeringNerve,
    });
  }

  handleParaHover = () => {
    const { showParaNerve } = this.state;
    this.setState({ showParaNerve: !showParaNerve });
    this.postMessage({
      organ_name: 'Parasympathetic Nerve',
      show_title: showParaNerve,
    });
  }

  handleBulbHover = () => {
    const { showBulbNerve } = this.state;
    this.setState({ showBulbNerve: !showBulbNerve });
    this.postMessage({
      organ_name: 'Rachidien Bulb',
      show_title: showBulbNerve,
    });
  }

  handleCordHover = () => {
    const { showSpinalCord } = this.state;
    this.setState({ showSpinalCord: !showSpinalCord });
    this.postMessage({
      organ_name: 'Spinal Cord',
      show_title: showSpinalCord,
    });
  }

  handleSympaHover = () => {
    const { showSympaNerve } = this.state;
    this.setState({ showSympaNerve: !showSympaNerve });
    this.postMessage({
      organ_name: 'Sympathetic Nerve',
      show_title: showSympaNerve,
    });
  }

  handleHeartHover = () => {
    const { showHeartNerve } = this.state;
    this.setState({ showHeartNerve: !showHeartNerve });
    this.postMessage({
      organ_name: 'Heart',
      show_title: showHeartNerve,
    });
  }

  toggleTitle = () => {
    const { showTitle } = this.state;
    this.setState({ showTitle: !showTitle });
    const { dispatchTitleState } = this.props;
    dispatchTitleState({ showTitle });
    this.postMessage({
      show_title: showTitle,
    });
  }

  postMessage = (data) => {
    const message = JSON.stringify(data);
    console.log('message', message);
    if (document.postMessage) {
      document.postMessage(message, '*');
    } else if (window.postMessage) {
      window.postMessage(message, '*');
    } else {
      console.error('unable to find postMessage');
    }
  };

  render() {
    const {
      applySection,
      heartBeat,
      pressure,
      obserViewActive,
      showCarotidSinus,
      showHeringNerve,
      showBulbNerve,
      showParaNerve,
      showSpinalCord,
      showSympaNerve,
      showHeartNerve,
    } = this.state;

    const { t, themeColor } = this.props;
    const defaultColor = themeColor || '#0f94f8';

    return (
      <div className="App">
        <SideMe
          pressure={pressure}
          applySection={applySection}
          heartBeat={heartBeat}
          handleSection={this.handleSection}
          t={t}
          defaultColor={defaultColor}
          obserViewActive={obserViewActive}
          handleCarotidHover={this.handleCarotidHover}
          handleHeringHover={this.handleHeringHover}
          handleParaHover={this.handleParaHover}
          handleBulbHover={this.handleBulbHover}
          handleCordHover={this.handleCordHover}
          handleSympaHover={this.handleSympaHover}
          handleHeartHover={this.handleHeartHover}
          toggleTitle={this.toggleTitle}
          showCarotidSinus={showCarotidSinus}
          showHeringNerve={showHeringNerve}
          showBulbNerve={showBulbNerve}
          showParaNerve={showParaNerve}
          showSpinalCord={showSpinalCord}
          showSympaNerve={showSympaNerve}
          showHeartNerve={showHeartNerve}
          postMessage={this.postMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
});

const mapDispatchToProps = {
  dispatchTitleState: titleState,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(StudentView);

export default (connectedComponent);
