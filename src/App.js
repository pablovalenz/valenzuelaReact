import logoImg from './img/caballo.jpg';
import NavBar from './components/NavBar'

function App() {

  const stylesH1 = {
    color: 'blue',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>
          Bienvenidos
        </h1>
        <img src={ logoImg } alt="logo" />
        <br/>
        <hr/>
        <p style= { {marginTop: "120px"} }>Hola caballos</p>
      </header>
    </div>
  );
}

export default App;
