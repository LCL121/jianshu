import axios from 'axios'
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/jianshu/headerList.json')
      .then((res) => {
        dispatch(changeList(res.data.data));
      })
      .catch(() => {})
      .finally(() => {})
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseleave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = () => ({
  type: actionTypes.CHANGE_PAGE
})
