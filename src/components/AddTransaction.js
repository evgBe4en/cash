import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransacrion } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransacrion(newTransaction);
    }

    return (
        <>
        <h3>Добавить новую транзакцию</h3>
            <form onSubmit={onSubmit}>
             <div className="form-control">
                <label htmlFor="text">Текст..</label>
                 <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Сумма <br />
                    ("-" - расход, "+" - прибыль)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Добавить</button>
            </form>
        </>
    )
}
