import React,{Component,useRef} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        PT Biznet Gio Nusantara
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  
const [values, setValues] = React.useState({
  username: '',
  password: '',
});
const handleChangeForm = name => event => {
  setValues({
    ...values,
    [name]: event.target.value
  });
};

const login = () => {
      console.log(values);

  axios.post("http://localhost:3030/login",values)
    .then(function (response) {
          localStorage.clear()

      if (response.status == 201){
        console.log(response.data)
          localStorage.setItem('userId', response.data["userId"]);
          localStorage.setItem('userRole', response.data["role"]);
          localStorage.setItem('userTeam', response.data["team"]);
          localStorage.setItem('userFullName', response.data["fullName"]);
        window.location.href = "admin"
      }
    }).catch(function (error) {
      alert('Wrong Id or Username');
    })
};
  return (
       <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in 
        </Typography>
        <Typography component="h1" variant="h5">
          Biznet Gio Nusantara 
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
              values = {
                values
              }
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
              onChange = {
                handleChangeForm("username")
              }

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                login()
              }  }   }       
              onChange = {
              handleChangeForm("password")
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {/* <Button
            // type="submit"
            fullWidth
            // variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={() => history.push('/admin')}          >
            Sign In
          </Button> */}
          <Button variant ="contained" color="primary" onClick={login}>
          Login
          </Button> 
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
