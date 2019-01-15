import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabComponent from './TabComponent';
import Description from './Description';
import SettingManager from './SettingManager';
import { AppState } from '../config/AppState';
import { defaultLang, themeColor } from '../actions';

export class Visualizer extends Component {
  state = AppState;

  handleChangeComplete = (color) => {
    const newColor = color.hex;
    const {
      dispatchThemeColor,
    } = this.props;
    dispatchThemeColor({ newColor });
  }

  handleLang = (lang) => {
    const newLang = lang.value;
    const {
      dispatchDefaultLanguage,
    } = this.props;
    dispatchDefaultLanguage({ newLang });
  }

  onOpenModal = () => {
    this.setState({
      openModal: true,
    });
  }

  onCloseModal = () => {
    this.setState({
      openModal: false,
    });
  }

  render() {
    const {
      obserViewActive,
      t,
      handleTitle,
      showTitle,
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
          handleTitle={handleTitle}
        />
        <SettingManager
          handleLang={this.handleLang}
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
  handleTitle: PropTypes.func.isRequired,
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
