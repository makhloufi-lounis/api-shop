import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Table from '../Componants/Table'

const CartPage = ({qty, setQty}) => {
    const items = useSelector(state => state.items)
    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const shipping = 10.00

    useEffect(() => {
      let totals = items.map(item => {
        return item.quantity * item.details.price
      })
      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
      setTotal(subTotal + shipping)
    }, [items, subTotal, total])
    return (
      <>
        <div className="container mt-5">
        <div className="row">
          <div className="col-sm cart">
              <Table items={items} qty={qty} setQty={setQty}/>
          </div>

          <div className="col-sm-3 order-summary mt-4">
            <ul className="list-group">
              <li className="list-group-item bold">Récapitulatif de la commande</li>
              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left bold">Sous Total</li>
                  <li className="text-right">{subTotal.toFixed(2)}€</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left bold">Livraison</li>
                  <li className="text-right">{shipping.toFixed(2)}€</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> >> Ajouter un code de coupon</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left bold">Total</li>
                    <li className="text-right">{subTotal == 0.00 ? "0.00" : total.toFixed(2)}€</li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-light btn-lg btn-block mt-1 bg-green"
              disabled={!items.length}           
            >
              <a href="#" className="color-white">
                Passer la commande
              </a>
            </button>
          </div>
        </div>
        </div>
      </>
    );
}

export default CartPage;