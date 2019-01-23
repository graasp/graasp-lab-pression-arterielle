import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import ImageManager from '../Simulator/ImageManager';
import Visualizer from '../Visualizer';
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
  showCarotidSinus,
  showHeringNerve,
  showBulbNerve,
  showSpinalCord,
  showParaNerve,
  showSympaNerve,
  showHeartNerve,
  showTitle,
  toggleTitle,
  postMessage,
  t,
}) => (
  <div className="Main-container">
    { showTitle ? (
      <Row>
        <Col md={12}>
          <h1 className="lab-title" style={{ backgroundColor: defaultColor }}>{t('Regulation of arterial pressure')}</h1>
        </Col>
      </Row>
    ) : ''
    }
    <Row className="Main">
      <Col sm={8}>
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
          showCarotidSinus={showCarotidSinus}
          showHeringNerve={showHeringNerve}
          showBulbNerve={showBulbNerve}
          showSpinalCord={showSpinalCord}
          showParaNerve={showParaNerve}
          showSympaNerve={showSympaNerve}
          showHeartNerve={showHeartNerve}
        />
      </Col>
      <Col sm={4}>
        <Visualizer
          themeColor={defaultColor}
          t={t}
          obserViewActive={obserViewActive}
          showTitle={showTitle}
          toggleTitle={toggleTitle}
          postMessage={postMessage}
          showHeartNerve={showHeartNerve}
          showParaNerve={showParaNerve}
          showSympaNerve={showSympaNerve}
          showSpinalCord={showSpinalCord}
          showBulbNerve={showBulbNerve}
          showHeringNerve={showHeringNerve}
          showCarotidSinus={showCarotidSinus}
          applySection={applySection}
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
  showCarotidSinus: PropTypes.bool.isRequired,
  showHeringNerve: PropTypes.bool.isRequired,
  showBulbNerve: PropTypes.bool.isRequired,
  showParaNerve: PropTypes.bool.isRequired,
  showSpinalCord: PropTypes.bool.isRequired,
  showSympaNerve: PropTypes.bool.isRequired,
  showHeartNerve: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  handleCarotidHover: PropTypes.func.isRequired,
  handleHeringHover: PropTypes.func.isRequired,
  handleParaHover: PropTypes.func.isRequired,
  handleBulbHover: PropTypes.func.isRequired,
  handleCordHover: PropTypes.func.isRequired,
  handleSympaHover: PropTypes.func.isRequired,
  handleHeartHover: PropTypes.func.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
};

export default MainView;
