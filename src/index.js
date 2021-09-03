import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// import * as actions from './actions';
// import Counter from './components/counter';
import App from './components/app';

const store = createStore(reducer);     //команда из пакета redux для формирования store
// const {dispatch} = store;      //команда из пакета redux для формирования store


// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);  //и теперь мы можем передать в обработчики эти action как функции, поскольку они обернуты в dispatch
// document.getElementById('inc').addEventListener('click', inc);  //выносим функцию в переменную и ставим ее в качестве аргумента

// document.getElementById('dec').addEventListener('click', dec);


// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// });

// const update = () => {
  ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>
    // <Counter
    // counter={store.getState()}
    // inc={inc}
    // dec={dec}
    // rnd={() => {
    //   const value = Math.floor(Math.random() * 10);
    //   rnd(value);
    // }}/>
    , document.getElementById('root'));

// update();
// store.subscribe(update);

