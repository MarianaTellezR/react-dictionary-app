import logo from "./logo_mtr.png";
import background from "./background-dictionary.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://mariana-tellez-resendiz-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Portafolio"
        >
          <img
            src={logo}
            className="logo-mariana img-fluid"
            alt="Logo Mariana Tellez Resendiz"
          />
        </a>
      </header>
      <div
        className="Dictionary-body"
        style={{ backgroundImage: `url(${background})` }}
      >
        Hello
      </div>
    </div>
  );
}

export default App;
