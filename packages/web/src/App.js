import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header'
import WishList from './container/WishList';
import ProductComponent from './container/ProductComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/liked" component={WishList} exact/>
        <Route path="/" component={ProductComponent} exact />
        {/* <Route path="/product/:ProductId" component={ProductDetails} exact/> */}
        <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
