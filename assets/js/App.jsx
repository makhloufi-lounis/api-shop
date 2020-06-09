import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from './lib/actions';
import HomePage from './pages/HomePage';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Componants/Navbar';
import CartPage from './pages/CartPage';
import Default from './pages/Default';
import Footer from './Componants/Footer'

const App = (props) => {
    const { items, saveLocalStorage } = props;
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    
    const add = (product, quantity) => {
        setCount(count + qty)
        dispatch(addtoCart(product, quantity))
    }

    useEffect(()=> {
        saveLocalStorage(items)
      }, [items]
    );

    return (
        <>
            <HashRouter>
                <Navbar />            
                <main>
                    <Switch>
                        <Route exact path="/"> 
                            <HomePage qty={qty} setQty={setQty} add={add}/>
                        </Route>
                        <Route path="/cart">
                            <CartPage qty={qty} setQty={setQty} />
                        </Route>
                        <Route component={Default} />
                                    
                    </Switch>
                </main>
                <Footer />
            </HashRouter>
        </>
    )
};

export default App;