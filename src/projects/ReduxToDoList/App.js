import React from 'react';
import NewTodo from './Components/NewTodo';
import TodoList from './Components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <div style={{marginTop: 40}}>
                    <h1>Todo list</h1>
                    <div>
                        <NewTodo />
                    </div>
                    <div>
                        <TodoList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App; 