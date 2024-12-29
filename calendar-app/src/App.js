import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Dashboard />
                <CalendarView />
            </div>
        </Provider>
    );
};

export default App;