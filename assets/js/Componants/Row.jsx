import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateCart, removeFromCart } from  '../lib/actions';

const Row = (props) => {
    const { id, quantity, details } = props.item
    const product = details;
    const [qty, setQty] = useState(quantity);
    const dispatch = useDispatch()
    const update = (action) => {
      if (action === 'increment') { setQty(qty + 1) }
      if (action === 'decrement') { setQty(qty - 1) }
    }
    const remove = id => {
      dispatch(removeFromCart(id))
    }
    useEffect(() => {
      dispatch(updateCart(id, qty))
    }, [qty])
    return (
      <tr>
        <td>
          <img
            width="70"
            height="70"
            src={`/images/${product.imageName}`}
            alt={product.title}
          />
        </td>
        <td>{product.reference}</td>
        <td>{product.price}€</td>
        <td>
          <div className="btn-group btn-group-sm ml-3" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                if (qty > 1) {update('decrement') }
              }}
              >
              -
            </button>
            <span className="btn btn-light">{qty}</span>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() =>  {update('increment')}}
              >
              +
            </button>
          </div>
        </td>
        <td><strong>{(quantity *  product.price).toFixed(2)}€</strong></td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove"
             onClick={() => remove(id)}>
            X
          </button>
        </td>
      </tr>
    );
}

export default Row;