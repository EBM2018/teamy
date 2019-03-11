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
                        defaultSelectedKeys={['apps']}
                        mode="horizontal"
                        theme="dark">
                        <Menu.Item key="apps">
                            <Link to="/"><Icon type="robot"/>Choisissez votre application</Link>
                        </Menu.Item>
                        <Menu.Item key="repartitionmanagement">
                             <Link to="/RepartitionManagement" ><Icon type="rocket"/>
                            Gestion des repartitions</Link>
                        </Menu.Item>
                        <Menu.Item key="grouping">
                            <Link to="/Grouping">  <Icon type="database"/>Gestion des groupes</Link>
                        </Menu.Item>

                    </Menu>
                </div>

        )
    }
}