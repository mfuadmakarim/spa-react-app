import React, {Component} from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
const useStyles = theme => ({
    root:{
        marginLeft: '70px'
    }
});
class ProductPage extends Component{
    constructor() {
        super();
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        axios.get('https://dev-wma-051.safanci.com/public/api/admin/modifier/r1?idAccount=1&token=2d820eb4de58f6799d98a865ca206bae')
            .then(response => this.setState({
                items: response.data,
                isLoaded: true
            }))
            .catch(err => this.setState({
                error: err,
                isLoaded: true
            }))  
    }

    render(){
        const { classes } = this.props;
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <div className={classes.root}>
                    <Alert severity="warning">Error: {error.message}</Alert>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className={classes.root}>
                    <div>Loading...</div>
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    <ul>
                        {items.map(item => (
                            <li key={item.name}>
                            {item.response.arrProduct.nmProduct} 
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
export default withStyles(useStyles)(ProductPage);