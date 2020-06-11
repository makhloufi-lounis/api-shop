import axios from 'axios';
import { Redirect } from "react-router-dom";

const RETURN_URL = "http://127.0.0.1:8000/#/confirm";

export function paymentsEligibility(purchaseAmount, installmentsCount) {
    try{
        return axios.post("http://0.0.0.0:5000//payments/eligibility", {
            "payment": {
                "purchase_amount": purchaseAmount,                      // Montant de l'achat, en centimes
                "installments_counts": [installmentsCount]              // Nombres d'échéances à évaluer
            }
        })
        .then(response => { return response.data[0] });
    } catch(error) {
        window.location = "/#/error";
    }
}

export function createPayment(purchaseAmount, installmentsCount, customer) {
    try{
        return axios.post("http://0.0.0.0:5000//payments", {
            "payment": {                                                  // Infos du paiement
                "purchase_amount": purchaseAmount,                        // Montant de l'achat en centimes
                "installments_count": installmentsCount,                   // Nombre d'échéances à appliquer
                "return_url": RETURN_URL,     // URL vers laquelle renvoyer le client après paiement
                "shipping_address": {                                      // Adresse de livraison
                  "line1": customer.address,                             // Numéro et rue
                  "postal_code": customer.zipCode,                                  // Code postal
                  "city": customer.city                                          // Ville
                }
              },
              "customer": {                                                // Infos du client
                "first_name": customer.firstName,                                      // Prénom
                "last_name": customer.lastName,                                        // Nom
                "email":  customer.email,                              // Email
                "phone": customer.phone,                                    // Téléphone
              }
        })
        .then(response => { return response.data });
    } catch(error) {
        window.location = "/#/error";
    }
}

function getPaymentById(paymentId) {
    try{
        return axios.get(`http://0.0.0.0:5000/payments/${paymentId}`)
        .then(response =>  {
            return response.data;
        });
    }catch(error){
        window.location = "/#/error";
    }
    
}


export default {
    paymentsEligibility,
    createPayment,
    getPaymentById
}