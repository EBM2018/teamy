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
                <a className={classNames.irate} href="https://irate.ebm.nymous.io/"><img className={classNames.irate} src={require("./images/irate.png")} alt="irate"/></a>
                <a className={classNames.tenugui} href="https://tenugui.ebm.nymous.io/"><img className={classNames.tenugui} src={require("./images/TenuGUI.png")} alt="this is a fish"/></a>
            </div>
        )
    }
}