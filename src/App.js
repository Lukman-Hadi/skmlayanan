import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
