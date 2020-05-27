import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MaterialTable, { MTableToolbar } from "material-table";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios';

const styles = theme => ({
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
});


class TableList extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    data: []
  };
}

  componentDidMount() {
    axios.get("https://skripsi-backend-278308.df.r.appspot.com/ticket-list?status="+localStorage["nonEditTableList"]).then(res => {
      const data = res.data
      this.setState({
        data
      })
    })
  }
  render (props){
              const { classes } = this.props;
          const { data } = this.state
          if ( localStorage["nonEditTableList"] == "created" || localStorage["nonEditTableList"] == "approved"){
            var columns =[
      { title: "Ticket ID", field: "ticketId" }, //assume here my backend schema is brand
          { title: "Subjext", field: "subject" } ,//here model
      { title: "Status", field: "status" }, //here price
      
      // { title: "PIC", field: "pic" } ,//here model
      
      { title: "Team", field: "team" } ,//here model
          { title: "Created By", field: "creator" } ,
  
      { title: "Created At", field: "createdAt" } ,
  
    ];} else{
      var columns =[
        { title: "Ticket ID", field: "ticketId" }, //assume here my backend schema is brand
            { title: "Subjext", field: "subject" } ,//here model
        { title: "Status", field: "status" }, //here price
        
        { title: "PIC", field: "pic" } ,//here model
        
        { title: "Team", field: "team" } ,//here model
            { title: "Created By", field: "creator" } ,
    
        { title: "Created At", field: "createdAt" } ,
    
      ]
    }
  return <GridContainer>
    <GridItem>
      <MaterialTable
            title="Ticket List"

      columns={columns}  // <-- Set the columns on the table
      data={data}        // <-- Set the data on the table
      components={{
        Toolbar: props => {
          return (
            <div>
              <MTableToolbar {...props} />
            </div>
          );
        }
      }}
      actions = {
        [{
          icon: 'search',
          tooltip: 'view ticket',
          onClick: (event, rowData) => {
            localStorage.setItem("ticketId",rowData.ticketId)
            window.location.href = "CardNonEdit"
           }
        }]
      }
      options={{
        actionsColumnIndex: 5,
      }}
      
    />
    </GridItem>
    </GridContainer>
  };
}

export default withStyles(styles)(TableList)