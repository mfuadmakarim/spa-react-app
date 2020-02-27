import React from 'react';
import {connect} from 'react-redux';
import Product from '../components/Product';

function ProductList({products, onClick}){
    if(!products.length){
        return(
            <div>No Product</div>
        )
    }
    return(
        <div style={{'marginLeft':'75px'}}>
            <div style={{'backgroundColor':'grey'}}>
            {products
                .map(modif => {
                return(
                    <Product product={modif} onClick={onClick} key={modif.idModifGrp} />
                )
            })}
            </div>
        </div>
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