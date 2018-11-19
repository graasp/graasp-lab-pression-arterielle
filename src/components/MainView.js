import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ImageManager from './ImageManager';
import './MainView.css';

const MainView = ({
  heartBeat,
  handleSection,
  pressure,
  applySection,
  t,
}) => (
  <Row className="Main">
    <ImageManager
      applySection={applySection}
      t={t}
      heartBeat={heartBeat}
      pressure={pressure}
      handleSection={handleSection}
    />
  </Row>
);

MainView.propTypes = {
  applySection: PropTypes.bool.isRequired,
  handleSection: PropTypes.func.isRequired,
  heartBeat: PropTypes.arrayOf(PropTypes.string).isRequired,
  pressure: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default MainView;
