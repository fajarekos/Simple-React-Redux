import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

// import { connect } from 'react-redux';

import Posts from './components/post';
import PostsForm from './components/postform';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <div className="container">
            <div className="row">
              <PostsForm />

              <hr />

              <Posts /> 
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

// const mapStateToProps = (state, props) => ({
//   product: state.product,
//   user: state.user,
//   userPlusProp: `${state.user} ${props.aRandomProps}`
// })

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({
//     onUpdateUser: updateUser
//   }, dispatch);
// }

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps)
//   return {}
// }


export default (App);
