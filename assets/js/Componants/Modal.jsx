import React from 'react';
import { Link, Redirect } from "react-router-dom";

const Modal = ({ product, qty }) => {
    
    const closeModal = (e) => {        
        $('#modalCart').modal ( "hide" );
    }

    return (
        <div
            className="modal fade"
            id="modalCart"
            data-backdrop="static"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title color-green" id="staticBackdropLabel">
                            <i className="fa fa-check"></i>
                            <strong className="ml-2">Ajouté au panier</strong>
                        </h4>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    width="150"
                                    height="150"
                                    src={'/images/image1.jpg'}
                                    alt={product.title}
                                />
                            </div>

                            <div className="col-sm">
                                <h5 className="mt-3" id="staticBackdropLabel">
                                        {product.title} : 
                                        <strong className="color-red price">
                                            {product.price}€ x {qty} = {product.price * qty}€
                                        </strong>
                                </h5>
                                <p className="mt-3">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <Link to="/cart" className="btn btn-success" onClick={(e) => closeModal(e)}>Panier</Link>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal">
                                Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  export default Modal;