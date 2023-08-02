import logo from './logo.svg';
import './App.css';
import Navigation from './views/Navigation';
import { useState, useEffect } from 'react';
import Users from './views/Users';
import { Countdown, NewCountdown } from './views/Countdown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Todo from './views/Todo';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';

const App = () => {

    let number = 2023;
    let obj = { name: 'Tuan', title: 'Learn reactjshook basic' };
    // let link = "https://reactjs.org";
    let [address, setAddress] = useState('');
    let [todos, setTodos] = useState([
        { id: 1, title: 'coding', type: 'tuan' },
        { id: 2, title: 'doing homework', type: 'tuan' },
        { id: 3, title: 'learn english', type: 'tuan' },
        { id: 4, title: 'watching youtube', type: 'cha gia' },
        { id: 5, title: 'playing game', type: 'cha gia' },
    ]);
    useEffect(() => {

    }, [])
    const handleClick = async () => {
        if (!address) {
            alert('Missing job')
        }
        else {
            let id = Math.floor(Math.random() * 1000) + 1
            console.log(id)
            let newtodos = { id, title: address };
            setTodos([...todos, newtodos]);
            setAddress('');
        }
    }
    const handleChange = (event) => {
        setAddress(event.target.value);
    }
    const deleteElementJob = (id) => {
        let currentTodos = todos;
        currentTodos = currentTodos.filter(item => item.id !== id);
        setTodos(currentTodos);
    }
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navigation />
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                    <p>hello {obj.name}</p>
                    <div>
                        {obj.title} with {obj.name} in {number}
                    </div>

                </header>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path="/countdown">
                        <Countdown />
                        <NewCountdown />
                    </Route>
                    <Route path="/todo">
                        <Todo
                            todos={todos}
                            title={'All job'}
                            deleteElementJob={deleteElementJob}
                        />
                        <Todo
                            todos={todos.filter(item => item.type === 'tuan')}
                            title={'Tuan job'}
                            deleteElementJob={deleteElementJob}
                        />
                        <input value={address} onChange={(event) => handleChange(event)} />
                        <button onClick={() => handleClick()}>Click me</button>
                    </Route>
                    <Route path="/blog" exact>
                        <Blog />
                    </Route>
                    <Route path="/blog/:id">
                        <DetailBlog />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
