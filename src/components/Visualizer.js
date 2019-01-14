import React from 'react';
import PropTypes from 'prop-types';
import TabComponent from './TabComponent';
import Description from './Description';

const ImageManager = ({
  t, obserViewActive,
}) => (
  <div className="Visualizer-container">
    <TabComponent
      obserViewActive={obserViewActive}
      t={t}
    />
    <Description
      t={t}
    />
  </div>
);

ImageManager.propTypes = {
  obserViewActive: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};


export default ImageManager;
