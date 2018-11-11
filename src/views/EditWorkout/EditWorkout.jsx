import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import Table from "components/Table/Table.jsx";
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import FormLabel from '@material-ui/core/FormLabel';
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { getData, getWorkout, updateWorkout, moveEWUp, moveEWDown, deleteEWOne } from '../../actions/workouts'
import { ArrowUpward, ArrowDownward, AddCircle } from '@material-ui/icons'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
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
});

class EditWorkout extends Component{

 

  componentDidMount(){
    this.props.getWorkout()
  }
  render(){
    const { classes } = this.props;
    const {data, isLoading, isFetching} = this.props.workouts
  return (
    <GridContainer >
        <GridItem xs={12} sm={12} md={10} >
        <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Edit Workout</h4>
        </CardHeader>
        <CardBody>
          
            <Grid container alignItems="center">
              {isFetching ? 'Loading' : 
            <Table
                  tableHeaderColor="warning"
                  tableData= {data.exercises.sort((a,b) => a.order - b.order).map((item, index)=> [
                        <TextField
                              id="name"
                              label="Exercise name"
                              value={item.exercise.title}
                               />,


                        <TextField
                                id="repeat"
                                label="Repeats"
                                value={item.repeats}
                              />,

                              
                        [<TextField
                                id="measure"
                                label="Measurement"
                                value={item.measure}
                              />,
                        <FormLabel>{item.exercise.measureType}</FormLabel>],
                       
                      [
                        <Button color="info" onClick={()=>this.props.moveEWUp(index)}> <ArrowUpward /> </Button>,
           
                        <Button color="info" onClick={()=>this.props.moveEWDown(index)}> <ArrowDownward /> </Button>,
           
                        <Button color="warning" onClick={()=>this.props.deleteEWOne(index, item, data)}><AddCircle  /> </Button>
                      ]
                  ]
                  )}
                />}
                </Grid>
                <GridContainer>
              <Button color="primary" onClick={()=>this.props.updateWorkout(this.props.workouts.data)} >Update workout</Button>
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
    workouts: state.workouts
  }
}


function mapDispatchToProps(dispatch){
  return{
    moveEWUp: (index)=> dispatch(moveEWUp(index)),
    moveEWDown: (index)=> dispatch(moveEWDown(index)),
    deleteEWOne: (index, item, arr)=> dispatch(deleteEWOne(index, item, arr)),
    getData: () => dispatch(getData()),
    getWorkout: ()=>dispatch(getWorkout()),
    updateWorkout: (newArray)=>dispatch(updateWorkout(newArray))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(withStyles(styles)(EditWorkout));