import React, {Component} from "react";
import {Link} from 'react-router-dom'
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Snackbar from '@material-ui/core/Snackbar';
import CardFooter from "components/Card/CardFooter.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CustomSnack from 'components/CustomSnackBar/CustomSnack.jsx'

const styles = theme =>({
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
  }
});


class SignUp extends Component{
  state = {
    mail: "",
    password: "",
    repeatPassword: "",
    isShow: false
  }
  onRepeatCheck = () =>{

    if(this.state.password === this.state.repeatPassword){
      this.setState({isShow: false})
      this.props.signUp(this.state.mail, this.state.password);
    }
    else{
      this.setState({isShow: true})
    }
  }
  
  onMailChange = (event) =>{
    this.setState({mail: event.target.value})
  }
  onPasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }
  onRepeatPasswordChange = (event) =>{
    this.setState({repeatPassword: event.target.value})
  }
  
  render(){
  const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Register with Trainer App</h4>
              <p className={classes.cardCategoryWhite}>Please enter your email and password</p>
            </CardHeader>
            <CardBody>
              
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email adress"
                    id="email-address"
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
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: this.onPasswordChange
                      //type: "oassword"
                    }}
                  />
                </GridItem>
             </GridContainer>

            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Repeat password"
                    id="repeat-password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: this.onRepeatPasswordChange
                    }}
                  />
                  {this.state.isShow ? "The password isn't correct. Please try again" :  null}
                </GridItem>
            </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={this.onRepeatCheck}>Sign up</Button>
              <div><Link to={"/signin"} > Already have an account? Sign in</Link></div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
}

export default withStyles(styles)(SignUp);
