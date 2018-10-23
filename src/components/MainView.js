import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ImageManager from './ImageManager';

const MainView = ({
  heartClass, pressionBottomClass, handleSection, sices,
}) => (
  <Row className="px-5">
    <ImageManager
      sices={sices}
      heartClass={heartClass}
      pressionBottomClass={pressionBottomClass}
      handleSection={handleSection}
    />
  </Row>
);

MainView.propTypes = {
  handleSection: PropTypes.func.isRequired,
  heartClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  pressionBottomClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  sices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainView;
