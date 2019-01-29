import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Explanation from './Common/Explanation';
import './Description.css';

const Description = ({
  t,
  applySection,
}) => (
  <div className="Description-container">
    <h2>{t('Description')}</h2>
    <p>
      {t('LabDescription')}
    </p>
    <p>
      {t('SelectOrgan')}
    </p>
    <Explanation
      applySection={applySection}
    />
  </div>
);

Description.propTypes = {
  t: PropTypes.func.isRequired,
  applySection: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
});

const connectedComponent = connect(mapStateToProps)(Description);
export default (connectedComponent);
