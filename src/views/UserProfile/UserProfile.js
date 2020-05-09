import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from '@material-ui/core/FormHelperText';

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
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
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
    changePlan : ''
  });

  const handleChangeForm = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };
  
  const create = () => {
    console.log(values);
    axios.post("http://localhost:3030/ticket", values)
      .then(function (response) {
          alert(`Ticket Created`)
         window.location.href = "admin"

      }).catch(function (error) {
        alert('wrong payload');
      })

  }
  
console.log("wakwkawak")

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color= "primary">
              <h4 className={classes.cardTitleWhite}>Create Ticket</h4>
              <p className={classes.cardCategoryWhite}>Complete your Form</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                  id="standard-full-width"
                  label="subject"
                  placeholder="subject"
                  fullWidth
                  margin="normal"
                  onChange = {
                      handleChangeForm("subject")}
                />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                   < TextField
                   id = "standard-full-width"
                   label = "Description"
                   placeholder = "Description"
                   fullWidth
                   margin = "normal"
                   onChange = {
                     handleChangeForm("description")
                   }
                   />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value = {values["team"]}
                  onChange = {
                    handleChangeForm("team")
                  }
                  autoWidth
                >
                  <MenuItem value={"Network"}>Network</MenuItem>
                  <MenuItem value={"Infrastructure"}>Infrastructure</MenuItem>
                  <MenuItem value={"System"}>System</MenuItem>
                  <MenuItem value={"Data Center"}>Data Center</MenuItem>
                  <MenuItem value={"Security"}>Security</MenuItem>
                  <MenuItem value={"Managed Services"}>Managed Services</MenuItem>
                </Select>
                        <FormHelperText>Select Team</FormHelperText>

                </FormControl>
                </GridItem>
                </GridContainer>
                
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id = "standard-full-width"
                    label = "Maintenance Schedule"
                    placeholder = "Maintenance Schedule"
                    fullWidth
                    margin = "normal"
                    onChange = {
                      handleChangeForm("maintenanceSchedule")
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                   < TextField
                   id = "standard-full-width"
                   label = "Down Time"
                   placeholder = "Down Time"
                   fullWidth
                   margin = "normal"
                   onChange = {
                     handleChangeForm("downtime")
                   }
                   />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                   < TextField
                   id = "standard-full-width"
                   label = "Affected System"
                   placeholder = "Affected System"
                   fullWidth
                   margin = "normal"
                   onChange = {
                     handleChangeForm("affectedSystem")
                   }
                   />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                 < TextField
                 id = "standard-full-width"
                 label = "Affected Infrastructure"
                 placeholder = "Affected Infrastructure"
                 fullWidth
                 margin = "normal"
                 onChange = {
                   handleChangeForm("affectedInfrastructure")
                 }
                 />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Change Plan</InputLabel>
                  <CustomInput
                  value = {values["changePlan"]}
                    id="change-plan"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      onChange :  handleChangeForm("changePlan")
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={create} >Create Ticket</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
