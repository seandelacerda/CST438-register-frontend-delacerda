import './App.css';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import StudentList from './components/StudentList';
import Login from './components/Login';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route path='/student' component={StudentList} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
