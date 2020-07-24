import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  DetailLeft,
  DetailRight,
  Content,
  ImgWrapper
} from './style';

class Detail extends Component {
  
  render () {
    return (
      <DetailWrapper>
        <DetailLeft>
          <Header>“毒舌大师”钱钟书的12句话，让我见识了婚姻和人性的暗面{this.props.match.params.id}</Header>
          <Content>
            <ImgWrapper>
              <img alt="img" src={`${process.env.PUBLIC_URL}/img/2535252-7e2d68f49b96f93c.webp`} />
            </ImgWrapper>
            <p>作者：李弯湾</p>
            <p>为了了解人性和婚姻，我曾花了很大很大的精力和时间。</p>
            <p>这些精力和时间，主要花在两个方面。</p>
            <p>一是在过去5年间，我听了一万多个情感案例，见识了这人世间形形色色的婚姻；</p>
            <p>二是来自于我看了很多各式各样的书，心理学、社会学、历史、文学还有各种不可描述的书等等，单说跟婚姻有关就有上百本，其中还包括很多学术型的书。</p>
            <p>但是，我听过的所有故事、看过的所有书，都不及其中的一本书带给我的影响和冲击大，这本书就是我在13岁那年就读了上百遍的《围城》。</p>
            <p>我那时候一个初中生，就摘抄了其中的好多句子、好多段落，抄了整整两大本，在很长一段时间内，我几乎能背诵全书。</p>
            <p>看这本书，我是很痛苦的，痛苦是因为，我很绝望，绝望是因为——为什么这本书不是我写的？</p>
            <p>而我也深知，我绝不可能写出那样的书，市面上大多数文章、大多数书，我看了，觉得没什么稀奇，感觉自己也能写，甚至可以写得更好。</p>
            <p>但是，《围城》这样的书，我是绝对写不出来的，让我投胎一百次、我再有100倍的才华，我也写不出来——这是一本字里行间都装满了才华的书。</p>
            <p>今天我想跟大家分享的，是《围城》里那些精妙的句子，让人觉得幽默、真实、充满智慧，让人看一遍就明白——哦，原来人真的是这样的啊，哦，原来婚姻真的就是这样的啊。</p>
          </Content>
        </DetailLeft>
        <DetailRight></DetailRight>
      </DetailWrapper>
    )
  }
}

// 因为这个组件不是直接的路由组件，所以没办法直接获取id 的信息。要用withRouter 方法说明一下，即可获取。
export default withRouter(Detail);
