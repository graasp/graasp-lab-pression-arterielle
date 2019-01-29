import React, { Component } from 'react';
import { connect } from 'react-redux';
import Qs from 'qs';
import PropTypes from 'prop-types';
import Description from './Content/Description';
import SettingManager from './Content/SettingManager';
import i18n from '../config/i18n';
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
    i18n.changeLanguage(newLang);
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
      t,
      toggleTitle,
      showTitle,
      applySection,
    } = this.props;
    const { openModal } = this.state;
    const {
      mode = 'default',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    return (
      <div className="Visualizer-container">
        <Description
          t={t}
          applySection={applySection}
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
            showTitle={showTitle}
            toggleTitle={toggleTitle}
          />
        ) : ''
        }
      </div>
    );
  }
}

Visualizer.propTypes = {
  t: PropTypes.func.isRequired,
  dispatchDefaultLanguage: PropTypes.func.isRequired,
  dispatchThemeColor: PropTypes.func.isRequired,
  showTitle: PropTypes.bool.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
  applySection: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
  defaultLang: state.setting.defaultLang,
  showTitle: state.setting.showTitle,
});

const mapDispatchToProps = {
  dispatchThemeColor: themeColor,
  dispatchDefaultLanguage: defaultLang,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Visualizer);

export default (connectedComponent);
