import React, {Component} from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,img,info,price,title,inCart}= value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-purple my-5">
                                <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Product: {title}</h2>
                                <h4 className="text-purple">
                                    <strong>
                                        price: <span>N</span>{price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Product Description: 
                                </p>
                                <p className="text-muted lead">
                                {info}
                                </p>
                                <div>
                                    <Link to="/">
                                        <buttton className="btn btn-primary btn-md">Back To Products</buttton>
                                    </Link>
                                    <buttton disabled={inCart? true : false} className="btn btn-outline-secondary btn-md" 
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id)
                                    }}>
                                            {inCart ? "In Cart": "Add to Cart"}
                                    </buttton>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}


export default Details;