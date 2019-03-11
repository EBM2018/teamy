import React from "react";
import {Form, Icon, Input, Button
} from 'antd';
import classNames from "./connexion.module.css";
import {Link} from "react-router-dom";



class Connexion extends React.PureComponent {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={classNames.corps}>
                <Form.Item className={classNames.inputUser}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Veuillez mettre votre e-mail!' }],
                    })(
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="E-mail"/>
                    )}
                    </Form.Item>
                <Form.Item className={classNames.inputPassword}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Veuillez mettre votre mot de passe' }],
                    })(
                    <Input prefix={<Icon type="lock" className={classNames.inputIconLock}/>} type="password"
                           placeholder="Mot de passe"/>
                    )}
                </Form.Item>
                <Form.Item className={classNames.inputPassword}>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Connexion
                    </Button>
                     Où <Link to='/Inscription'>Inscription</Link>
                </Form.Item>
            </Form>
        );
    }

};

export default Form.create()(Connexion)