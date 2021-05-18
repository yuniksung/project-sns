import React, { useState} from 'react'
import { Grid, Container, Typography, Paper, Avatar, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'

import Input from './Input'
import Icon from './Icon'

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit =() => {

    }

    const handleChange =() => {

    }

    const switchMode =()=>{
        setIsSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        console.log(res);
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful. Try Again Later");
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId ="977792555071-nm6ku73tqct407do31k4lr36893g788a.apps.googleusercontent.com"
                        render={(renderProps) =>(
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSucess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
