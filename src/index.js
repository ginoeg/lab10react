import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Producto from "./producto";
import Detalles from "./detalles";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  
  <BrowserRouter history={history}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="producto" element={<Producto />} />
        <Route path="producto/:id" element={<Detalles />}/>
       
      </Route>
    </Routes>
  </BrowserRouter>
);