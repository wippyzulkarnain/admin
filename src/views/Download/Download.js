import React from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import DropDown from "components/DropDown/dropdown.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { blackColor, hexToRgb } from "assets/jss/material-dashboard-react.js";
import avatar from "assets/img/faces/marc.jpg";
import axios from 'axios';

const styles = {
  // formControl : {
  //   width : 40
  // },
  cardCategoryWhite: {
    color: "#000",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#000",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);


export default function UserProfile() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    userId: localStorage["userId"],
    subject:'',
    description :'',
    team : '',
    maintenanceSchedule : '',
    downtime : '',
    affectedSystem : '',
    affectedInfrastructure : '',
    changePlan : '',
    rollbackPlan : '' ,
    serviceImpact : ''
  });


  const create = () => {
    console.log(values);
    axios.post("https://hallowed-key-280311.et.r.appspot.com/ticket", values)
      .then(function (response) {
          alert(`Ticket Created`)
         window.location.href = "admin"

      }).catch(function (error) {
        alert('wrong payload');
      })

  }
  

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color= "success">
              <h4 className={classes.cardTitleWhite}>Download Report</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Start"
                  type="date"
                  defaultValue="2020-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="End"
                  type="date"
                  defaultValue="2020-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="success" onClick={create}  >Download Report</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
