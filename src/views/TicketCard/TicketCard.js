import React from "react";
// @material-ui/core components
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Switch from "@material-ui/core/Switch";
import Divider from '@material-ui/core/Divider';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import DropDown from "components/DropDown/approvedropdown.js";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { blackColor, hexToRgb } from "assets/jss/material-dashboard-react.js";
import avatar from "assets/img/faces/marc.jpg";
import axios from 'axios';

const styles = theme => ({
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
  },
  formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(0),
    },
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      margin : "10px 0px",
      padding : "10px"
    },
    inline: {
      display: 'inline',
    },
});

const useStyles = makeStyles(styles);


class CardDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    dropdown:[],
    dropdownstatus:[],
    comment : [],
    status : "",
    pic : "",
    addComment: ""
    };
  }
  

  handleChangeForm = event =>{
    const data = event.target.value
    this.setState({
      status: event.target.value 
   },console.log("masuk",this.state.status))

    };
    handleChangeComment = event =>{
      const data = event.target.value
      this.setState({
        addComment: event.target.value 
     },console.log("masuk",this.state.status))
  
      };
    handleChangePic = event =>{
      const data = event.target.value
      this.setState({
        pic: event.target.value 
     },console.log("masuk",this.state.pic))
  
      };
      test = () => {
        console.log(this.state)
      }
    addComment = () =>{
        const values = {
          comment : this.state.addComment,
          ticketId : localStorage["ticketId"],
          userId : localStorage["userId"]
        }

        axios.post("https://hallowed-key-280311.et.r.appspot.com/comment", values)
        .then(function (response) {
           console.log(response)
           window.location.href = "Card"

        }).catch(function (error) {
          alert('wrong payload');
        })
      }
create = () => {
const values = {
  status : this.state.status,
  ticketId : localStorage["ticketId"],
  pic : this.state.pic 
}
  axios.patch("https://hallowed-key-280311.et.r.appspot.com/ticket", values)
        .then(function (response) {
           console.log(response)
           window.location.href = "Card"

        }).catch(function (error) {
          alert('wrong payload');
        })
  
      }
