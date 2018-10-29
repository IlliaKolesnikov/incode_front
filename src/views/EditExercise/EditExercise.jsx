import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import UpArrow from "@material-ui/icons/ArrowUpward";
import DownArrow from "@material-ui/icons/ArrowDownward";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class EditExercise extends Component {
  render(){
    const { classes } = this.props;
    return(
    <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Edit Exercise</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Exercise name"
                    id="exercisename"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
              
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Measurement type"
                    id="measuretype"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
            </GridItem>
            <Button color="info" ></Button>
            <Button color="info" ></Button>
            <Button color="warning"></Button>
          </GridContainer>
          <GridContainer>
              <Button color="primary">Create exercise</Button>
          </GridContainer>
 

        </CardBody>
      </Card>)
  }
}



export default withStyles(styles)(EditExercise);