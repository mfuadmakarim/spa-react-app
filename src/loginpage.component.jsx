import React, {Component} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, Avatar, Grid, Box, Typography} from '@material-ui/core';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Ava from './images/2.jpg';
import Cover0 from './images/cover1.jpg';
import Cover1 from './images/cover2.jpg';
import Cover2 from './images/cover3.jpg';
import clsx from 'clsx';

const useStyles = theme => ({
    profilPicture: {
        width: '70px',
        height: '70px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textField: {
        display: 'block',
        marginBottom: '10px',
        marginTop: '20px',
        width: '100%',
        '& > div':{
            width: '100%'
        }
    },
    loginBg: {
        marginLeft: '70px',
        backgroundSize: 'cover',
        backgroundPosition: '50% center',
        height: '100vh',
    },
    cover0: {
        backgroundImage: 'linear-gradient(0deg, rgba(16,9,131,0.7903536414565826) 0%, rgba(0,212,255,0.7875525210084033) 100%), url('+Cover0+')',
    },
    cover1: {  
        backgroundImage: 'linear-gradient(0deg, rgba(16,9,131,0.7903536414565826) 0%, rgba(0,212,255,0.7875525210084033) 100%), url('+Cover1+')',
    },
    cover2: {   
        backgroundImage: 'linear-gradient(0deg, rgba(16,9,131,0.7903536414565826) 0%, rgba(0,212,255,0.7875525210084033) 100%), url('+Cover2+')',
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    loginForm: {
        backgroundColor: '#fff',
        padding: '2em',
        borderRadius: '10px',
        textAlign: 'center'
    }

});


class LoginPage extends Component{
    constructor(){
        super();
        this.state = {
            'imageIndex' : 1,
            'imageLength' : 3
        };
        this.changeBg = this.changeBg.bind(this);
    }
    onChange = value => {
        console.log("Captcha value:", value);
    }
    
    componentDidMount () {
        this.timeout = setTimeout(
            this.changeBg, 15000
        )
    }

    componentWillMount () {
        if (this.timeout) clearTimeout(this.timeout)
    }

    changeBg(){
        this.setState( function ({ imageIndex }) {
            const nextImage = ++imageIndex % 3;
            return {
                imageIndex : nextImage
            }
        }, () => {
            console.log(this.state.imageIndex);
            this.timeout = setTimeout(
                this.changeBg, 15000
            )
        })
    }
    
    render(){
        const { classes } = this.props;
        const index = this.state.imageIndex;
        const loginClass = clsx(classes.loginBg, classes['cover'+index]);
        return(
           <div className={loginClass}>
                <Grid item xs={12} md={6} className={classes.loginContainer}>
                    <Grid item xs={10} md={8} className={classes.loginForm}>
                        
                        <Avatar src={Ava} className={classes.profilPicture} />
                        <Typography component="div">
                            <Box mt='20px' mb='5px' fontSize='h5.fontSize' fontWeight="fontWeightBold">Sign in</Box>
                            <Box>to continue using this app</Box>
                            
                            <form onSubmit={this.onSubmit}>
                                <TextField
                                    className={classes.textField} 
                                    type='text' 
                                    label='Email' 
                                    variant='outlined'
                                    size='small'
                                />
                                <TextField
                                    className={classes.textField} 
                                    type='password' 
                                    label='Password' 
                                    variant='outlined'
                                    size='small'
                                />
                                <Box textAlign="right" className='text-link'>
                                <Router>
                                    <Link to="/">Lupa Password</Link>
                                    </Router>
                                </Box>
                                <Box display='flex' justifyContent='center' my='15px'>
                                <ReCAPTCHA
                                    sitekey="Your client site key"
                                    onChange={this.onChange}
                                />
                                </Box>
                                <Box my='15px'>
                                <Router>
                                    <Link to='/dashboard'>
                                        <Button 
                                            fullWidth='true'
                                            variant='contained' 
                                            color='primary'>
                                            Login
                                        </Button>
                                    </Link>
                                </Router>
                                </Box>
                            </form>
                        
                        </Typography>
                        <div>Belum punya akun?  
                            <Router>
                                <Link to="/">Daftar
                                </Link>
                            </Router>
                        </div>
                    </Grid>
                </Grid>
            </div>
       );
    }
}
export default withStyles(useStyles)(LoginPage);