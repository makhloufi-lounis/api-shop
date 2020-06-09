
import React from 'react';
import Row from './Row';
const Table = ({ items, qty, setQty}) => {
    return (
      <table>
        <thead>
            <tr>
                <th width="200" className="bold">Produit</th>
                <th width="150" className="bold">Réference</th>
                <th width="150" className="bold">Prix</th>
                <th width="200" className="bold">Quantité</th>
                <th width="150" className="bold">Total</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => {
            return(<Row key={item.id} item={item} />)
            })}
        </tbody>
      </table>
    );
}

export default Table;