import React, { Component } from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase" style={{color: "#52117B"}}>Products</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase" style={{color: "#52117B"}}>Name of Products</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase" style={{color: "#52117B"}}>Price(N)</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase" style={{color: "#52117B"}}>Quantity</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase" style={{color: "#52117B"}}>Clear</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase" style={{color: "#52117B"}}>Total</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartColumns;