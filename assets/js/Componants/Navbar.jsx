import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = useSelector(state => state.items);

    const count = () => {
        let totalCount = 0;
        items.map(item => {
            totalCount += item.quantity;
        });
        return totalCount;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
            <i className="fa fa-shopping-cart fa-3x" style={{color : 'rgb(255, 159, 26)'}}></i>
            <Link to="/" className="navbar-brand ml-2">
                Mes Courses en Ligne
            </Link>
            
            <button 
                className="navbar-toggler" 
                type="button" data-toggle="collapse" 
                data-target="#navbarColor02" 
                aria-controls="navbarColor02" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarColor02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/cart" className="btn btn-xs btn-link p-0" style={{fontSize : '25px'}}>
                            <i className="fa fa-lock fa-3x" style={{color : '#ff9f1a'}}></i>
                            <span 
                                className="badge badge-notify" 
                                style={{fontSize : '16px', color: '#fff'}}>{count() > 0 && count()}</span>
                        </Link>                        
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;