import { useExploreApp } from '../utils/navigation';
import tête from '../images/Tête.png';
import '../css/App.css';


const explorer_placeholder = "Entrez une page"


function Home() {
    const Explore_app = useExploreApp();
    return (
        <div className="App">
        <header className="App-header">
            <img src={tête} className="Tête" alt="Ma-grosse-tête" />
            <p>
            Bienvenue sur le site de Lucien !
            </p>
            <div className='Explorer'>
            <input name='explorer' placeholder={explorer_placeholder} id="input_explorer"/>
            <button name='explorer_validate' onClick={Explore_app}>
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

export default Home;