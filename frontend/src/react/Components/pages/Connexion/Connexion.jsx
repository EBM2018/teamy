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
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={classNames.corps}>
<<<<<<< refs/remotes/origin/AxelDev
                <Form.Item className={classNames.inputItem}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Veuillez mettre votre e-mail!' }],
=======
                <Form.Item>
                    {getFieldDecorator('userName', {
<<<<<<< refs/remotes/origin/AxelDev
                        rules: [{ required: true, message: 'Veillez mettre votre e-mail!' }],
>>>>>>> modification connexion and inscription page english to french
=======
                        rules: [{ required: true, message: 'Veuillez mettre votre e-mail!' }],
>>>>>>> correction orthographe
                    })(
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="E-mail"/>
                    )}
                    </Form.Item>
<<<<<<< refs/remotes/origin/AxelDev
                <Form.Item className={classNames.inputItem}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Veuillez mettre votre mot de passe' }],
=======
                <Form.Item>
                    {getFieldDecorator('password', {
<<<<<<< refs/remotes/origin/AxelDev
                        rules: [{ required: true, message: 'Veillez mettre votre mot de passe' }],
>>>>>>> modification connexion and inscription page english to french
=======
                        rules: [{ required: true, message: 'Veuillez mettre votre mot de passe' }],
>>>>>>> correction orthographe
                    })(
                    <Input prefix={<Icon type="lock" className={classNames.inputIconLock}/>} type="password"
                           placeholder="Mot de passe"/>
                    )}
                </Form.Item>
                <Form.Item className={classNames.buttonsItem}>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Connexion
<<<<<<< refs/remotes/origin/AxelDev
                    </Button>
                    {"    Ou    "}
                    <Button type="ghost" htmlType="submit" className="login-form-button">
                        <Link to='/Inscription'>Inscription</Link>
                    </Button>
=======
                    </Button>
<<<<<<< refs/remotes/origin/AxelDev
                     Ou <Link to='/Inscription'>Inscription!</Link>
>>>>>>> modification connexion and inscription page english to french
=======
                     Où <Link to='/Inscription'>Inscription</Link>
>>>>>>> correction orthographe
                </Form.Item>
            </Form>
        );
    }

};

export default Form.create()(Connexion)