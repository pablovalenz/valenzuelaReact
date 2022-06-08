import logoImg from './assets/caballo.jpg';
import NavBar from './components/NavBar'

function App() {

  const stylesH1 = {
    color: 'blue',
  }

  const stylesImg = {
    width: '500px',
    heigth: '500px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>
          Bienvenidos
        </h1>
        <br/>
        <hr/>
        <img style={stylesImg} src={logoImg} />
        <p style= { {marginTop: "120px"} }>Hola caballos</p>
      </header>
    </div>
  );
}

export default App;
