import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { actionCreators } from './store'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="img" className="banner-img" src="https://upload-images.jianshu.io/upload_images/1202579-ac32a5eee97061b3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  handleScrollTop () {
    window.scrollTo(0, 0);
  }

  componentDidMount () {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData () {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow () {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
