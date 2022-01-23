import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransacrion } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    

    return (
        <li className={transaction.amount < 0 ? 'minus-li' : 'plus-li'}>
            {transaction.text} <span>{sign}₴{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransacrion(transaction.id)} className="delete-btn">x</button>
        </li> 
    )
}
