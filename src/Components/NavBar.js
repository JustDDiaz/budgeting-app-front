import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

export default function NavBar() {
  const URL = process.env.REACT_APP_API_URL;
  const [transactions, setTransactions] = useState([]);
  let total = 0;

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => setTransactions(response.data));
  }, []);

  return (
    <nav className="nav">
      <h1>
        <Link to="/transactions">
          <button className="button">All Transactions</button>
        </Link>
      </h1>
      <h1>
        <Link to="/transactions/new">
          <button className="button">New Transaction</button>
        </Link>
      </h1>
      <div>
        {transactions.map((transaction) => {
          total += Number(transaction.amount);
        })}
        <h2 className="number">
          Total Amount:
          {total >= 0 ? (
            <div className="number-green">{total}</div>
          ) : (
            <div className="number-red">{total}</div>
          )}
        </h2>
      </div>
    </nav>
  );
}
