import './App.css';
import Firstpage from './components/Firstpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Firstpage />} />
      <Route path="product" element={<Product />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
