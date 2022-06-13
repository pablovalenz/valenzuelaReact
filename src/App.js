import logoImg from './assets/caballo.jpg';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {


  const stylesImg = {
    width: '500px',
    heigth: '500px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo="Hola!" />
        <br/>
        <hr/>
        <img style={stylesImg} src={logoImg} />
        <p style= { {marginTop: "120px"} }>Hola caballos</p>
      </header>
    </div>
  );
}

export default App;
