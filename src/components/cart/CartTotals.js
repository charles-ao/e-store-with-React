import React  from 'react';
import { Link } from "react-router-dom";


function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <div>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                        type="button"
                                        onClick={()=>clearCart()}>
                                    Empty Cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">subtotal:</span>
                                <strong>N{cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">Tax:</span>
                                <strong>N{cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">TOTAL:</span>
                                <strong>N{cartTotal}</strong>
                            </h5> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default CartTotals;