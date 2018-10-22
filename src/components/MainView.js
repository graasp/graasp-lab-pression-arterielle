import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ImageManager from './ImageManager';

const MainView = ({
  heartClass, pressionClass, handleSection,
}) => (
  <Row className="px-5">
    <ImageManager
      heartClass={heartClass}
      pressionClass={pressionClass}
      handleSection={handleSection}
    />
  </Row>
);

MainView.propTypes = {
  handleSection: PropTypes.func.isRequired,
  heartClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  pressionClass: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainView;
