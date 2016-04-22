import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sidebarActionCreators from '../actions/sidebar';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Navbar = ({ actions }) => (
  <AppBar
    title="ToS XP Cards AsCalculator"

    onLeftIconButtonTouchTap={actions.toggleSidebar}
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Foo" />
      </IconMenu>
    }
  />
);

Navbar.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  undefined,
  dispatch => ({ actions: bindActionCreators(sidebarActionCreators, dispatch) })
)(Navbar);
