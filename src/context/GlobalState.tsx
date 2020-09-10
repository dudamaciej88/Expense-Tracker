import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

type ContextType = {
  transactions: Array<Transaction>;
  deleteTransaction?: (id: number) => void;
  addTransaction?: (transaction: Transaction) => void;
};

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext<ContextType>(initialState);

export const GlobalProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
