import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ImageManager from './ImageManager';
import './MainView.css';

const MainView = ({
  heartClass,
  handleSection,
  pressureBottomClass,
  scissors,
  t,
}) => (
  <Row className="Main">
    <ImageManager
      scissors={scissors}
      t={t}
      heartClass={heartClass}
      pressureBottomClass={pressureBottomClass}
      handleSection={handleSection}
    />
  </Row>
);

MainView.propTypes = {
  handleSection: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  heartClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  pressureBottomClass: PropTypes.arrayOf(PropTypes.string).isRequired,
  scissors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainView;
