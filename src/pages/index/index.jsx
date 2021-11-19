import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  handleClick (pageName) {
    switch (pageName) {
      case 0:
        Taro.navigateTo({
          url: '/pages/index/index'
        })
        break;
      case 1:
        Taro.navigateTo({
          url: '/pages/order/index'
        })
        break;
      case 2:
        Taro.navigateTo({
          url: '/pages/profile/index'
        })
        break
    }
  }

  render () {
    return (
      <View>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home' },
            { title: '订单', iconType: 'shopping-cart' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
        />
      </View>)
  }
}
