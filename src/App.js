import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation';
import { useState } from 'react';

const App = () => {
    let number = 2023;
    let obj = { name: 'Tuan', title: 'Learn reactjshook basic' };
    let link = "https://reactjs.org";
    let [name, setName] = useState('Tuan');
    const handleClick = () => {
        console.log('click me', name)
    }
    const handleChange = (event) => {
        setName(event.target.value);
    }
    return (
        <div className="App">
            <Navigation />
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
                <input value={name} onChange={(event) => handleChange(event)} />
                <button onClick={() => handleClick()}>Click me</button>
            </header>
        </div>
    );
}

export default App;
