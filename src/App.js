import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import ViewMore from './Components/ViewMore';
import ProductDetails from './Components/ProductDetails';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { mens } from './Components/SliderData';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* home */}
          <Route exact path='/'>
            <NavBar />
            <HomePage />
            <Footer />
          </Route>

          {/* signin */}
          <Route path="/signin">
            <Auth />
          </Route>

          {/* viewmore */}
          <Route path="/view">
            <NavBar />
            <ViewMore />
            
          </Route>
          <Route path="/:productId">
            <NavBar />
            <ProductDetails />
            
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
