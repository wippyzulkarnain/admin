import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [Division, SetDivision] = React.useState('');

  const handleChange = (event) => {
    SetDivision(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Division}
          onChange={handleChange}
        >
          <MenuItem value={"Network"}>Network</MenuItem>
          <MenuItem value={"Infrastructure"}>Infrastructure</MenuItem>
          <MenuItem value={"System"}>System</MenuItem>
          <MenuItem value={"Data Center"}>Data Center</MenuItem>
          <MenuItem value={"Security"}>Security</MenuItem>
          <MenuItem value={"Managed Services"}>Managed Services</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}