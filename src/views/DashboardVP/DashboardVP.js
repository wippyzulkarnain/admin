import React, {Component} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Link } from 'react-router-dom'
import axios from 'axios';

import { bugs, website, server } from "variables/general.js";
import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const styles = theme => ({
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  created () {
    localStorage.setItem('nonEditTableList',"created")
  }
  assigned () {
    localStorage.setItem('nonEditTableList',"assigned")
  }
  rejected () {
    localStorage.setItem('nonEditTableList',"rejected")
  }
  inprogress () {
    localStorage.setItem('nonEditTableList',"in progress")
  }
  resolved () {
    localStorage.setItem('nonEditTableList',"resolved")
  }
  onhold () {
    localStorage.setItem('nonEditTableList',"on hold")
  }
  closed () {
    localStorage.setItem('nonEditTableList',"closed")
  }
  approved () {
    localStorage.setItem('nonEditTableList',"approved")
  }
  

  
componentDidMount(){
 axios.get("https://skripsi-backend-278308.df.r.appspot.com/dashboard-list").then(res => {
   console.log(data)
   const data = res.data
 this.setState({data})
 })
}


  render(props) {
          const { classes } = this.props;

          const { data } = this.state
    return <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card >
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>description</Icon>
              </CardIcon>
              <p className={classes.cardCategory} id = "created">Created Tickets</p>
              <h3 className={classes.cardTitle} >{data["created"]}
            </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <a  onClick={this.created}
               href="tablelist" 
                >
                List of Created Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Approved Tickets</p>
              <h3 className={classes.cardTitle}>
              {data["approved"]}
              </h3>
            </CardHeader>
            <CardFooter component={Link} to="/login" stats>
              <div className={classes.stats}>
              <a  onClick={this.approved}
               href="tablelist" 
                >
                List of Approved Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Assigned Tickets</p>
              <h3 className={classes.cardTitle}>
                {data["assigned"]}           
            </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats} >
              <a  onClick={this.assigned("assigned")}
               href="tablelist" 
                >
                List of Assigned Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={14} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Work In Progress Tickets</p>
              <h3 className={classes.cardTitle}>
              {data["in progress"]}             
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <a  onClick={this.inprogress}
               href="tablelist" 
                >
                List of Work in Progress Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
        <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Resolved Tickets</p>
              <h3 className={classes.cardTitle}>
                {data["resolved"]}      
            </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <a  onClick={this.resolved}
               href="tablelist" 
                >
                List of Resolved Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
         <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Closed Tickets</p>
              <h3 className={classes.cardTitle}>
                {data["closed"]}          
            </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <a  onClick={this.closed}
               href="tablelist" 
                >
                List of Closed Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
         <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Rejected Tickets</p>
              <h3 className={classes.cardTitle}>
                {data["rejected"]}            
            </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <a  onClick={this.rejected}
               href="tablelist" 
                >
                List of Rejected Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
         <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>note_add</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>On Hold Tickets</p>
              <h3 className={classes.cardTitle}>
                {data["on hold"]}           
            </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <a  onClick={this.onhold}
               href="tablelist" 
                >
                List of On Hold Tickets
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem> */}
        {/* <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  
    

}}

export default withStyles(styles)(Dashboard)