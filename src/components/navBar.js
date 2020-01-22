import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import PropTypes from 'prop-types';
// import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {openSearchForm, closeSearchForm, ResetUser, SignOut} from '../actionCreators'




 function NavBar(props) {
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" style = {{backgroundColor: "pink", height: "7%"}}>
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h6" >
            Deezer's Teasers
          </Typography>
            {props.signedIn ? 
            <Tabs aria-label="simple tabs example">
              <Link to="/artists" ><Tab label="Artists" onClick={() => props.closeSearchForm()} /></Link>
              <Link to="/albums" ><Tab label="Albums" onClick={() => props.closeSearchForm()} /></Link>
              <Link to="/songs" ><Tab label="Pete's Treats" onClick={() => props.closeSearchForm()} /></Link>
              <Link to="/profile" ><Tab label="Profile" onClick={() => props.closeSearchForm()} /></Link>
              <Tab label="Search" onClick={() => props.openSearchForm()}/>
              </Tabs>
          : null}
          {/* <div style={{space: "90%"}}> */}
            {props.signedIn ? <Button color="inherit" onClick={()=>{
              props.SignOut()
              props.ResetUser()
            }}>Logout</Button> : <Button color="inherit" >Login</Button>} 
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

function msp(state){
  return{
    signedIn: state.signedIn
  }
}

const mdp ={
  openSearchForm,
  closeSearchForm,
  ResetUser,
  SignOut
}
     
export default connect(msp, mdp)(NavBar)