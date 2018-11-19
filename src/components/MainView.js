import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ImageManager from './ImageManager';
import './MainView.css';

const MainView = ({
  heartClass, pressionBottomClass, handleSection, sices, t,
}) => (
  <Row className="Main">
    <ImageManager
      sices={sices}
      t={t}
      heartClass={heartClass}
      pressionBottomClass={pressionBottomClass}
      handleSection={handleSection}
    />
  </Row>
);

MainView.propTypes = {
  handleSection: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  heartClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  pressionBottomClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  sices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainView;
