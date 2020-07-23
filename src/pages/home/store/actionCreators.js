import axios from 'axios';
import * as actionTypes from './actionTypes'

const changeHomeData = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(changeHomeData(data));
      })
      .catch(() => { })
      .finally(() => { })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_SHOW,
  show
})