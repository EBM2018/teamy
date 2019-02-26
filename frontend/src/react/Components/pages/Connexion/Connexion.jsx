import React from "react";
import {Form, Icon, Input, Button, Checkbox,
} from 'antd';
import classNames from "./connexion.module.css";



export default class Connexion extends React.PureComponent {
    render() {
        return (
            <Form onSubmit={this.handleSubmit} className={classNames.corps}>
                <Form.Item>
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item>

                    <Input prefix={<Icon type="lock" className={classNames.inputIconLock}/>} type="password"
                           placeholder="Password"/>

                </Form.Item>
                <Form.Item>

                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="www.facebook.com">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="www.facebook.com">register now!</a>
                </Form.Item>
            </Form>
        );
    }

};