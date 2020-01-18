import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    '& .outlined-number':{
      width: 30,
    },
    },
  
}));

export default function ReviewForm(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  }
  console.log("PROPS",props)
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          // className = {classes.root}
          id="outlined-number"
          label="Rating (out of 10)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows="2"
          defaultValue=""
          variant="outlined"
        />
        <Button type ="submit" variant="outlined" style={{color: "pink"}} >
            Submit
        </Button> 
        <Button variant="outlined" style={{color: "pink"}} onClick={()=> props.closeForm()}>
            Close
        </Button> 
      </div>
    </form>
  );
}