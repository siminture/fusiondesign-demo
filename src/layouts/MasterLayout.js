import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Nav } from '@alifd/next';
import './MasterLayout.scss';

const { Item, SubNav } = Nav;

class Master extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout-master">
        <div className="layout-header">header</div>
        <div className="layout-main">
          <div className="layout-side">
            <Scrollbars autoHide>
              <Nav openMode="multiple" type="line">
                <SubNav label="Sub Nav 1" icon="account">
                  <Item>Item 1</Item>
                </SubNav>
                <SubNav label="Sub Nav 2">
                  <Item>Item 1</Item>
                  <Item>Item 2</Item>
                  <SubNav label="Sub Nav 1">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                  </SubNav>
                  <SubNav label="Sub Nav 2">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                  </SubNav>
                </SubNav>
                <SubNav label="Sub Nav 3">
                  <Item>Item 1</Item>
                  <Item>Item 2</Item>
                  <Item>Item 3</Item>
                  <SubNav label="Sub Nav 1">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                  </SubNav>
                  <SubNav label="Sub Nav 2">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                  </SubNav>
                  <SubNav label="Sub Nav 3">
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                  </SubNav>
                </SubNav>
                <Item>Item</Item>
              </Nav>
            </Scrollbars>
          </div>
          <div className="layout-content">
            <Scrollbars>
              <div className="layout-tube">{children}</div>
            </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default Master;
