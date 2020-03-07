import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import NavBar from './navBar'
import {createUser, resetUserError, setSignUpFalse} from '../actionCreators'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Deezer's Teasers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "pink",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "pink"
  },
}));

function SignUp(props) {
  const classes = useStyles();

  const [user, setUser] = React.useState('')
  const [confirm, setConfirm] = React.useState('')

  const handleUserChange = (e) =>{
      setUser(e.target.value)
  }

  const handleConfirmChange = (e) =>{
      setConfirm(e.target.value)
      
  }
  
  const clearUserEntries = () => {
      setUser('')
      setConfirm('')
      
  }

  const userExists = () =>{
    let error = props.userError
    if(user !== ""){
      props.resetUserError()
      console.log(props.userError)
      alert(error)
      clearUserEntries()
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(user !== confirm || (user === "" && confirm === "")){
      alert("Username's dont match, try again!")
      clearUserEntries()
    }else{
      props.createUser(user)
      props.setSignUpFalse()
    }
  }

  console.log("USER", user)
  console.log("CONFIRM", confirm)
  return (
    <div>
    <NavBar />
    <Container component="main" maxWidth="xs" style={{marginTop: "5%"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {props.userError.length > 0 ? userExists() : null}
        <form className={classes.form} onSubmit={(e)=> handleSubmit(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value = {user}
            autoFocus
            onChange={(e) => handleUserChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Confirm Username"
            label="Confirm Username"
            name="Confirm Username"
            autoComplete="Confirm Username"
            value = {confirm}
            autoFocus
            onChange={(e) => handleConfirmChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
            <Grid container>
              <Grid item style ={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "100%", marginBottom:"20%", marginTop:"5%"}}>
                  <div variant="body2" onClick={()=> props.setSignUpFalse()} style={{color: 'black'}}>
                    {"Already have an account? Sign In"}
                  </div>
              </Grid>
            </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

function msp(state){
  return {
    userError: state.userError
  }
}

const mdp ={
  createUser,
  resetUserError,
  setSignUpFalse
}

export default connect(msp, mdp)(SignUp)