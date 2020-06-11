import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Componants/Card';
import ApiShop from '../lib/ApiShop';


const HomePage = ({qty, setQty, add}) => {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        ApiShop.setProductById(1, setProduct);
    }, [])

    return ( 
            <>                
                <Card product={product} qty={qty} setQty={setQty} add={add}/>            
            </>      
    );
}
 
export default HomePage;