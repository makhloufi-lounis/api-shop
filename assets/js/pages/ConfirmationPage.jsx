import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetCart } from "../lib/actions";
import queryString from 'query-string';
import AlmaApiClient from '../lib/AlmaApiClient';

const ConfirmationPage = (props) => {    
    const parsed = queryString.parse(location.search);
    const [paymentId, setPaymentId] = useState(parsed.pid);
    const [customer, setCustomer] = useState([]);
    const [shippingAddress, setShippingAddress] = useState([]);
    const [paymentState, setPaymentState] = useState('not_started');
    const dispatch = useDispatch();    
    
    
    const getPayment = async () => {
       const paymentData = await AlmaApiClient.getPaymentById(paymentId);
       const {customer, shipping_address, state} = paymentData;
       setCustomer(customer);
       setShippingAddress(shipping_address);
       setPaymentState(state);
       if(state === 'in_progress'){
            dispatch(resetCart());
       }
    }
    useEffect(() => {
        getPayment();            
    }, [paymentId])

    return (
        <>
            <div className="jumbotron text-center">
                <h2>Merci pour votre visite!</h2>
                <hr />
                <div className="mt-5">
                    <p className="lead">
                        <strong>Votre commande est en route vers votre domicile</strong>
                        <br /> <br />
                        <Link className="btn btn-primary" to="/" onClick={() => reset()}>
                            Retour vers la page d'accueil
                        </Link>
                    </p>
                    <br />

                    {
                        (paymentState === 'in_progress') && 
                        <ul className="address">
                            <li>{(customer.first_name).toUpperCase()}, {customer.last_name}</li>
                            <li>{shippingAddress.line1}</li>
                            <li>{shippingAddress.postal_code}, {shippingAddress.city}</li>
                        </ul>
                    }

                    {
                        (paymentState !== 'in_progress') && 
                        <div className="alert alert-danger text-center w-50" style={{margin:"auto"}}>
                            Paiement échoué
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default ConfirmationPage;