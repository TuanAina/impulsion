import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/bus-stops">Bus Stops</Link>
      </nav>

      <AppRoutes />
    </div>
  );
}

export default App;
