import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import SideMenu from '../components/Main/SideMenu';
import Flash from './Flash';
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
    this.notify();
  };

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

  notify = () => toast(<Flash />, { position: toast.POSITION.BOTTOM_LEFT });

  render() {
    const {
      applySection,
      heartBeat,
      pressure,
      obserViewActive,
    } = this.state;

    const { t, themeColor } = this.props;
    const defaultColor = themeColor || '#0f94f8';

    return (
      <div className="App">
        <SideMenu
          pressure={pressure}
          applySection={applySection}
          heartBeat={heartBeat}
          handleSection={this.handleSection}
          t={t}
          defaultColor={defaultColor}
          obserViewActive={obserViewActive}
          toggleTitle={this.toggleTitle}
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
