import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/transactions">
          <button>All Transactions</button>
        </Link>
      </h1>
      <h1>
        <Link to="/transactions/new">
          <button>New Transaction</button>
        </Link>
      </h1>
    </nav>
  );
}
