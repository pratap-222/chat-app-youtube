import axios from "axios";
import Register from "./components/Register";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return (
    <h1 className="text-3xl">
      <Register />
    </h1>
  );
}

export default App;
