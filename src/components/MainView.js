import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import ImageManager from './ImageManager';
import Visualizer from './Visualizer';
import './MainView.css';

const MainView = ({
  heartBeat,
  handleSection,
  pressure,
  applySection,
  defaultColor,
  obserViewActive,
  handleCarotidHover,
  handleHeringHover,
  handleParaHover,
  handleBulbHover,
  handleCordHover,
  handleSympaHover,
  handleHeartHover,
  showCarotidNerve,
  showHeringNerve,
  showBulbNerve,
  showParaNerve,
  showCordNerve,
  showSympaNerve,
  showHeartNerve,
  t,
}) => (
  <div className="Main-container">
    <Row>
      <Col md={12}>
        <h1 className="lab-title" style={{ backgroundColor: defaultColor }}>{t('Synchronization of the ovarian cycle')}</h1>
      </Col>
    </Row>
    <Row className="Main">
      <Col sm="8">
        <ImageManager
          applySection={applySection}
          t={t}
          heartBeat={heartBeat}
          pressure={pressure}
          handleSection={handleSection}
          handleCarotidHover={handleCarotidHover}
          handleHeringHover={handleHeringHover}
          handleParaHover={handleParaHover}
          handleBulbHover={handleBulbHover}
          handleCordHover={handleCordHover}
          handleSympaHover={handleSympaHover}
          handleHeartHover={handleHeartHover}
          showCarotidNerve={showCarotidNerve}
          showHeringNerve={showHeringNerve}
          showBulbNerve={showBulbNerve}
          showParaNerve={showParaNerve}
          showCordNerve={showCordNerve}
          showSympaNerve={showSympaNerve}
          showHeartNerve={showHeartNerve}
        />
      </Col>
      <Col sm="4">
        <Visualizer
          themeColor={defaultColor}
          t={t}
          obserViewActive={obserViewActive}
        />
      </Col>
    </Row>
  </div>
);

MainView.propTypes = {
  applySection: PropTypes.bool.isRequired,
  defaultColor: PropTypes.string.isRequired,
  obserViewActive: PropTypes.bool.isRequired,
  handleSection: PropTypes.func.isRequired,
  heartBeat: PropTypes.bool.isRequired,
  pressure: PropTypes.bool.isRequired,
  showCarotidNerve: PropTypes.bool.isRequired,
  showHeringNerve: PropTypes.bool.isRequired,
  showBulbNerve: PropTypes.bool.isRequired,
  showParaNerve: PropTypes.bool.isRequired,
  showCordNerve: PropTypes.bool.isRequired,
  showSympaNerve: PropTypes.bool.isRequired,
  showHeartNerve: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  handleCarotidHover: PropTypes.func.isRequired,
  handleHeringHover: PropTypes.func.isRequired,
  handleParaHover: PropTypes.func.isRequired,
  handleBulbHover: PropTypes.func.isRequired,
  handleCordHover: PropTypes.func.isRequired,
  handleSympaHover: PropTypes.func.isRequired,
  handleHeartHover: PropTypes.func.isRequired,
};

export default MainView;
