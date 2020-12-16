import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Home from './pages/Home';
import {Provider} from 'react-redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import store from './app/store';
import Survey from './pages/Survey/Index';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route path="/survey" component={Survey}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
