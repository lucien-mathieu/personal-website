import tête from './images/Tête.png';
import './css/App.css';

var explorer_text = "Entrez une page"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tête} className="Tête" alt="Ma-grosse-tête" />
        <p>
          Bienvenue sur le site de Lucien !
        </p>
        <div className='Explorer'>
          <input name='explorer' placeholder={explorer_text}/>
          <button name='explorer_validate' onClick={Explore_app(explorer_text)}>
              Explorer
          </button>
        </div>
        <a
          className="App-link"
          href="https://lucien.cool"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mon futur lien
        </a>
      </header>
    </div>
  );
}

function Explore_app(page) {
}

export default App;
