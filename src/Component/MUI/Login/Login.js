import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        marginTop: 30,
        // flexWrap: 'wrap',
        textAlign: 'center',
        // backgroundColor: 'lightBlue',
        // border:'1px solid black',    
    },
    paper: {
        margin: '0 auto',
        width: 400
    },
    textField: {
        marginBottom: 10,
        padding: '0 10'
    },
    login: {
        margin: 0,
        fontSize: 24,
        fontWeight: 'bold'
    }
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper} >
                {/* <h2 style={{ margin: '5 0 0 0' }}>Login</h2> */}
                <p className={classes.login}>Login</p>
                <TextField fullWidth={true} className={classes.textField} label="Enter Email" />
                <TextField fullWidth={true} className={classes.textField} label="Enter Password" type='password' />
                <br />
                <Button className={classes.textField} variant="contained" color="primary">
                    Login
                </Button>
            </Paper>
        </div>
    );
}
