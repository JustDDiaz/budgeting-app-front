import NavBar from "./NavBar";
import "./Style.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="home">Welcome</div>
    </div>
  );
}
