import React, { Component } from 'react';
import Qs from 'qs';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import TeacherMode from './modes/TeacherMode';
import StudentMode from './modes/StudentMode';

export class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    const {
      mode = 'default',
      lang = 'en',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
    this.state = { mode };
  }

  render() {
    const { mode } = this.state;

    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
        // TODO::the teacher view is empty for the moment
        return <TeacherMode />;

      // by default go with the student mode
      case 'student':
      default:
        return <StudentMode />;
    }
  }
}

export default withNamespaces()(App);
