import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import TotalOrderPage from "./pages/TotalOrderPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<OrderPage />}></Route>
          <Route path="/orders" exact element={<TotalOrderPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
