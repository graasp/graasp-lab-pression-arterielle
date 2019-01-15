import { Button } from 'reactstrap';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Description = ({
  t,
  themeColor,
}) => (
  <div className="Description-container">
    <h2>{t('Description')}</h2>
    <p>
      {t('LabDescription')}
    </p>
    <p>
      {t('SelectOrgane')}
    </p>
    <Button
      outline
      color="primary"
      style={{ borderColor: themeColor }}
    >
      {t('heartBeat')}
      :
      57
    </Button>
  </div>
);

Description.propTypes = {
  t: PropTypes.func.isRequired,
  themeColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
});

const connectedComponent = connect(mapStateToProps)(Description);
export default (connectedComponent);
