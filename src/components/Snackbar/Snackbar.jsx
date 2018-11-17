import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbar from "components/CustomSnackBar/CustomSnack.jsx";

class SnackbarToUse extends Component{
    constructor(props){
      super(props)
    }

  render(){
  const { onClose, variant, message } = this.props;
  return (
   <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open
          autoHideDuration={4000}
          onClose={onClose}
        >
          <MySnackbar
            onClose={onClose}
            variant={variant}
            message={message}
          />
          </Snackbar>
  );
                  }
}

export default SnackbarToUse;