componentDidMount(){
  let url = "https://hallowed-key-280311.et.r.appspot.com/ticket-details?ticketId=" + localStorage["ticketId"]
  console.log("url",url)
 axios.get(url).then(res => {
   const data = res.data[0]
 this.setState({data})
 let status = {status : data["status"] , id : localStorage["userId"]}
 console.log("STATUS" , status)
axios.post("https://hallowed-key-280311.et.r.appspot.com/status-list",status).then(res => {
  const formstatus = res.data
this.setState({ dropdownstatus : formstatus} , console.log("MASUK2",this.state.dropdownstatus))
})
 })
 
 axios.get("https://hallowed-key-280311.et.r.appspot.com/pic-list?ticketId=" + localStorage["ticketId"]).then(res => {
  const formpic = res.data
this.setState({ dropdown : formpic} , console.log("MASUK2",this.state.dropdown))
})

axios.get("https://hallowed-key-280311.et.r.appspot.com/comment?id=" + localStorage["ticketId"]).then(res => {
  const comment = res.data
this.setState({ comment : comment} , console.log("MASUK4",this.state.comment))
})

}
  render(props) {
      const { classes } = this.props;
          const { data } = this.state
          // console.log("data" , data["status"])
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={7}>
          <Card>
            <CardHeader color= "success">
              <GridItem xs={12} sm={12} md={12}>

  <h4 className={classes.cardTitleWhite}>{data["subject"]}</h4>
  <p className={classes.cardCategoryWhite}>Ticket ID : {data["ticketId"]}</p>
  <p className={classes.cardCategoryWhite}>Status : {data["status"]}</p>
  <p className={classes.cardCategoryWhite}>Pic : {data["pic"]}</p>
  <p className={classes.cardCategoryWhite}>Created At : {data["Date"]}</p>
              </GridItem>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                          
                  <TextField
          id = "filled-read-only-input"
          label="Team" 
          fullWidth
                    multiline
          InputLabelProps={{
            shrink: true,
          }}
          value={data["team"]}
          InputProps={{
            readOnly: true,
            
          }}
        />         

                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    labelText="Description"
                    id = "filled-read-only-input"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    label = "Description"
                    value={data["description"]}
                     InputProps={{
                    readOnly: true,
                     }}
                     InputLabelProps={{
                      shrink: true,
                     }}
                  />
                </GridItem>
                </GridContainer>
                
                
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    labelText="Maintenance Schedule"
                    id="filled-read-only-input"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    label = "Maintenance schedule"
                    value={data["maintenanceSchedule"]}
                    InputProps={{
                      readOnly: true,
            
                      }}
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    labelText="Downtime"
                    id="filled-read-only-input"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    label = "Downtime"
                    value={data["Downtime"]}
                    InputProps={{
                      readOnly: true,
            
                      }}
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                 <TextField
                    labelText="Affected System"
                    id="filled-read-only-input"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    label = "Affected System"
                    value = {
                      data["affectedSystem"]
                    }
                    InputProps={{
                      readOnly: true,
            
                      }}
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    labelText="Affected Infrastructure"
                    id="filled-read-only-input"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    label = "Affected Infrastructure"
                    value = {
                      data["affectedInfrastructure"]
                    }
                    InputProps={{
                      readOnly: true,
            
                      }}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Change Plan</InputLabel>
                  <TextField
                    id = "filled-multiline-flexible"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    value = {data["changePlan"]}
                    InputProps={{
                      readOnly: true,
            
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Service Impact</InputLabel>
                  <TextField
                    id = "filled-multiline-flexible"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    value = {data["serviceImpact"]}
                    InputProps={{
                      readOnly: true,
            
                      }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Rollback Plan</InputLabel>
                  <TextField
                    id = "filled-multiline-flexible"
                    formControlProps={{
                      fullWidth: true
                    }}
                    fullWidth
                    multiline
                    value = {data["rollbackPlan"]}
                    InputProps={{
                      readOnly: true,
            
                      }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>

       
          <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          // value={Division}
          // onChange={handleChange}
          displayEmpty
          onChange = {
            this.handleChangeForm
          }
          value = {this.state.status}

          className={classes.selectEmpty}
        >
            {this.state.dropdownstatus.map((row, i) => <MenuItem value={row.value}> {row.value} </MenuItem>)}  
        </Select>
      </FormControl>
      
        {/* {data["status"] == "created" && (
          <FormControl className={classes.formControl}

          >
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          // value={Division}
          // onChange={handleChange}
          value = {this.state.status}
          className={classes.selectEmpty}
          onChange = {
            this.handleChangeForm
          }
        >
          <MenuItem value="created">
            <em>Created</em>
          </MenuItem>
          <MenuItem value={"approved"}>Approve</MenuItem>
          <MenuItem value={"reject"}>Reject</MenuItem>
        </Select>
      </FormControl>
        )} */}
        { (data["status"] == "assigned" || data["status"] == "approved" || data["status"] == "in progress" || data["status"] == "on hold"  ) && (
          <FormControl className={classes.formControl}

          >
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Pic
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          // value={Division}
          // onChange={handleChange}
          value = {this.state.pic}
          className={classes.selectEmpty}
          onChange = {
            this.handleChangePic
          }
        >
            {this.state.dropdown.map((row, i) => <MenuItem value={row.userId}> {row.fullName} </MenuItem>)}   
        </Select>
      </FormControl>
        )}
                </GridItem>
                </GridContainer>
            </CardBody>
            <CardFooter>
              <GridItem xs={12} sm={12} md={3}>
              <Button color="success"
              onClick={this.create}
              >Save Changes</Button>
              {/* <Button color="success"
              onClick={this.test}
              >Test Changes</Button> */}
              </GridItem>          
               </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <Card>
            <CardHeader color= "success">
            <GridItem xs={12} sm={12} md={12}>

<h4 className={classes.cardTitleWhite}>{"Comments"}</h4>
</GridItem>
            </CardHeader>
            <List className={classes.root}>
 
        {this.state.comment.map((row, i) => 
      <ListItem alignItems="flex-start">
      <ListItemText
      primary= {row.Date}
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {row.fullName}
          </Typography>
          {` - ${row.comment}`}
        </React.Fragment>
      }
    />
     <Divider variant="inset" component="li" />
    </ListItem>

      )}  

      </List>
      <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Add Comment</InputLabel>
                  <CustomInput
                  value = {this.state.addComment}
                    id="comment"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      onChange :  this.handleChangeComment,
                    }}
                    
                  />
                   <Button color="success"
              onClick={this.addComment}
              >Add Comment</Button>
       </GridItem>

      </Card>

        
      </GridItem>
     
      </GridContainer>
      
    </div>
  );
}}
export default withStyles(styles)(CardDetails)