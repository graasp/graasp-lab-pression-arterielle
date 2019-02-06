import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Settings';
import Fab from '@material-ui/core/Fab';
import Switch from 'react-switch';
import {
  Col,
  Row,
} from 'reactstrap';
import LangBox from './Common/LangBox';
import SwitchBox from './Common/SwitchBox';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    right: theme.spacing.unit * 4,
    bottom: theme.spacing.unit * 4,
    position: 'fixed',
  },
});

const handleToggleHeader = showHeader => () => {
  const { dispatchToggleHeader } = this.props;
  dispatchToggleHeader(showHeader);
  this.postMessage({ show_header: showHeader });
};

const SettingManager = ({
  t,
  classes,
  showHeader,
  themeColor,
  onOpenModal,
  openModal,
  onCloseModal,
  handleChangeComplete,
  handleChangeLang,
}) => (
  <div className="Setting-container">
    <Fab
      color="primary"
      aria-label="Add"
      onClick={onOpenModal}
      className={classes.fab}
      style={{ backgroundColor: themeColor }}
    >
      <AddIcon style={{ color: 'white' }} />
    </Fab>
    <Modal open={openModal} onClose={onCloseModal} center>
      <SwitchBox
        handleChangeComplete={handleChangeComplete}
        t={t}
      />
      <LangBox
        handleChangeLang={handleChangeLang}
        t={t}
      />
      <Row className="title-switch">
        <Col xs={8}>
          <h5 className="display-title">{t('Display Lab title')}</h5>
        </Col>
        <Col xs={4}>
          <Switch
            onChange={handleToggleHeader}
            checked={showHeader}
            id="title-switch"
          />
        </Col>
      </Row>
    </Modal>
  </div>
);

SettingManager.propTypes = {
  t: PropTypes.func.isRequired,
  themeColor: PropTypes.string.isRequired,
  handleChangeLang: PropTypes.func.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  showHeader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
});

const connectedComponent = connect(mapStateToProps)(SettingManager);
export default withStyles(styles)(connectedComponent);
