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
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={Division}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>Created</em>
          </MenuItem>
          
          <MenuItem value={"Approve"}>Approve</MenuItem>
          <MenuItem value={"Reject"}>Reject</MenuItem>
            
        </Select>
      </FormControl>
    </div>
  );
}