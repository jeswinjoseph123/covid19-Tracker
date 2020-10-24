
import React ,{Component}from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './App.css';
import Header from '../src/Components/Header';
import India from './Components/India.js';
import World from '../src/Components/World';
import State from '../src/Components/States';
import{
  BrowserRouter as Router,
  Link,
  Route,
  Switch 
} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(

      <div>
        <Router>
        <Header/>
        </Router>
          <div className="container-fluid">
            <Router>
              <Switch>
                <Route exact path="/">
                  <India/>
                </Route>
                <Route path="/india">
                  <India/>
                </Route>
                <Route path="/world">
                  <World/>
                </Route>
              </Switch>
            </Router>



          </div>
      </div>
    )
  }
}
export default App;
