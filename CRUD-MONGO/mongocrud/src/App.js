import logo from './logo.svg';
import './App.css';
import { Devices } from './components/devices/Devices';
import { Header } from './components/header/Header';
import {Home} from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Upsert } from './components/upsert/Upsert';

function App() {

  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path="/devices" element={<Devices/>}/>
          <Route path="/upsert/:id" element={<Upsert/>}/>
          <Route path="/upsert" element={<Upsert/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
