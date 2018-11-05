import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { ArrowUpward, ArrowDownward, AddCircle } from '@material-ui/icons'
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";

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
  buttonPadding: {
    padding: "10px 18px"
  },
  addExercise: {
    marginLeft: "1.5vw",
    marginBottom: "2vh"
  }, 
  createWorkout: {
    marginLeft: "0.5vw",
    marginTop: "2vh"
  }
};

class EditExercise extends Component {

  state = {
    arr: [{
      name: "Gym",
      repeats: 15,
      measure: "kilograms",
    },
    {
      name: "Running",
      repeats: 1,
      measure: "miles"
    },
    {
      name: "Lifting",
      repeats: 25,
      measure: "kilograms"
    },
    {
      name: "Something else",
      repeats: 5,
      measure: "minutes"
    }
  ]
  }

  moveUpper = (index) => () =>{
    let a = this.state.arr.slice();
    if(index !== 0){
    let k = a[index-1];
    a[index-1] = a[index];
    a[index] = k;
    this.setState({arr: a})
  }
  }

  moveDown = (index) => () =>{
    let a = this.state.arr.slice();
    if(index !== this.state.arr.length-1){
      let k = a[index+1];
      a[index+1] = a[index];
      a[index] = k;
      this.setState({arr: a})
    }
  }

  deleteOne = (index) => () =>{
    let a = this.state.arr.slice();
    delete a[index];
    this.setState({arr: a})
  }

  handleChange = (index, attribute) => event =>{
    let a = this.state.arr.slice(); 
    a[index][attribute] = event.target.value;
    this.setState({arr: a});
  }
  render(){
    const { classes } = this.props;
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
        <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>New workout</h4>
        </CardHeader>
        <CardBody>
        <GridContainer>
            <Button color="primary"className={classes.addExercise}>Add exercise</Button>
        </GridContainer>
        <Grid container alignItems="center">
            <Table
                  tableHeaderColor="warning"
                  tableData= {this.state.arr.map((item, index)=> [
                        <TextField
                              id="name"
                              label="Exercise name"
                              value={item.name}
                            
                              onChange={this.handleChange(index, 'name')}
                               />,


                        <TextField
                                id="repeat"
                                label="Repeats"
                                value={item.repeats}
                               
                                onChange={this.handleChange(index, 'repeats')}
                              />,

                              
                        [<TextField
                                id="measure"
                                label="Measurement"
                                value={item.measure}
                                onChange={this.handleChange(index, 'measure')}
                              />,
                        <FormLabel> kg</FormLabel>],
                       
                      [
                        <Button color="info" onClick={this.moveUpper(index)}> <ArrowUpward /> </Button>,
           
                        <Button color="info" onClick={this.moveDown(index)}> <ArrowDownward /> </Button>,
           
                        <Button color="warning" onClick={this.deleteOne(index)}><AddCircle  /> </Button>
                      ]
                       
                      
                  ]
                  )}
               
              
                />
                </Grid>
          <GridContainer>
              <Button color="primary" className={classes.createWorkout}>Create workout</Button>
          </GridContainer>
        </CardBody>
      </Card>
      </GridItem>
        </GridContainer> )
  }
}



export default withStyles(styles)(EditExercise);