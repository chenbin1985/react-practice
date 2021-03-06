import React, { Component } from 'react'

import FaBeer from 'react-icons/lib/fa/beer'
/*
		个人信息
		我的比赛：比赛（fight）列表
		我的收藏: 赛事(event)列表
		关于：  招募赛事合伙人
 */

import {
    MediaBox,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxHeader,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cell,
    CellBody,
    CellFooter,
    Cells,
    Panel,
    PanelBody,
    PanelHeader
} from 'react-weui'

const eventIcon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" />

import myPic from './images/g.jpeg'

export default class Me extends Component {
    render() {
        return <div>
            <br />
            <Panel>

            <PanelBody>
            <MediaBox type='appmsg' href="javascript:void(alert('个人信息页面'))">
                <MediaBoxHeader>
                    {eventIcon}
                </MediaBoxHeader>
                <MediaBoxBody>
                    <MediaBoxTitle>我的昵称</MediaBoxTitle>
                    <MediaBoxDescription>真实名: 我的真名</MediaBoxDescription>
                    <MediaBoxInfo>
                        <MediaBoxInfoMeta>登录名：xxx</MediaBoxInfoMeta>
                    </MediaBoxInfo> 
                </MediaBoxBody>
                <FaBeer size={32} onClick={ e=> alert('ok')} />
            </MediaBox>
            </PanelBody>
            </Panel> 
            <Cells>
                <Cell access>
                    <CellBody>比赛</CellBody>
                    <CellFooter/>
                </Cell>
                <Cell access>
                    <CellBody>赛事</CellBody>
                    <CellFooter/>
                </Cell>
                <Cell access>
                    <CellBody>俱乐部</CellBody>
                    <CellFooter/>
                </Cell>
                <Cell access>
                    <CellBody>战绩</CellBody>
                    <CellFooter/>
                </Cell>
            </Cells>

            <Cells>
                <Cell access>
                    <CellBody>关于</CellBody>
                    <CellFooter/>
                </Cell>
                <Cell>
                    <CellBody>退出</CellBody>
                </Cell>
            </Cells>
        </div>
    }
}