import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo="Hola" />
        <br/>
        <hr/>
        <ItemDetailContainer saludo="Detalle del producto" />

      </header>
    </div>
  );
}

export default App;
