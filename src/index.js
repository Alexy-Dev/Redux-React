import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
// import { inc, dec, rnd } from './actions';
import * as actions from './actions';

// const reducer = (state = 0, action) => {    //функция показывающая как именно изменять store, должна зависеть только от стейта и экшна
//     switch (action.type) {                 //отправляем в отдельный файл reducer
//         case 'INC':
//           return state + 1;
//         case 'DEC':
//           return state - 1;
//         case 'RND':
//           return state + action.value;
//         // case 'RES':
//         //     return 0;
//         default:
//           return state;
//     }    
// }

// const inc = () => ({type: 'INC'});                   //отправляем в отдельный файл actions
// const dec = () => ({type: 'DEC'});
// const rnd = (value) => ({type: 'RND', value});       //допусловия передаем в аргумент
// const res = () => ( {type: 'RES'} );

const store = createStore(reducer);     //команда из пакета redux для формирования store
const {dispatch} = store;      //команда из пакета redux для формирования store

// actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// }

// const bindActionCreator = (creator, dispatch) => (...args) => {   //данная функция есть внутри redux, просто импортируем.
//   dispatch(creator(...args));
// };
// //const incDispatch = () => dispatch(inc());         //для того, чтобы учесть более сложные action с аргументами используем bindActionCreators
// const incDispatch = bindActionCreators(inc, dispatch);
// //const decDispatch = () => dispatch(dec());
// const decDispatch = bindActionCreators(dec, dispatch);
// //const rndDispatch = (value) => dispatch(rnd(value));
// const rndDispatch = bindActionCreators(rnd, dispatch);   //чтобы не повторяться засовываем вск Dispatch в одну

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
//   }
// , dispatch);
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);  //и теперь мы можем передать в обработчики эти action как функции, поскольку они обернуты в dispatch
document.getElementById('inc').addEventListener('click', inc);  //выносим функцию в переменную и ставим ее в качестве аргумента
// () => {
  // store.dispatch(inc());
// });
document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('dec').addEventListener('click', () => {
//   dispatch(dec());
// });

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});
// document.getElementById('res').addEventListener('click', () => {
//   store.dispatch( res() );
// });

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);
// store.subscribe(() => {                 //функция подписки на изменения
//   console.log(store.getState());
// })

// store.dispatch({type: 'INC'});          //функция изменения store
// store.dispatch({type: 'INC'});



// let state = reducer(undefined, {});

// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);