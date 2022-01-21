import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Transactions from "./Transactions";
import NewTransactionForm from "./NewTransactionForm";
import TransactionDetails from "./TransactionDetails";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:index" element={<TransactionDetails />} />
          <Route path="/transactions/new" element={<NewTransactionForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
