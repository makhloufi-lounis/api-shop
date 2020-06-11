import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import AlmaApiClient from '../lib/AlmaApiClient';
import { CustomerContext } from '../lib/CustomerContext';

export const CheckoutPage = () => {

    const items = useSelector(state => state.items);
    const [subTotal, setSubTotal] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    const [eligible, setEligible] = useState(true);
    const [purchaseAmount, setPurchaseAmount] = useState(0.00);
    const shipping = 10.00;
    const [isValid, setIsValid] = useState(false);
    const [installmentsCount, setInstallmentsCount] = useState(3);

    const customer = useContext(CustomerContext);
    const {
        firstName, 
        lastName, 
        email, 
        phone,
        address, 
        zipCode, 
        city, 
        setCustomerContext
    } = customer
    
    const validate = () => {
        let errros = [];
        const inputs = document.querySelectorAll(".form-control");
        inputs.forEach(input => {
            !input.value ? errros.push(input) : errros.length && errros.pop();
        });
        setIsValid(!errros.length);
    }

    useEffect(() => {
        let totals = items.map(item => {
            return item.quantity * item.details.price
        });
        setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
        setTotal(subTotal + shipping);
        setPurchaseAmount(parseInt(Math.round(total * 100)));
        validate();
    }, [customer, installmentsCount, items, subTotal, total]);

    const handleChanche = (event) => {
        let currentTarget = event.target;
        const {name, value} =  currentTarget ;
        setCustomerContext({ [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const data = await AlmaApiClient.paymentsEligibility(purchaseAmount, installmentsCount);
        setEligible(data.eligible);
        if(true === eligible) {
            const data = await AlmaApiClient.createPayment(purchaseAmount, installmentsCount, customer);
            window.location = data.url;
        }         
    }

    return (
        <>
            <div className="col-sm-6 offset-3 mt-5">
                <h2><i className="fa fa-truck mr-1"></i>Adresse de Livraison</h2>
                <br />
                <div className={`alert alert-danger text-center ${!eligible ? 'd-block' : 'd-none'}`} role="alert">
                    Paiement échoué: Alma est disponible à partir de 100€
                </div>
                <form className="form-checkout" method="post" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Prénom"
                                value={ customer.firstName } 
                                onChange={handleChanche} />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Nom"
                                value={ customer.lastName } 
                                onChange={handleChanche} />
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
                            value={ customer.email }
                            onChange={handleChanche} />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Téléphone"
                                value={ customer.phone }
                                onChange={handleChanche} />
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
                            value={ customer.address } 
                            onChange={handleChanche} />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                name="zipCode"
                                className="form-control"
                                placeholder="Code postal"
                                value={ customer.zipCode } 
                                onChange={handleChanche} />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                placeholder="Ville"
                                value={ customer.city } 
                                onChange={handleChanche} />
                        </div>
                    </div>
                    <br/>
          
                    <div className="form-group">
                        <fieldset className="content-box p-4" style={{border:"1px solid #ced4da"}}>
                            <legend className="visually-hidden" style={{width:"45%", marginLeft:"20px", paddingLeft:"5px"}}>Choisissez un moyen de paiement</legend>
                            <div className="radio" style={{border:"1px solid #ced4da", padding: "10px"}}>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="installmentsCount"
                                        value={installmentsCount} 
                                        checked={installmentsCount === 3} 
                                        onChange={e =>  {setInstallmentsCount(3);}} />
                                    <img className="ml-2" src={'/images/3x.png'} />
                                    <div style={{display:'inline-block', right:"50px"}} className="position-absolute">
                                        <img className="ml-2" src={'/images/iconfinder__Visa_1156753.png'} style={{ height: '20px' }}/>
                                        <img className="ml-2" src={'/images/iconfinder_206_Mastercard_Credit_Card_4518756.png'} style={{ height: '20px' }}/>
                                        <img className="ml-2" src={'/images/iconfinder_Americanexpress_american_express_debit_2908221.png'} style={{ height: '20px' }}/>
                                    </div>
                                </label>
                            </div>
                            <br/>
                            <div className="radio" style={{border:"1px solid #ced4da", padding: "5px"}}>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="installmentsCount"
                                        value={installmentsCount} 
                                        checked={installmentsCount === 4} 
                                        onChange={ e =>  {setInstallmentsCount(4)}} />
                                    <img className="ml-2" src={'/images/4x.png'} />
                                    <div style={{display:'inline-block', right:"50px"}} className="position-absolute">
                                        <img className="ml-2" src={'/images/iconfinder__Visa_1156753.png'} style={{ height: '20px' }}/>
                                        <img className="ml-2" src={'/images/iconfinder_206_Mastercard_Credit_Card_4518756.png'} style={{ height: '20px' }}/>
                                        <img className="ml-2" src={'/images/iconfinder_Americanexpress_american_express_debit_2908221.png'} style={{ height: '20px' }}/>
                                    </div>
                                </label>
                            </div>
                        </fieldset>
                    </div>  
                    <div className="row">
                        <div className="col-6">
                            <Link 
                                to="/cart"
                                className="btn btn-link">
                                   {`<`} Revenir au panier
                            </Link>
                        </div>
                        <div className="col-6">
                            <button 
                                type="submit"
                                className={`btn btn-success btn-block bg-green ${ !isValid && 'disabled'}`}>
                                    Confirmer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
      </>
    );
}

export default CheckoutPage;

