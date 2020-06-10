import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const CheckoutPage = () => {
    const [isValid, setIsValid] = useState(false);
    const validate = () => {
        let errros = [];
        const inputs = document.querySelectorAll(".form-control");
        inputs.forEach(input => {
            !input.value ? errros.push(input) : errros.length && errros.pop();
        });
        setIsValid(!errros.length);
    }


    return (
        <>
            <div className="col-sm-6 offset-3 mt-5">
                <h2><i className="fa fa-truck mr-1"></i>Adresse de Livraison</h2>
                <br />
                <form className="form-checkout">
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Prénom"
                                property=""
                                defaultValue="John" />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nom"
                                property=""
                                defaultValue="Doe" />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Address mail"
                            property=""
                            defaultValue="john@doe.com" />
                            <small id="emailHelp" className="form-text color-red">
                                Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                            </small>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Téléphone"
                                property=""
                                defaultValue="+33123456789" />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Adresse"
                            property=""
                            defaultValue="foo" />
                    </div>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Code postal"
                                property=""
                                defaultValue="75000" />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ville"
                                property=""
                                defaultValue="Paris" />
                        </div>
                    </div>
                    <br />
                    <button
                        type="button"
                        className={`btn btn-success btn-block bg-green ${ !isValid && 'disabled'}`}
                        onClick={ !isValid ? (e) =>  {e.PreventDefault() } :  () => {return true} }>
                        <a href="#" className="white">
                            Confirmer
                        </a>
                    </button>
                </form>
            </div>
      </>
    );
}

export default CheckoutPage;

