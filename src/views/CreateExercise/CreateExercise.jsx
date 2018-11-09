/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem';
//import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import {createExercise} from '../../actions/exercises'

const styles = theme =>({
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
    margin: theme.spacing.unit,
    width: "99%"
  },
  
});

class NewExercise extends React.Component {
  
    state = {
      title: "",
      measureType: "",
    }

    handleChange = (attribute) => event =>{
      this.setState({[attribute]: event.target.value})
    }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Create new Exercise</h4>
          <p className={classes.cardCategoryWhite}>
            Handcrafted by our friends from{" "}
            Please, add a new exercise name and measurement type
          </p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <FormControl  className={classes.formControl}>
                  <TextField
                    label="Exercise name"
                    id="exercisename"
                    fullWidth
                    onChange={this.handleChange('title')}
                  />
            </FormControl>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <FormControl fullWidth className={classes.formControl}>
                  <TextField
                    label="Measurement type"
                    id="measuretype"
                    value={this.state.measureType}
                    select
                    fullWidth
                    onChange={this.handleChange('measureType')}
                  >
                  <MenuItem value="kilograms">Kilograms</MenuItem>
                   <MenuItem value="minutes">Minutes</MenuItem>
                   <MenuItem value="miles">Miles</MenuItem>
                  </TextField>
            </FormControl>
            </GridItem>
          </GridContainer>
          <GridContainer>
              <Button color="primary" onClick={()=>this.props.createExercise(this.state.title, this.state.measureType, this.props.exercise.data)}>Create exercise</Button>
          </GridContainer>
 

        </CardBody>
      </Card>
      </GridItem>
      </GridContainer> 
    );
  }
}

function mapStateToProps(state){
  return{
    exercise: state.exercises
  }
}

function mapDispatchToProps(dispatch){
  return{
    createExercise: (title, measureType, user) => dispatch(createExercise(title, measureType, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewExercise));
