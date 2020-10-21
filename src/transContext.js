import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 500, desc: "cash" },
    { amount: 20, desc: "book" },
    { amount: 100, desc: "camera" }

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}

        </TransactionContext.Provider>
    )
}