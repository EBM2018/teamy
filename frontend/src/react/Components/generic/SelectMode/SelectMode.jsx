import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './selectMode.module.css';
import {Link} from "react-router-dom";
//import { Button } from 'antd';
import "antd/dist/antd.css"
import {Menu, Icon} from 'antd'

//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
export default class SelectMode extends React.PureComponent {
    state={
        current : "apps",
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render(){
        return (
                <div >
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        theme="dark">
                        <Menu.Item key="apps">
                            <Link to="/Apps"><Icon type="robot"/>Chose your App</Link>
                        </Menu.Item>
                        <Menu.Item key="groupmanagement">
                             <Link to="/GroupManagement" ><Icon type="rocket"/>
                            Gestion des groupes</Link>
                        </Menu.Item>
                        <Menu.Item key="listing">
                            <Link to="/Listing">  <Icon type="database"/>Gestion des listes</Link>
                        </Menu.Item>
                    </Menu>
                </div>

        )
    }
}