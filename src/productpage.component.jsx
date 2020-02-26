import React, {Component} from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

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
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                {items.map(item => (
                    <li key={item.name}>
                    {item.response.arrProduct.nmProduct} 
                    </li>
                ))}
                </ul>
            );
        }
    }
}
export default withStyles(useStyles)(ProductPage);