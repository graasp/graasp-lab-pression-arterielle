import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col } from 'reactstrap';

const Explanation = ({
  showHeartNerve,
  showParaNerve,
  showSympaNerve,
  showCarotidSinus,
  showHeringNerve,
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
            {t('ParaSympathetic Nerve Role Explanation')}
          </p>
          <p>
            {t('Parasympathetic Notice')}&nbsp;
            <b>{t('Efferent')}</b>
            &sbquo;&nbsp;
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
          <p>
            {t('Sympathetic Notice')}&nbsp;
            <b>{t('Efferent')}</b>
            &sbquo;&nbsp;
            <b>{t('Hypertensor')}</b>&nbsp;
            {t('End')}&nbsp;
            <b>{t('Cardiomoderator')}</b>
          </p>
        </div>
      ) : ''
      }
      { showCarotidSinus ? (
        <div>
          <h2 className="explanation-title">{t('Carotid Sinus')}</h2>
          <p>
            {t('Hering Nerve Role Explanation')}
          </p>
        </div>
      ) : ''
      }
      { showHeringNerve ? (
        <div>
          <h2 className="explanation-title">{t('Hering Nerve')}</h2>
          <p>
            {t('Hering Nerve Role Explanation')}
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
  showCarotidSinus: PropTypes.bool.isRequired,
  showHeringNerve: PropTypes.bool.isRequired,
};

export default withNamespaces('translations')(Explanation);
