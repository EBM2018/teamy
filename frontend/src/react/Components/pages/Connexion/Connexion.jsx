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
                <Form.Item className={classNames.inputItem}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Veuillez mettre votre e-mail!' }],
                    })(
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="E-mail"/>
                    )}
                    </Form.Item>
                <Form.Item className={classNames.inputItem}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Veuillez mettre votre mot de passe' }],
                    })(
                    <Input prefix={<Icon type="lock" className={classNames.inputIconLock}/>} type="password"
                           placeholder="Mot de passe"/>
                    )}
                </Form.Item>
                <Form.Item className={classNames.buttonsItem}>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Connexion
                    </Button>
                    {"    Où    "}
                    <Button type="ghost" htmlType="submit" className="login-form-button">
                        <Link to='/Inscription'>Inscription</Link>
                    </Button>
                </Form.Item>
            </Form>
        );
    }

};

export default Form.create()(Connexion)