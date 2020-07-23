import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  font-size: 14px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dbdbdb;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  margin-bottom: 18px;
  margin-left: 18px;
  padding-right: 10px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .topic-pic {
    vertical-align:middle;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dbdbdb;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ListInfo = styled.div`
  a {
    color: #333;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    cursor: default;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 280px;
  height: 300px;
`;

export const WriterTop = styled.div`
  height: 40px;
  font-size: 14px;
  color: #969696;
  overflow: hidden;
`;

export const WriterTopLeft = styled.div`
  float: left;
  line-height: 40px;
  cursor: pointer;
`;

export const WriterTopRight = styled.div`
  float: right;
  line-height: 40px;
  cursor: pointer;
`;

export const WriterItem = styled.div`
  margin-top: 5px;
  height: 47px;
  overflow: hidden;
  width: 100%;
  .pic {
    cursor: pointer;
    width: 45px;
    height: 45px;
    float: left;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .follow {
    cursor: pointer;
    float: right;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    display: block;
    color: #5AC356;
    .different {
      font-size: 18px;
    }
  }
`;

export const WriterItemDetail = styled.div`
  margin-left: 10px;
  height: 100%;
  float: left;
  cursor: pointer;
  .top {
    margin-top: 4px;
    color: #2f2f2f;
    font-size: 14px;
  }
  .bottom {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`
