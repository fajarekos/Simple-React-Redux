import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Counters from './components/counters'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'


// easy example
// import { createStore } from 'redux';

// function reducer(state, action) {
//   if (action.type === 'changeState') {
//     return action.payload.newState;
//   }
//   return 'State'
// }

// const store = createStore(reducer);

// console.log(store.getState());

// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'New State'
//   }
// }

// store.dispatch(action)

// console.log(store.getState())


// import { combineReducers, createStore } from 'redux';
// import { Provider } from 'react-redux'
// import productsReducer from './reducers/products-reducer';
// import userReducers from './reducers/users-reducers';

// const allReducers = combineReducers({
//   products: productsReducer,
//   user: userReducers
// })

// const store = createStore(
//   allReducers, 
//   {
//     products: [{ name: 'Ear cup'}],
//     user: 'Jhon Doe'
//   },
//   window.devToolsExtension &&  window.devToolsExtension()
// )
// console.log(store.getState())

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'Jhon Cena'
//   }
// }

// store.dispatch(updateUserAction)

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
