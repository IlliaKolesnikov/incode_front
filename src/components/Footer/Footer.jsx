import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components


import dashboardRoutes from "routes/dashboard.jsx";
import authRoutes from "routes/auth.jsx"
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer style={{marginTop: "5vh"}}className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list} >
                {props.isAuth ? dashboardRoutes.map((item, index)=>{
                    return <ListItem key={index} className={classes.inlineBlock}>
                      <Link to={item.path} className={classes.block}>
                      {item.sidebarName}
                    </Link>
                    </ListItem>
                  }) : authRoutes.map((item, index)=>{
                    return <ListItem key={index} className={classes.inlineBlock}>
                      <Link to={item.path} className={classes.block}>
                      {item.sidebarName}
                    </Link>
                    </ListItem>
                  })}
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="" className={classes.a}>
             Illia Kolesnikov
            </a>, made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
