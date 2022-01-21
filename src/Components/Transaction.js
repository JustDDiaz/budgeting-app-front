import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <Link to={`/transactions/${index}`}>
        <td>{transaction.source}</td>
      </Link>
      <td>{transaction.amount}</td>
    </tr>
  );
}
