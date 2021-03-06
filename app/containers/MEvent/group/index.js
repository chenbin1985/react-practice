import React, { Component } from 'react'
import  SwipeableViews from 'react-swipeable-views'
// Todo:  支持 IE7+ https://github.com/voronianski/react-swipe
import { Link } from 'react-router'

import PreviewButton from '../components/PreviewButton'
import Pagination from '../components/pagination'
import Footer from '../components/Footer'
import {
    CellsTitle,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Badge,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    // PreviewButton,
    PreviewItem,
    Flex,
    FlexItem,
    Button
} from 'react-weui'

import { smallIcon } from '../components/icons'
import FightList from './FightList'
import PlayIcon1 from '../images/huosai.jpeg'
import PlayIcon2 from '../images/king.jpeg'

import 'assets/styles.css'
// import 'lib-flexible'

const styles = {
  slide: {
    padding: 15,
    minHeight: 120,
    color: '#fff',
  },
  slideContainerY: {
    height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  divider: {
    height: 30,
  },
  slideRoot: {
  },
  slideStyle: {
      backgroundColor: '#B3DC4A',
      textAlign: 'center',
    //   marginRight: '10px'
  },
  tabSlide: {
      height: 100,
      width: "100%"
  }
};

function calcLeftIndex(index, countInPage, maxCount)
{
    let center = Math.ceil(countInPage/2)
    if (index < center)
        return 0
    if (index >= maxCount - center)
        return  maxCount - countInPage

    return index + 1 - center
}

export default class Group extends Component {
    state = {
        index: 0,
    }

    handleChangeIndex = (i) => {
        this.setState({ index: i })
    }

    calcTabIndex = () => {
        let { index } = this.state
        return calcLeftIndex(index, 5, 10)
    }

    render() {
        let { index } = this.state
        let tabIndex = this.calcTabIndex()
        return <div>
        <Preview>
            <PreviewHeader>
                <PreviewItem label='分组信息' value='' />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label='组别' value='xxxx' />
                <PreviewItem label='描述' value='xx项目第n阶段（循环赛）第X组' />
                <PreviewItem label='比赛时间' value='2016/1/1-2016/1/3' />
                <PreviewItem label='人数' value='5' />
                <PreviewItem label='编排' value='逆时针' />
                <PreviewItem label='状态' value='进行中(第n轮第n场)' />
            </PreviewBody>
            <PreviewFooter>
                <PreviewButton component={Link} to="/m/event/result">编辑</PreviewButton>
                <PreviewButton primary component={Link} to="/m/event/fight">进入比赛</PreviewButton>
            </PreviewFooter>
        </Preview>
        
        <br />
        <CellsTitle>对阵(轮次)</CellsTitle>
        <Cells>
        <SwipeableViews maxIndex={5} resistance index={ tabIndex } style={{ padding: '0 80% 0 0' }} slideStyle={styles.slideStyle}>
            <button onClick={e => this.handleChangeIndex(0)} style={ {...styles.tabSlide, color: index==0?'red': undefined}}>第一轮</button>
            <button onClick={e => this.handleChangeIndex(1)} style={ {...styles.tabSlide, color: index==1?'red': undefined}}>第二轮</button>
            <button onClick={e => this.handleChangeIndex(2)} style={ {...styles.tabSlide, color: index==2?'red': undefined}}>第三轮</button>
            <button onClick={e => this.handleChangeIndex(3)} style={ {...styles.tabSlide, color: index==3?'red': undefined}}>第四轮</button>
            <button onClick={e => this.handleChangeIndex(4)} style={ {...styles.tabSlide, color: index==4?'red': undefined}}>第五轮</button>
            <button onClick={e => this.handleChangeIndex(5)} style={ {...styles.tabSlide, color: index==5?'red': undefined}}>第六轮</button>
            <button onClick={e => this.handleChangeIndex(6)} style={ {...styles.tabSlide, color: index==6?'red': undefined}}>第七轮</button>
            <button onClick={e => this.handleChangeIndex(7)} style={ {...styles.tabSlide, color: index==7?'red': undefined}}>第八轮</button>
            <button onClick={e => this.handleChangeIndex(8)} style={ {...styles.tabSlide, color: index==8?'red': undefined}}>第九轮</button>
            <button onClick={e => this.handleChangeIndex(9)} style={ {...styles.tabSlide, color: index==9?'red': undefined}}>第十轮</button>
        </SwipeableViews>

        <br />
        <SwipeableViews maxIndex={9} resistance index={ index } style={{ padding: '0 80% 0 0' }} onChangeIndex={this.handleChangeIndex} slideStyle={styles.slideStyle}>
            <button style={ styles.tabSlide }></button>
            <button style={ styles.tabSlide }></button>
            <button onClick={e => this.handleChangeIndex(0)} style={ {...styles.tabSlide, color: index==0?'red': undefined}}>第一轮</button>
            <button onClick={e => this.handleChangeIndex(1)} style={ {...styles.tabSlide, color: index==1?'red': undefined}}>第二轮</button>
            <button onClick={e => this.handleChangeIndex(2)} style={ {...styles.tabSlide, color: index==2?'red': undefined}}>第三轮</button>
            <button onClick={e => this.handleChangeIndex(3)} style={ {...styles.tabSlide, color: index==3?'red': undefined}}>第四轮</button>
            <button onClick={e => this.handleChangeIndex(4)} style={ {...styles.tabSlide, color: index==4?'red': undefined}}>第五轮</button>
            <button onClick={e => this.handleChangeIndex(5)} style={ {...styles.tabSlide, color: index==5?'red': undefined}}>第六轮</button>
            <button onClick={e => this.handleChangeIndex(6)} style={ {...styles.tabSlide, color: index==6?'red': undefined}}>第七轮</button>
            <button onClick={e => this.handleChangeIndex(7)} style={ {...styles.tabSlide, color: index==7?'red': undefined}}>第八轮</button>
            <button onClick={e => this.handleChangeIndex(8)} style={ {...styles.tabSlide, color: index==8?'red': undefined}}>第九轮</button>
            <button onClick={e => this.handleChangeIndex(9)} style={ {...styles.tabSlide, color: index==9?'red': undefined}}>第十轮</button>
            <button style={ styles.tabSlide }></button>
            <button style={ styles.tabSlide }></button>
        </SwipeableViews>
       
        
        <br />
        <div style={{position: 'relative'}}>
            <Pagination style={{ bottom: 'auto', top: 8, zIndex: 1 }} dots={10} index={index} onChangeIndex={this.handleChangeIndex} />
            <SwipeableViews index={index} animateHeight={true}  onChangeIndex={this.handleChangeIndex}>
                <div style={{ ...styles.slide, ...styles.slide1 }}>
                    第一轮
                    <div style={styles.divider} />
                    <SwipeableViews  axis="y" animateHeight={true}>
                      <div className='vs-container vs-container_around' style={styles.slideRoot}>
                            <div className='player1'>
                                <img className='player__image' src={PlayIcon1} />
                                <div className='player__info'>
                                    <p className='player__info__name'>1运动员A</p>
                                </div>
                            </div>
                            <span className='vs'>VS</span>
                            <div className=''>
                                <img className='player__image' src={PlayIcon2} />
                                <div className='player__info'>
                                    <p className='player__info__name'>2运动员B</p>
                                </div>
                            </div>
                        </div>
                        <div className='vs-container vs-container_around' style={styles.slideRoot}>
                            <div className=''>
                                <img className='player__image' src={PlayIcon1} />
                                <div className='player__info'>
                                    <p className='player__info__name'>3运动员C</p>
                                </div>
                            </div>
                            <span className='vs'>VS</span>
                            <div className=''>
                                <img className='player__image' src={PlayIcon2} />
                                <div className='player__info'>
                                    <p className='player__info__name'>4运动员D</p>
                                </div>
                            </div>
                        </div>
                        <div className='vs-container vs-container_around' style={styles.slideRoot}>
                            <div className=''>
                                <img className='player__image' src={PlayIcon1} />
                                <div className='player__info'>
                                    <p className='player__info__name'>5运动员E</p>
                                </div>
                            </div>
                            <span className='vs'>VS</span>
                            <div className=''>
                                <img className='player__image' src={PlayIcon2} />
                                <div className='player__info'>
                                    <p className='player__info__name'>6运动员F</p>
                                </div>
                            </div>
                        </div>
                    </SwipeableViews>
                </div>

                <div style={{ ...styles.slide, ...styles.slide1 }} >
                    第二轮
                    <div style={styles.divider} />
                    <SwipeableViews resistance axis="y" animateHeight={true} >
                        <div className='vs-container' style={styles.slideRoot}>
                            <div className='player'>
                                <img className='player__image' src={PlayIcon1} />
                                <div className='player__info'>
                                    <p className='player__info__name'>运动员A</p>
                                    <div className='player__info__desc'>
                                        <p>客场</p>
                                        <p>胜18负3 第1名</p>
                                        <p>3号种子 积分：56</p>
                                    </div>
                                </div>
                            </div>
                            <span className='vs'>VS</span>
                            <div className='player'>
                                <div className='player__info player__info_right'>
                                    <p className='player__info__name'>运动员B</p>
                                    <div className='player__info__desc'>
                                        <p>客场</p>
                                        <p>胜18负3 第1名</p>
                                        <p>3号种子 积分：56</p>
                                    </div>
                                </div>
                                <img className='player__image player__image_right' src={PlayIcon2} />
                            </div>
                        </div>
                        <div className='vs-container' style={styles.slideRoot}>
                            <div className='player'>
                                <img className='player__image' src={PlayIcon1} />
                                <div className='player__info'>
                                    <p className='player__info__name'>运动员A</p>
                                    <div className='player__info__desc'>
                                        <p>客场</p>
                                        <p>胜18负3 第1名</p>
                                        <p>3号种子 积分：56</p>
                                    </div>
                                </div>
                            </div>
                            <span className='vs'>VS</span>
                            <div className='player'>
                                <div className='player__info player__info_right'>
                                    <p className='player__info__name'>运动员B</p>
                                    <div className='player__info__desc'>
                                        <p>客场</p>
                                        <p>胜18负3 第1名</p>
                                        <p>3号种子 积分：56</p>
                                    </div>
                                </div>
                                <img className='player__image player__image_right' src={PlayIcon2} />
                            </div>
                        </div>
                        <div className='vs-container' style={styles.slideRoot}>
                            <div className='player'>
                                <img className='player__image' src={PlayIcon1} />
                                <div className='player__info'>
                                    <p className='player__info__name'>运动员A</p>
                                    <div className='player__info__desc'>
                                        <p>客场</p>
                                        <p>胜18负3 第1名</p>
                                        <p>3号种子 积分：56</p>
                                    </div>
                                </div>
                            </div>
                            <span className='vs'>VS</span>
                            <div className='player'>
                                <div className='player__info player__info_right'>
                                    <p className='player__info__name'>运动员B</p>
                                    <div className='player__info__desc'>
                                        <p>客场</p>
                                        <p>胜18负3 第1名</p>
                                        <p>3号种子 积分：56</p>
                                    </div>
                                </div>
                                <img className='player__image player__image_right' src={PlayIcon2} />
                            </div>
                        </div>
                    </SwipeableViews>
                </div>
            
                <div style={{ ...styles.slide, ...styles.slide1 }}>
                    第三轮
                    <div style={styles.divider} />
                    <SwipeableViews resistance axis="y" animateHeight={true}>
                        <div className='vs-container' style={Object.assign({}, styles.slide, styles.slide3)}>
                        运动员A VS 运动员B
                        </div>
                        <div className='vs-container' style={Object.assign({}, styles.slide, styles.slide3)}>
                        运动员C VS 运动员D
                        </div>
                    </SwipeableViews>
                </div>
                <FightList onClick={ e=> 修改球桌}/>
                <div>test</div>
            </SwipeableViews>
        </div>
        </Cells>

        <br />
        <CellsTitle>参赛名单</CellsTitle>
        <Cells>
            <Cell access >
                <CellHeader>{smallIcon}</CellHeader>
                <CellBody >选手1</CellBody>
                <CellFooter />
            </Cell>
            <Cell href="javascript:void(alert('选手2'))" access>
                <CellBody >
                    选手2
                    <Badge preset='body'>种子</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
            <Cell href="javascript:void(alert('选手3'))" access>
                <CellBody >选手3</CellBody>
                <CellFooter />
            </Cell>
        </Cells>

        <Footer />
        </div>
    }
}