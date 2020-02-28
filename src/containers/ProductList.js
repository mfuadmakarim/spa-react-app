import React from 'react';
import {connect} from 'react-redux';
import Product from '../components/Product';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function ProductList({products, onClick}){
    if(!products.length){
        return(
            <div>No Product</div>
        )
    }
    return(
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nama Set</TableCell>
                        <TableCell>Opsi Tambahan</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products
                        .map(modif => {
                        return(
                            <Product product={modif} onClick={onClick} key={modif.idModifGrp} />
                        )
                    })}
                    </TableBody>
                </Table>
                </TableContainer>
    )
}

const mapStateToProps = state => {
    return {
      products: state.products
    };
  };
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       onClick: id => {
//         dispatch(deletePost(id));
//       }
//     };
//   };
  
  export default connect(
    mapStateToProps,
  )(ProductList);