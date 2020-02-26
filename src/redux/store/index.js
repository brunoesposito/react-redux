import { createStore } from 'redux';
import courses from '../reducers';

const store = createStore(courses);

export default store;