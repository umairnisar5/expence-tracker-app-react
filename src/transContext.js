import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTransaction = [
    {amount: 500, desc: "cash"},
    {amount: -200, desc: "book"},
    {amount: -400, desc: "camera"},

]

export const TransactionContext = createContext(initialTransaction);



export const TransactionProvider = ({children}) => {
    let [state , dispatch] = useReducer(TransactionReducer ,initialTransaction) ;

    function addTransaction (transObj){
        dispatch({
            type : "ADD_TRANSACTION",
            payload :{
                amount : transObj.amount,
                desc : transObj.desc
            },
        })
    } 
    return(
        <TransactionContext.provider value={{
            transaction : state,
            addTransaction
        }}>
        {children}

        </TransactionContext.provider>
    )
}