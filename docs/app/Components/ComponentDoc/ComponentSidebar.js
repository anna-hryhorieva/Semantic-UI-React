import _ from 'lodash'
import React, { Component } from 'react'
import { Sticky } from 'semantic-ui-react'

import menuInfo from 'docs/app/menuInfo.json'

const sidebarStyle = {
  background: '#fff',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  paddingBottom: '5em',
}

export default class ComponentSidebar extends Component {
  render() {
    const { componentName, examplesRef } = this.props
    const items = _.get(menuInfo, componentName)

    console.log(componentName, items, menuInfo)

    return (
      <Sticky context={examplesRef} offset={15}>
        <div style={sidebarStyle} />
      </Sticky>
    )
  }
}
