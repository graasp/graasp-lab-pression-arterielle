import React, { Fragment } from 'react';
import MainView from '../views/MainView';
import Header from '../layout/Header';
import SettingManager from '../components/Content/SettingManager';
import './CommonStyle.css';

const TeacherMode = () => (
  <Fragment>
    <Header />
    <MainView />
    <SettingManager />
  </Fragment>
);

export default TeacherMode;
