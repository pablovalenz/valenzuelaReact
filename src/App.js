import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider} from './components/CartContext'
import Cart from './components/Cart'
import appFirebase from './services/firestore'



function App() {

  return (
    <div className="App mx-auto">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ < ItemListContainer saludo="Hola"/>} />
            <Route path="/category/:categoryId" element={ < ItemListContainer saludo="Categorias"/>} />
            <Route path="/detalle/:id" element={ < ItemDetailContainer saludo="Detalle del producto"/>} />
            <Route path="/Cart" element={< Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
        
    </div>
  );
}

export default App;
