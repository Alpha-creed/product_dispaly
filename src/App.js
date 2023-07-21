import './App.css';
import Header from './Componets/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListing from './Componets/ProductListing';
import ProductDetails from './Componets/ProductDetails';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ProductListing/>}></Route>
          <Route path="/product/:productId" element={<ProductDetails/>}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
