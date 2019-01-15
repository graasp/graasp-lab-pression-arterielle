import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainView from '../components/MainView';
import { AppState } from '../config/AppState';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    themeColor: PropTypes.string.isRequired,
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
  };

  handleCarotidHover = () => {
    const { showCarotidNerve } = this.state;
    this.setState({ showCarotidNerve: !showCarotidNerve });
  }

  handleHeringHover = () => {
    const { showHeringNerve } = this.state;
    this.setState({ showHeringNerve: !showHeringNerve });
  }

  handleParaHover = () => {
    const { showParaNerve } = this.state;
    this.setState({ showParaNerve: !showParaNerve });
  }

  handleBulbHover = () => {
    const { showBulbNerve } = this.state;
    this.setState({ showBulbNerve: !showBulbNerve });
  }

  handleCordHover = () => {
    const { showCordNerve } = this.state;
    this.setState({ showCordNerve: !showCordNerve });
  }

  handleSympaHover = () => {
    const { showSympaNerve } = this.state;
    this.setState({ showSympaNerve: !showSympaNerve });
  }

  handleHeartHover = () => {
    const { showHeartNerve } = this.state;
    this.setState({ showHeartNerve: !showHeartNerve });
  }

  render() {
    const {
      applySection,
      heartBeat,
      pressure,
      obserViewActive,
      showCarotidNerve,
      showHeringNerve,
      showBulbNerve,
      showParaNerve,
      showCordNerve,
      showSympaNerve,
      showHeartNerve,
    } = this.state;

    const { t, themeColor } = this.props;

    const defaultColor = themeColor || '#0f94f8';

    return (
      <div className="App">
        <MainView
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
          showCarotidNerve={showCarotidNerve}
          showHeringNerve={showHeringNerve}
          showBulbNerve={showBulbNerve}
          showParaNerve={showParaNerve}
          showCordNerve={showCordNerve}
          showSympaNerve={showSympaNerve}
          showHeartNerve={showHeartNerve}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
});

export default connect(mapStateToProps)(StudentView);
