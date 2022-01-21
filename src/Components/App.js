import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Transactions from "./Transactions";
import NewTransactionForm from "./NewTransactionForm";
import TransactionDetails from "./TransactionDetails";
import TransactionEdit from "./TransactionsEdit";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/new" element={<NewTransactionForm />} />
          <Route path="/transactions/:index" element={<TransactionDetails />} />
          <Route
            path="/transactions/:index/edit"
            element={<TransactionEdit />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
