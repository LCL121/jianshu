import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable 对象的set 方法，会结合之前immutable 对象的值和设置的值，返回一个新的immutable 对象
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      let now = state.get('page') + 1;
      now = now > state.get('totalPage') ? 1 : now;
      return state.set('page', now);
    default:
      return state;
  }
}