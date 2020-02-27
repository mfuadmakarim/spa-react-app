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
        axios.get('https://dev-wma-051.safanci.com/public/api/admin/modifier/r1?idAccount=1&token=AV9lHRev255XYmqs6ZjY8T4xSWs0oxInT63rDykFJK1ARmjH0iLhhCt57zox')
        // .then(response => {console.log(response.data.response.arrProduct)})
            .then(response => this.setState({
                items: response.data.response.arrProduct,
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
                            <li key={item.idProduct}>
                            {item.nmProduct} 
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
export default withStyles(useStyles)(ProductPage);