import React, { Component } from 'react';
import Qs from 'qs';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import TeacherView from './teacher/TeacherView';
import StudentView from './student/StudentView';
import './App.css';

export class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    t: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { mode = 'default' } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    this.state = { mode };
  }

  render() {
    const { mode } = this.state;
    const { i18n, t } = this.props;

    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
        return <TeacherView />;

      // by default go with the student mode
      case 'student':
      default:
        return <StudentView t={t} changeLanguage={this.changeLanguage} i18n={i18n} />;
    }
  }
}

export default withNamespaces()(App);
