import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: 0 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: moment(0).subtract(4, 'days').valueOf() }));
store.dispatch(addExpense({ description: 'Rent', amount: 25300, createdAt: moment(0).add(4, 'days').valueOf() }));


  
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
  
ReactDOM.render(jsx, document.getElementById('app'));
