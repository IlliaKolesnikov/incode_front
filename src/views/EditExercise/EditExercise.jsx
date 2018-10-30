import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { ArrowUpward, ArrowDownward, AddCircle } from '@material-ui/icons'
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
  },
  formControl: {
    minWidth: 120,
  }
};

class EditExercise extends Component {
  state = {
    name: 'kilograms'
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render(){
    const { classes } = this.props;
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
        <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Edit Exercise</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Exercise name"
                    id="exercisename"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
              
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
        
          <TextField
          select
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            inputProps={{
              id: 'name-required',
            }}
            inputStyle={{ alignSelf: 'flex-end', marginLeft: 20, width: 150 }}
            fullWidth={true}
            className={classes.selectEmpty}
          >

            <MenuItem value="hai">Hai</MenuItem>
            <MenuItem value="olivier">Olivier</MenuItem>
            <MenuItem value="kevin">Kevin</MenuItem>
            
          </TextField>

            </GridItem>
            <Button color="info" > <ArrowUpward /> </Button>
            <Button color="info" > <ArrowDownward /> </Button>
            <Button color="warning"><AddCircle /> </Button>
          </GridContainer>
          <GridContainer>
              <Button color="primary">
              <ArrowUpward />
              Create exercise</Button>
          </GridContainer>


        </CardBody>
      </Card>
      </GridItem>
      </GridContainer>)
  }
}



export default withStyles(styles)(EditExercise);