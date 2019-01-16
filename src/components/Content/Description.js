import React from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';
import Explanation from './Common/Explanation';

const Description = ({
  t,
  themeColor,
  toggleTitle,
  showTitle,
  showParaNerve,
  showSympaNerve,
  showHeartNerve,
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
      {t('heartBeat')}
      :
      57
    </Button>
    <Row className="title-switch">
      <Col xs="8">
        <h5 className="display-title">{t('Display Lab title')}</h5>
      </Col>
      <Col xs="4">
        <Switch
          onChange={toggleTitle}
          checked={showTitle}
          id="title-switch"
        />
      </Col>
    </Row>
    <Explanation
      showHeartNerve={showHeartNerve}
      showParaNerve={showParaNerve}
      showSympaNerve={showSympaNerve}
    />
  </div>
);

Description.propTypes = {
  t: PropTypes.func.isRequired,
  themeColor: PropTypes.string.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  showTitle: PropTypes.bool.isRequired,
  showHeartNerve: PropTypes.bool.isRequired,
  showParaNerve: PropTypes.bool.isRequired,
  showSympaNerve: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
});

const connectedComponent = connect(mapStateToProps)(Description);
export default (connectedComponent);
