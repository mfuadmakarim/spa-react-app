import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, Avatar, Grid, Box, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ProductList from './ProductList';

const useStyles = theme => ({
    root: {
        marginLeft: '70px'
    }
});

class ProductPage extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <ProductList/>
            </div>
        )
    }
}
export default withStyles(useStyles)(ProductPage);