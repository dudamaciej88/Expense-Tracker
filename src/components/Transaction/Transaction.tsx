import React, { useContext } from "react";
import { Li } from "./Transaction.style";
import { GlobalContext } from "../../context/GlobalState";

type Props = {
  transaction: Transaction;
};

const Transaction: React.FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <Li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction!(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </Li>
  );
};

export default Transaction;
