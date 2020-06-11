import React, {createContext, useState} from 'react';

export const CustomerContext = createContext ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    setCustomerContext: info => {}
});

const CustomerContextProvider = ({ children }) => {
    const customerState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
        setCustomerContext: info =>  
            setCustomer(oldState => ({
                ...oldState,
                
                [Object.keys(info)]: Object.values(info)[0]
        }))
    }

    const [customer, setCustomer] = useState(customerState);
    return (<CustomerContext.Provider value={customer}>({ children })</CustomerContext.Provider>)
}

export default CustomerContextProvider;