import './App.css';
import './MyComponents/Header'
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer'
import Home from './MyComponents/Home'


import About from './MyComponents/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header title="My Todos App" searchBar={false} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About name="Saad Arif" />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
