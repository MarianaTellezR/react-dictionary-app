import logo from "./logo_mtr.png";
import background from "./background-dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";

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
        <main>
          <Dictionary />
        </main>
        <footer>
          <p>
            Designed and coded by{" "}
            <a
              href="https://www.linkedin.com/in/mariana-tellez-resendiz/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              Mariana Tellez Resendiz
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MarianaTellezR/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
