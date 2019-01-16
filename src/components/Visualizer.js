import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabComponent from './Content/TabComponent';
import Description from './Content/Description';
import SettingManager from './Content/SettingManager';
import { AppState } from '../config/AppState';
import { defaultLang, themeColor } from '../actions';

export class Visualizer extends Component {
  state = AppState;

  handleChangeComplete = (color) => {
    const newColor = color.hex;
    const {
      dispatchThemeColor,
      postMessage,
    } = this.props;
    dispatchThemeColor({ newColor });
    postMessage({ theme_color: newColor });
  }

  handleChangeLang = (lang) => {
    const newLang = lang.value;
    const {
      dispatchDefaultLanguage,
      postMessage,
    } = this.props;
    dispatchDefaultLanguage({ newLang });
    postMessage({ default_lang: newLang });
  }

  onOpenModal = () => {
    this.setState({ openModal: true });
    const { postMessage } = this.props;
    postMessage({ open_setting_modal: true });
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
    const { postMessage } = this.props;
    postMessage({ open_setting_modal: false });
  }

  render() {
    const {
      obserViewActive,
      t,
      toggleTitle,
      showTitle,
      showParaNerve,
      showSympaNerve,
      showHeartNerve,
      showCarotidSinus,
      showHeringNerve,
    } = this.props;
    const { openModal } = this.state;
    return (
      <div className="Visualizer-container">
        <TabComponent
          obserViewActive={obserViewActive}
          t={t}
        />
        <Description
          t={t}
          showTitle={showTitle}
          toggleTitle={toggleTitle}
          showHeartNerve={showHeartNerve}
          showParaNerve={showParaNerve}
          showSympaNerve={showSympaNerve}
          showHeringNerve={showHeringNerve}
          showCarotidSinus={showCarotidSinus}
        />
        <SettingManager
          handleChangeLang={this.handleChangeLang}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
          handleChangeComplete={this.handleChangeComplete}
          openModal={openModal}
          themeColor={themeColor}
          t={t}
        />
      </div>
    );
  }
}

Visualizer.propTypes = {
  t: PropTypes.func.isRequired,
  dispatchDefaultLanguage: PropTypes.func.isRequired,
  dispatchThemeColor: PropTypes.func.isRequired,
  obserViewActive: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
  showHeartNerve: PropTypes.bool.isRequired,
  showParaNerve: PropTypes.bool.isRequired,
  showSympaNerve: PropTypes.bool.isRequired,
  showCarotidSinus: PropTypes.bool.isRequired,
  showHeringNerve: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
  defaultLang: state.setting.defaultLang,
});

const mapDispatchToProps = {
  dispatchThemeColor: themeColor,
  dispatchDefaultLanguage: defaultLang,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Visualizer);

export default (connectedComponent);
