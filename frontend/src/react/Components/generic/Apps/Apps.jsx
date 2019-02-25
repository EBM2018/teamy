import React from 'react';
//import PropTypes from 'prop-types';
import classNames from './apps.module.css';
//import {Link} from "react-router-dom";
//import { Button } from 'antd';
import "antd/dist/antd.css"
//import {Menu, Icon} from 'antd'

//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
export default class Apps extends React.PureComponent {
    render() {
        return (
            <div className={classNames.apps}>
                <a className={classNames.app} href="https://irate.ebm.nymous.io/"><img className={classNames.app} src={require("./images/irate.jpg")} alt="irate"/></a>
                <a className={classNames.app} href="https://tenugui.ebm.nymous.io/"><img className={classNames.app} src={require("./images/TenuGUI.png")} alt="this is a fish"/></a>
            </div>
        )
    }
}