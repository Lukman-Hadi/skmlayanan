import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Home from './pages/Home';
import {Provider} from 'react-redux';
import store from './app/store';
import Survey from './pages/Survey/Index';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home></Home>
        <Survey/>
      </div>
    </Provider>
  );
}

export default App;
