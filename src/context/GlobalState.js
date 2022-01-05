import React, { createContext, useReducer, useState, useEffect } from 'react';
import AppReducer from './AppReducer'

// Инициализация состояния
const initialState = {
    transactions: []
}



// Создание контекста
export const GlobalContext = createContext(initialState);

// Компонент провйдера
export const GlobalProvaider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () =>{
        const localData = localStorage.getItem('state')
        return localData ? JSON.parse(localData) : []
    })
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    function deleteTransacrion(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransacrion(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
     
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransacrion,
        addTransacrion
    }}>
        {children}
    </GlobalContext.Provider>)
}