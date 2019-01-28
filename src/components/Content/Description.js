import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Explanation from './Common/Explanation';

const Description = ({
  t,
  themeColor,
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
    <Button
      outline
      color="primary"
      style={{ borderColor: themeColor }}
    >
      {t('heart Beat')}
      :
      57
    </Button>
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
  themeColor: PropTypes.string.isRequired,
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
