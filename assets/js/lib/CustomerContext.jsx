import React, {creatContext, useState} from 'react';

export const CustomerContext = creatContext ({
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
                firstName: info.firstName,
                lastName: info.lastName,
                email: info.email,
                phone: info.phone,
                address: info.address,
                zipCode: info.firstName,
                city: info.city,
        }))
    }

    const [customer, setCustomer] = useState(customerState);
    return (<CustomerContext.Provider value={customer}>({ children })</CustomerContext.Provider>)
}

export default CustomerContextProvider;