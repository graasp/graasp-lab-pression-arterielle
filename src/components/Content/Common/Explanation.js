import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col } from 'reactstrap';

const Explanation = ({
  showHeartNerve,
  showParaNerve,
  showSympaNerve,
  t,
}) => (
  <div className="control-container">
    <Col xs={12}>
      { showHeartNerve ? (
        <div>
          <h2 className="explanation-title">{t('Heart')}</h2>
          <p>
            {t('Heart Role Explanation')}
          </p>
        </div>
      ) : ''
      }
      { showParaNerve ? (
        <div>
          <h2 className="explanation-title">{t('Para Sympathetic Nerve')}</h2>
          <p>
            {t('Parasympathetic Notice')}&nbsp;
            <b>{t('Efferent')}</b>&nbsp;
            <b>{t('Hypotensor')}</b>&nbsp;
            {t('End')}&nbsp;
            <b>{t('Cardiomoderator')}</b>
          </p>
        </div>
      ) : ''
      }
      { showSympaNerve ? (
        <div>
          <h2 className="explanation-title">{t('Sympathetic Nerve')}</h2>
          <p>
            {t('Sympathetic Nerve Role Explanation')}
          </p>
        </div>
      ) : ''
      }
    </Col>
  </div>
);

Explanation.propTypes = {
  t: PropTypes.func.isRequired,
  showHeartNerve: PropTypes.bool.isRequired,
  showParaNerve: PropTypes.bool.isRequired,
  showSympaNerve: PropTypes.bool.isRequired,
};

export default withNamespaces('translations')(Explanation);
