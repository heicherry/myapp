import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'


export default class Order extends Component {

  config = {
    navigationBarTitleText: '订单'
  }

  render () {
    return (
      <View>
      </View>)
  }
}
