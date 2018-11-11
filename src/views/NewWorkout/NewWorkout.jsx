import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { ArrowUpward, ArrowDownward, AddCircle } from '@material-ui/icons'
import {connect} from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";
import MenuItem from '@material-ui/core/MenuItem';
import {createWorkout} from "../../actions/workouts"
import {getData} from "../../actions/exercises"

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

class NewWorkout extends Component {
  state = {
    arr: [{
      name: "sasha",
      
    }]
  }
  componentDidMount(){
    this.props.getData()
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

  addExercise = () =>{
    let a = this.state.arr.slice();
    a.unshift({name: "", repeats: "", measure: ""})
    this.setState({arr: a})
  }
  render(){
    const { classes } = this.props;
    const {exercisesToChoose} = this.props.workouts
    const { arr } = this.state
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
        <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>New workout</h4>
        </CardHeader>
        <CardBody>
        <GridContainer>
            <Button color="primary"className={classes.addExercise} onClick={this.addExercise}>Add exercise</Button>
        </GridContainer>
        <Grid container alignItems="flex-end">
            <Table
                  tableHeaderColor="warning"
                  tableData= {arr === [] ? "Please add at least one exercise" : arr.map((item, index)=> [
                    
                        <TextField
                              id="name"
                              label="Exercise name"
                              value={item.name}
                              fullWidth
                              select
                              onChange={this.handleChange(index, 'name')}
                               > 
                              { exercisesToChoose.map((item, index)=>{
                                return <MenuItem value={item._id}>{item.title}</MenuItem>
                             })}
                               </TextField>
                    ,

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
                                fullWidth
                                onChange={this.handleChange(index, 'measure')}
                        >
                        </TextField>,
                        <FormLabel> </FormLabel>],
                       
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
              <Button color="primary" className={classes.createWorkout} onClick={()=> this.props.createWorkout(arr)}>Create workout</Button>
          </GridContainer>
        </CardBody>
      </Card>
      </GridItem>
        </GridContainer> )
  }
}

function mapStateToProps(state){
  return{
    workouts: state.workouts
  }
}


function mapDispatchToProps(dispatch){
  return{
    createWorkout: (arrWithData) => dispatch(createWorkout(arrWithData)),
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(withStyles(styles)(NewWorkout));