import { Button } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  t,
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
    >
      {t('heartBeat')}
      :
      57
    </Button>
  </div>
);

Description.propTypes = {
  t: PropTypes.func.isRequired,
};


export default Description;
