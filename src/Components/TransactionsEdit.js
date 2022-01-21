import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TransactionEdit() {
  const { index } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    source: "",
    amount: "",
    from: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => setTransaction(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/${index}`));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: [event.target.value] });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="source">Source</label>
        <input
          id="source"
          value={transaction.source}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
