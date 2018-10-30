import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from '@material-ui/core/FormLabel';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    if(this.props.visible){
    return (
      <div>
        <GridContainer alignItems="center" >
        <GridItem>
        <FormLabel> kolesnikov00000@gmail.com </FormLabel>
        </GridItem>
        <GridItem>
        <AccountCircle />
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

export default withStyles(headerLinksStyle)(HeaderLinks);
