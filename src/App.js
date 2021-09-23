import React,{ Component} from 'react';
import classes from'./index.module.css';
import Layout from './components/layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Orders from './containers/Order/Order';
import { Provider } from 'react-redux';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Store/reducer';
import Auth from './Auth/Auth';
const store=createStore(reducer,applyMiddleware(thunk));

class  App extends Component {
 state={}
render(){
  
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className={classes.app}>
    <Layout>
      <Switch>
     <Route path="/" exact component={BurgerBuilder} />
     <Route path="/checkout" component={Checkout} />
     <Route path="/orders" component={Orders}/>
     <Route path="/auth" component={Auth}/>
     </Switch>
    </Layout>
    </div>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;
