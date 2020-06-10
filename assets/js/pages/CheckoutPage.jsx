import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { CustomerContext } from '../lib/CustomerContext';

export const CheckoutPage = () => {
    const [isValid, setIsValid] = useState(false);
    const value = useContext(CustomerContext);
    const {
        firstName,
        lastName,
        email,
        phone,
        address,
        zipCode,
        city,
        setCustomerContext
    } = value;
    const validate = () => {
        let errros = [];
        const inputs = document.querySelectorAll(".form-control");
        inputs.forEach(input => {
            !input.value ? errros.push(input) : errros.length && errros.pop();
        });
        setIsValid(!errros.length);
    }

    useEffect(() => {
        validate()
    })

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
                                name="firstName"
                                className="form-control"
                                placeholder="Prénom"
                                property=""
                                defaultValue={ firstName } 
                                onChange={e =>  setCustomerContext({ [e.target.name]: e.target.value})} />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Nom"
                                property=""
                                defaultValue={ lastName } 
                                onChange={e =>  setCustomerContext({ [e.target.name]: e.target.value})} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Address mail"
                            property=""
                            defaultValue={ email }
                            onChange={e =>  setCustomerContext({ [e.target.name]: e.target.value})} />
                            <small id="emailHelp" className="form-text color-red">
                                Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                            </small>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Téléphone"
                                property=""
                                defaultValue={ phone }
                                onChange={e =>  setCustomerContext({ [e.target.name]: e.target.value})} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Adresse"
                            property=""
                            defaultValue={ address } 
                            onChange={e =>  setCustomerContext({ [e.target.name]: e.target.value})} />
                    </div>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                name="zipCode"
                                className="form-control"
                                placeholder="Code postal"
                                property=""
                                defaultValue={ zipCode } 
                                onChange={e =>  setCustomerContext({ [e.target.name]: e.target.value})} />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                placeholder="Ville"
                                property=""
                                defaultValue={ city } 
                                onChange={e =>  setUserProfileContext({ [e.target.name]: e.target.value})}/>
                        </div>
                    </div>
                    <br />
                    <button
                        type="button"
                        className={`btn btn-success btn-block bg-green ${ !isValid && 'disabled'}`}
                        onClick={ !isValid ? (e) =>  { e.PreventDefault() } :  () => {return true} }>
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

