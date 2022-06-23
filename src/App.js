import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App mx-auto">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ < ItemListContainer saludo="Hola"/>} />
            <Route path="/detalle/:id" element={ < ItemDetailContainer saludo="Detalle del producto"/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
