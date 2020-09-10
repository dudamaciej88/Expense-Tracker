import React, { useContext } from "react";
import { List } from "./TransactionList.style";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "../Transaction/Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <List>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </>
  );
};

export default TransactionList;
