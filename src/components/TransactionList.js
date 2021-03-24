import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  //destructuring - transactions.map
  const { transactions } = useContext(GlobalContext);

  return (
    // need to specify specific transaction from Transaction.js =>
    //          transaction.map.... transaction={transaction} 
    //          it is mapping through transactions which we got from the state - GlobalContext
    // as a result we get a list of the results - need pass a key
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
