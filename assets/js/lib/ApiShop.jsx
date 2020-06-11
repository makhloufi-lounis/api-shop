import axios from 'axios';

export function setProductById(id, setProduct) { 
    
    try{
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
        .then(response =>  {
            setProduct(response.data);
        });
    }catch(error){
        window.location = "/#/error";
    }
}

export default {
    setProductById,
}