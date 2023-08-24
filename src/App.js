// import logo from "./logo_mtr.png";
// import background from "./backgroundflowers.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <div className="Dictionary-body">
        <main>
          <Dictionary defaultKeyword="sunset" />
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
