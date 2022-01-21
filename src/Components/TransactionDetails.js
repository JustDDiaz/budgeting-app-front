import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/transactions/${index}`).then((response) => {
      setTransaction(response.data);
    });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${URL}/transactions/${index}`)
      .then(() => navigate(`/transactions`));
  };

  return (
    <section>
      <tr>
        <td>Date: {transaction.date}</td>
        <td>Name: {transaction.source}</td>
        <td>Amount: {transaction.amount}</td>
        <td>From: {transaction.from}</td>
      </tr>
      <div>
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
}
