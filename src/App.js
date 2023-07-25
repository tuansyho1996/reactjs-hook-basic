import logo from './logo.svg';
import './App.css';

const App = () => {
    let name = 'tuan';
    let number = 2023;
    let obj = { name: 'Tuan', title: 'Learn reactjshook basic' };
    let link = "https://reactjs.org"
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>hello {name}</p>
                <div>
                    {obj.title} with {obj.name} in {number}
                </div>
                <a
                    className="App-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
