import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Explanation from './Common/Explanation';
import './Description.css';

const Description = ({
  t,
  showParaNerve,
  showSympaNerve,
  showHeartNerve,
  showCarotidSinus,
  showHeringNerve,
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
      showHeartNerve={showHeartNerve}
      showParaNerve={showParaNerve}
      showSympaNerve={showSympaNerve}
      showHeringNerve={showHeringNerve}
      showCarotidSinus={showCarotidSinus}
      applySection={applySection}
    />
  </div>
);

Description.propTypes = {
  t: PropTypes.func.isRequired,
  showHeartNerve: PropTypes.bool.isRequired,
  showParaNerve: PropTypes.bool.isRequired,
  showSympaNerve: PropTypes.bool.isRequired,
  showCarotidSinus: PropTypes.bool.isRequired,
  showHeringNerve: PropTypes.bool.isRequired,
  applySection: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
});

const connectedComponent = connect(mapStateToProps)(Description);
export default (connectedComponent);
