import React from "react";
import PropTypes from "prop-types";
import InfiniteCalendar from 'react-infinite-calendar';
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import 'react-infinite-calendar/styles.css'; 

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardBody>
                <GridContainer>
                  <GridItem >
                <Button color="primary">Add new exercise</Button>
                </GridItem>
                <GridItem >
                <Button color="primary">Add new workout</Button>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <InfiniteCalendar
    width={400}
    height={600}
    selected={today}
    disabledDays={[0,6]}
    minDate={lastWeek}
  />,
  </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
