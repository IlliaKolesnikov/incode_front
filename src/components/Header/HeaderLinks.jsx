import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from 'react-redux'
import {signOut} from '../../actions/signActions'
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList';
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
    this.props.signOut()
  };

  render() {
    const { open } = this.state;
    if(this.props.visible){
    return (
      <div>
        <GridContainer alignItems="center" >
          <GridItem>
            <FormLabel> {this.props.sign.mail} </FormLabel>
          </GridItem>
          <GridItem> {//выпадающий Sign Out на кнопку
          }
          <IconButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <AccountCircle />
          </IconButton>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
                    </MenuList>
                </Paper>
              </Grow>
            )}
          </Popper>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
  else{
    return(
      <Person />
    )
  }
}
}

function mapStateToProps(state){
  return {
    sign: state
  }
}
function mapDispatchToProps(dispatch){
  return{
    signOut: ()=>dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks));
