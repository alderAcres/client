import { Button, TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import './SignUp.css'

const styles = () => ({
    input: {
      height: 40
    },
    button: {
      height: 10,
      width: 90
    }
  });

const SignUp = withStyles(styles) (props => {
    const { classes } = props;
    return (
        <div className="signUpWrapper"> 
        <TextField 
             className="signUpForm" 
             label="Name" 
             variant="filled" 
             size="small" 
             InputProps={{className: classes.input }}
             InputLabelProps={{shrink: true}}
             onChange
             />
             <TextField 
             className="signUpForm" 
             label="Email" 
             variant="filled" 
             size="small" 
             InputProps={{className: classes.input }}
             InputLabelProps={{shrink: true}}
             onChange
             />
             <TextField 
             className="signUpForm" 
             label="Set password" 
             variant="filled" 
             size="small" 
             height="50%" 
             InputProps={{className: classes.input }} 
             InputLabelProps={{shrink: true}}
             onChange
             />  
             < Button className="signUpButton" variant="contained"size="small" onClick={console.log('test')}>
                Sign Up
            </Button>
            <hr className="lineBreak" data-content="OR"/>
            <p>SIGNINWITHGOOGLE</p>
        </div>
    )
});

export default SignUp
