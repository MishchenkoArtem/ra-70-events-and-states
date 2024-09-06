import './App.css';
import './components/Toolbar/toolbar.css';
import './components/portfolio/portfolio.css';
import './components/ProjectList/projectList.css';

import Portfolio from './components/portfolio/Portfolio';

function App() {
    return (
        <div className="page">
            <Portfolio />
        </div>
    );
}

export default App;
