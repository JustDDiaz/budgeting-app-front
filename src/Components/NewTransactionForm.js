import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NewTransactionForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [newTransaction, setNewTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((response) => setNewTransaction(response.data));
  }, []);

  const handleTextChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, newTransaction)
      .then(() => navigate("/transactions"));
  };

  return (
    <div>
      <h1>Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="text"
          value={newTransaction.date}
          placeholder="Enter a date"
          onChange={handleTextChange}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={newTransaction.name}
          placeholder="Enter source of income"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="input"
          type="number"
          value={newTransaction.amount}
          placeholder="Amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          value={newTransaction.from}
          placeholder="From"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
