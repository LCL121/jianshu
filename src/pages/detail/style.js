import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 1000px;
  padding: 10px 16px 0 16px;
  margin: 0 auto;
`;

export const DetailLeft = styled.div`
  width: 682px;
  padding: 24px;
  float: left;
`;

export const Header = styled.div`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  margin-bottom: 15px;
  line-height: 44px;
`;

export const DetailRight = styled.div`
  border: 1px solid #dcdcdc;
  float: right;
  width: 260px;
  height: 100vh;
  background: #fff;
  box-sizing: border-box;
`;

export const Content = styled.div`
  color: #2f2f2f;
  p {
    margin-bottom: 20px;
    word-break: break-word;
    line-height: 28px;
    font-size: 16px;
  }
`;

export const ImgWrapper = styled.div`
  padding-bottom: 25px;
  width: 100%;
  text-align: center;
  font-size: 0;
  margin: 0;
`;
