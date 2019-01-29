import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col } from 'reactstrap';

const Explanation = ({
  applySection,
  t,
}) => (
  <div className="control-container">
    <Col xs={12} className="px-0">
      { applySection ? (
        <div className="explanation-content">
          <p>
            {t('Phase explanation')}
          </p>
        </div>
      ) : ''
      }
    </Col>
  </div>
);

Explanation.propTypes = {
  t: PropTypes.func.isRequired,
  applySection: PropTypes.bool.isRequired,
};

export default withNamespaces('translations')(Explanation);
