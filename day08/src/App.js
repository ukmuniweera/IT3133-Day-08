import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/contactus">ContactUs</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
              