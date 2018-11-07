import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import GridItem from "components/Grid/GridItem.jsx";
import Grid from '@material-ui/core/Grid'
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import {moveUp, moveDown, deleteOne} from "../../actions/moveActions"
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
  },

});

class EditExercise extends Component{

 handleChange = (index, attribute) => event =>{
    let a = this.state.arr.slice(); 
    a[index][attribute] = event.target.value;
    this.setState({arr: a});
  }


  render(){
    const { classes } = this.props;
  return (
    <GridContainer >
        <GridItem xs={12} sm={12} md={8}>
        <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Edit Exercise</h4>
        </CardHeader>
        <CardBody>
          <Grid container alignItems="flex-end">
          <Table 
          tableData={this.props.main.data.map((item, index)=> [
                  <TextField
                  id="name"
                  label="Exercise name"
                  value={item.name}
                   />,

                   <TextField
                   id="measure"
                   label="measurement"
                   select
                   value={item.measure}
                 >
                   <MenuItem value="kilograms">Kilograms</MenuItem>
                   <MenuItem value="minutes">Minutes</MenuItem>
                   <MenuItem value="miles">Miles</MenuItem>
                 </TextField>,
           
          [
            <Button color="info" onClick={()=>this.props.moveUp(index)} > <ArrowUpward /> </Button>,
           
            <Button color="info" onClick={()=>this.props.moveDown(index)}> <ArrowDownward /> </Button>,
          
            <Button color="warning" onClick={()=>this.props.deleteOne(index)}><AddCircle  /> </Button>
          ]
           
      ]
      )}
          />
          </Grid>
          <GridContainer>
              <Button color="primary" >Update exercises</Button>
          </GridContainer>
      </CardBody>
      </Card>
      </GridItem>
      </GridContainer>
  );
}
}



function mapStateToProps(state){
  return {
    main: state.exercises
  }
}

function mapDispatchToProps(dispatch){
  return {
    moveUp: (index)=> dispatch(moveUp(index)),
    moveDown: (index)=> dispatch(moveDown(index)),
    deleteOne: (index)=> dispatch(deleteOne(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditExercise));