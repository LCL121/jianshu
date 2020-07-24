import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterItem,
  WriterTop,
  WriterTopLeft,
  WriterTopRight,
  WriterItemDetail
} from '../style';

class Writer extends PureComponent {
  render () {
    return (
      <WriterWrapper>
        <WriterTop>
          <WriterTopLeft>推荐作者</WriterTopLeft>
          <WriterTopRight>
            <span className="iconfont">&#xe685;</span>
            换一批
          </WriterTopRight>
        </WriterTop>
        {
          this.props.list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img className="pic" alt="img" src={`${process.env.PUBLIC_URL}/${item.get('imgUrl')}`} />
                <WriterItemDetail>
                  <div className="top">{item.get('title')}</div>
                  <div className="bottom">{item.get('detail')}</div>
                </WriterItemDetail>
                <span className="follow"><span className="different">+</span>关注</span>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapStateToProps, null)(Writer);