import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Componants/Card';


const HomePage = ({qty, setQty, add}) => {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/products/1")
        .then(response => setProduct(response.data))
    }, [])

    return ( 
            <>                
                <Card product={product} qty={qty} setQty={setQty} add={add}/>            
            </>      
    );
}
 
export default HomePage;