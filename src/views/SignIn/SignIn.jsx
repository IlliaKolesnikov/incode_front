import React, {Component} from "react";
import {Link} from 'react-router-dom'
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbar from "components/CustomSnackBar/CustomSnack.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  
};

class SignIn extends Component{

  
  /*handleChange = field => event =>{
    this.setState({field: event.target.value})
  }*/
  state = {
    password: "",
    mail: "",
  }

  onPasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }

  onMailChange = (event) =>{
    this.setState({mail: event.target.value})
  }
  
  render(){
    
  const { classes } = this.props;
  const { error } = this.props.sign;
  return (
    <div>
      <GridContainer>
        {error ? 
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbar
            onClose={this.props.changeStatus}
            variant="error"
            message={error}
          />
          </Snackbar>: null}
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Sign into Trainer App</h4>
              <p className={classes.cardCategoryWhite}>Please enter your email and password</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email adress"
                    id="mail"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.onMailChange
                    }}
                    
                  />
                </GridItem>
                    </GridContainer>
                    <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.onPasswordChange,
                      type: "password"
                    }}
                  />
                </GridItem>

                    </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={()=>this.props.signIn(this.state.mail, this.state.password)}>
                    Sign in</Button>
                   
            <div><Link to={"/signup"} >First time user? Sign up</Link> </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
                  }
}

export default withStyles(styles)(SignIn);