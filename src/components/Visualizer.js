import React, { Component } from 'react';
import { connect } from 'react-redux';
import Qs from 'qs';
import PropTypes from 'prop-types';
import Description from './Content/Description';
import SettingManager from './Content/SettingManager';
import i18n from '../config/i18n';
import { AppState } from '../config/AppState';
import { changeThemeColor } from '../actions';

export class Visualizer extends Component {
  state = AppState;

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

  handleChangeComplete = (color) => {
    const newColor = color.hex;
    const { dispatchThemeColor } = this.props;
    dispatchThemeColor({ newColor });
    this.postMessage({ theme_color: newColor });
  }

  handleChangeLang = (lang) => {
    const newLang = lang.value;
    i18n.changeLanguage(newLang);
    this.postMessage({ default_lang: newLang });
  }

  onOpenModal = () => {
    this.setState({ openModal: true });
    this.postMessage({ open_setting_modal: true });
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
    this.postMessage({ open_setting_modal: false });
  }

  render() {
    const {
      t,
      showHeader,
      themeColor,
    } = this.props;
    const { openModal } = this.state;
    const {
      mode = 'default',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    return (
      <div className="Visualizer-container">
        <Description
          t={t}
        />
        { mode === 'default' ? (
          <SettingManager
            handleChangeLang={this.handleChangeLang}
            onOpenModal={this.onOpenModal}
            onCloseModal={this.onCloseModal}
            handleChangeComplete={this.handleChangeComplete}
            openModal={openModal}
            themeColor={themeColor}
            t={t}
            showHeader={showHeader}
          />
        ) : ''
        }
      </div>
    );
  }
}

Visualizer.propTypes = {
  t: PropTypes.func.isRequired,
  dispatchThemeColor: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
  themeColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
});

const mapDispatchToProps = {
  dispatchThemeColor: changeThemeColor,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Visualizer);

export default (connectedComponent);
