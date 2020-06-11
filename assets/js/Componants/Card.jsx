import React from 'react';
import Modal from './Modal';

const Card = (props) => {

    const {product, qty, setQty, add} = props;    

    return (  
        <>
        <div className="container pt-3">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content text-center">
                                <div className="tab-pane active" id="pic-1">
                                    <img src={'/images/image1.jpg'} className="max-height" style={{ height: '500px' }} />
                                </div>
                                <div className="tab-pane" id="pic-2"><img style={{ height: '500px' }} src={'/images/image2.jpg'} /></div>
                                <div className="tab-pane" id="pic-3"><img style={{ height: '500px' }} src={'/images/image3.jpg'} /></div>
                            </div>
                            
                            <ul className="preview-thumbnail nav nav-tabs justify-content-center">
                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img style={{ height: '60px' }} src={'/images/image1.jpg'} /></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img style={{ height: '60px' }} src={'/images/image2.jpg'} /></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img style={{ height: '60px' }} src={'/images/image3.jpg'} /></a></li>
						    </ul>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{product.title}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="review-no">41 avis</span>
                            </div>
                            <h4 className="mt-3">description</h4>
                            <p className="product-description">{product.description}</p>
                            <h4 className="price mt-2">prix actuel: <span>{product.price}€</span></h4>
                            <p className="vote"><strong>91%</strong> des acheteurs ont apprécié ce produit! <strong>(87 votes)</strong></p>
                            <h5 className="">couleurs:
							    <span className="color gray" data-toggle="tooltip" title="Not In store"></span>
                                <span className="color black"></span>
                                <span className="color blue"></span>
                            </h5>

                            <h5 className="mt-3">
                                Quantité :
                                <div className="btn-group btn-group-sm ml-3">
                                    <button
                                        style={{ borderRadius: '.25rem' }}
                                        onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                        type="button"
                                        className="btn btn-dark">
                                        -
                                </button>
                                    <span className="btn btn-light qty">{qty}</span>
                                    <button
                                        style={{ borderRadius: '.25rem' }}
                                        onClick={() => setQty(qty + 1)}
                                        type="button"
                                        className="btn btn-dark">
                                        +
                                </button>
                                </div>
                            </h5>
                            <p className="mt-4">
                                <i className="fa fa-truck"></i> Livraison sous 20 jours
                            </p>
                            <div className="action mt-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <button
                                            className="add-to-cart btn btn-default"
                                            type="button"
                                            onClick={() => add(product, qty)}
                                            data-toggle="modal" data-target="#modalCart">
                                            <i className="fa fa-cart-arrow-down fa-x3" aria-hidden="true"></i>
                                            <span className="ml-2">Ajouter au panier</span>
                                        </button>
                                    </div>
                                    <div className="col-md-7">
                                        <strong>Possibilité de payer en 3 ou 4 fois :</strong><br/>
                                        3 fois a partir de <span className="color-red price">100€</span><br/>
                                        4 fois a partir de <span className="color-red price">200€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal product={product} qty={qty}/>
        </>
    );
}
 
export default Card;