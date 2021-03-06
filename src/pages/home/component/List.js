import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render () {
    return (
      <Fragment>
        {
          this.props.list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <Link to={`${process.env.PUBLIC_URL}/detail/${item.get('id')}`}>
                  <img alt="img" className="pic" src={`${process.env.PUBLIC_URL}/${item.get('imgUrl')}`} />
                </Link>
                <ListInfo>
                <Link to={`${process.env.PUBLIC_URL}/detail/${item.get('id')}`}>
                    <h3 className="title">{item.get('title')}</h3>
                  </Link>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapStateToProps, null)(List);