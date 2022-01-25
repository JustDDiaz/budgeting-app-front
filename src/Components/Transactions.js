import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";
import "./Style.css";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => {
      console.log(response);
      console.log(response.data);
      setTransactions(response.data);
    });
  }, []);

  return (
    <div className="Transactions-body">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Source</th>
            <th>Amount</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
