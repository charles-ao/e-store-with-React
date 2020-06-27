import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if (!  modalOpen) {
                        return null
                    }
                     else { 
                         return (
                             <ModalContainer> 
                            <div id='modal' className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>Item Added to Cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: N{price}</h5>
                                        
                                        <Link to="/">
                                            <buttton className="btn btn-primary btn-sm"
                                                onClick = { ()=> closeModal()}>Store</buttton>
                                        </Link>
                                        <Link to="/cart">
                                            <buttton className="btn btn-outline-secondary btn-sm"
                                                onClick = { ()=> closeModal()}>Go to Cart</buttton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </ModalContainer>
                     )}
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items:center;
justify-content:center;
#modal {
    background: var(--mainWhite);
}

`

export default Modal;