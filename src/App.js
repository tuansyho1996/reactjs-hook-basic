import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {
    let number = 2023;
    let obj = { name: 'Tuan', title: 'Learn reactjshook basic' };
    let link = "https://reactjs.org";
    let [address, setAddress] = useState('');
    let [todos, settodos] = useState([
        { id: 1, title: 'coding' }
    ]);
    const handleClick = async () => {
        if (!address) {
            alert('Missing job')
        }
        else {
            let newtodos = { id: todos.length + 1, title: address };
            settodos([...todos, newtodos]);
            setAddress('');
        }
    }
    const handleChange = (event) => {
        setAddress(event.target.value);
    }
    return (
        <div className="App">
            <Navigation />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>hello {obj.name}</p>
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
                <Todo
                    todos={todos}
                />
                <input value={address} onChange={(event) => handleChange(event)} />
                <button onClick={() => handleClick()}>Click me</button>
            </header>
        </div>
    );
}

export default App;
