import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 945px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    color: #969696;
    cursor: pointer;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 20px;
  background: #eee;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
  &.slide-enter {
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-enter-done {
    width: 320px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  } 
  &.slide-exit-active {
    width: 240px;
  } 
  &.slide-exit-done {
    width: 240px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 58px;
  padding: 0 20px;
  width: 240px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  cursor: default;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  &.reg {
    color: #ea6f5a;
    background-color: transparent;
    border: 1px solid rgba(236,97,73,.7);
  }
  &.writting {
    color: #fff;
    background-color: #ea6f5a;
  }
`;
