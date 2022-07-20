
import './App.css';
import { Navbar} from './components';
import { Body } from './containers/index.js';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Body />
    </div>
);


export default App;
