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
import NavBar from './navBar'
import { connect } from 'react-redux';
import {SignInUser, SetUser, GetUserFavs, setSignUp} from '../actionCreators'

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



function SignIn(props) {
    const classes = useStyles();
    const [user, setUser] = React.useState('')
    
    const handleChange = (e) =>{
        setUser(e.target.value)
    }

    const checkUser = (e)=> {
        e.preventDefault()
        if(props.users.filter((u) => u.username.includes(user)).length > 0 && user !== ""){
            let loginUser = {}
            console.log(props.users.filter((u) => u.username.includes(user))[0])
            loginUser = props.users.filter((u) => u.username.includes(user))[0]
            console.log(loginUser)
            if(loginUser){
              props.SignInUser()
              props.SetUser(loginUser)
              // console.log(props.user)
              props.GetUserFavs(loginUser)
            }
        }else{
          alert("Username not found!")
        }
    }

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
          Sign in
        </Typography>
        <form className={classes.form} onSubmit = {(e) => checkUser(e)} noValidate>
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
            onChange={(e) => handleChange(e)}
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
                  <div variant="body2" onClick={()=> props.setSignUp()} style={{color: 'black'}}>
                    {"Don't have an account? Sign Up"}
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
    return{
        users: state.users,
        user: state.user
    }
}

const mdp ={
    SignInUser,
    SetUser,
    GetUserFavs,
    setSignUp
}

export default connect(msp, mdp)(SignIn)