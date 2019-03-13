import React from 'react';
import 'antd/dist/antd.css';
import {
    Form, Input, Button
} from 'antd';
import classNames from "../Inscription/inscription.module.css";
import {Link} from "react-router-dom";



class Inscription extends React.Component {
    state = {
        confirmDirty: false,

    };

    handleSubmit = (e) => {
        e.preventDefault();
        //A retirer
        //this.props.form.validateFieldsAndScroll((err, values) =>
        //if (!err) {
        //       console.log('Received values of form: ', values);
        //    }
        //});
        //
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
<<<<<<< refs/remotes/origin/AxelDev
<<<<<<< refs/remotes/origin/AxelDev
            callback('Les deux mots de passe sont differents!');
=======
            callback('Les deux mots de passes sont different!');
>>>>>>> correction orthographe
=======
            callback('Les deux mots de passe sont differents!');
>>>>>>> correction orthographe #2
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    render() {
        const { getFieldDecorator } = this.props.form;


        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };


        return (
            <Form onSubmit={this.handleSubmit} className={classNames.corps}>
                <Form.Item
                    {...formItemLayout}
                    label="E-mail"
                    className={classNames.inputItem}
                >
                    {getFieldDecorator('email', {
                        rules: [{
<<<<<<< refs/remotes/origin/AxelDev
<<<<<<< refs/remotes/origin/AxelDev
                            type: 'email', message: <p>{"Votre E-mail n'est pas valide!"}</p>,
                        }, {
                            required: true, message: 'Veuillez mettre votre E-mail!',
=======
                            type: 'email', message: 'Votre E-mail nest pas valide!',
                        }, {
                            required: true, message: 'Veillez mettre votre E-mail!',
>>>>>>> modification connexion and inscription page english to french
=======
                            type: 'email', message: <p>{"Votre E-mail n'est pas valide!"}</p>,
                        }, {
                            required: true, message: 'Veuillez mettre votre E-mail!',
>>>>>>> correction orthographe
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Mot de passe"
<<<<<<< refs/remotes/origin/AxelDev
                    className={classNames.inputItem}
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Veuillez mettre votre mot de passe!',
=======
                >
                    {getFieldDecorator('password', {
                        rules: [{
<<<<<<< refs/remotes/origin/AxelDev
                            required: true, message: 'Veillez mettre votre mot de passe!',
>>>>>>> modification connexion and inscription page english to french
=======
                            required: true, message: 'Veuillez mettre votre mot de passe!',
>>>>>>> correction orthographe
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Confirmer le mot de passe"
<<<<<<< refs/remotes/origin/AxelDev
                    className={classNames.inputItem}
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Veuillez confirmer votre mot de passe!',
=======
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
<<<<<<< refs/remotes/origin/AxelDev
                            required: true, message: 'Veillez confirmer votre mot de passe!',
>>>>>>> modification connexion and inscription page english to french
=======
                            required: true, message: 'Veuillez confirmer votre mot de passe!',
>>>>>>> correction orthographe
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item
                    className={classNames.inputItem}
                    {...formItemLayout}
                    label={(
                        <span>
<<<<<<< refs/remotes/origin/AxelDev
<<<<<<< refs/remotes/origin/AxelDev
              Prénom
=======
              Prenom
>>>>>>> modification connexion and inscription page english to french
=======
              Prénom
>>>>>>> correction orthographe
            </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
<<<<<<< refs/remotes/origin/AxelDev
<<<<<<< refs/remotes/origin/AxelDev
                        rules: [{ required: true, message: 'Veuillez mettre votre prenom', whitespace: true }],
=======
                        rules: [{ required: true, message: 'Veillez mettre votre prenom', whitespace: true }],
>>>>>>> modification connexion and inscription page english to french
=======
                        rules: [{ required: true, message: 'Veuillez mettre votre prenom', whitespace: true }],
>>>>>>> correction orthographe
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
<<<<<<< refs/remotes/origin/AxelDev
                    className={classNames.inputItem}
=======
>>>>>>> modification connexion and inscription page english to french
                    {...formItemLayout}
                    label={(
                        <span>
              Nom
            </span>
                    )}
                >
                    {getFieldDecorator('name', {
<<<<<<< refs/remotes/origin/AxelDev
<<<<<<< refs/remotes/origin/AxelDev
                        rules: [{ required: true, message: 'Veuillez mettre votre nom', whitespace: true }],
=======
                        rules: [{ required: true, message: 'Veillez mettre votre nom', whitespace: true }],
>>>>>>> modification connexion and inscription page english to french
=======
                        rules: [{ required: true, message: 'Veuillez mettre votre nom', whitespace: true }],
>>>>>>> correction orthographe
                    })(
                        <Input />
                    )}
                </Form.Item>
<<<<<<< refs/remotes/origin/AxelDev
                <Form.Item {...tailFormItemLayout} className={classNames.validationButton}>
                    <Button type="primary" htmlType="submit">S'inscrire</Button>
                    {"    Ou    "}
                    <Button type="ghost" htmlType="submit" className="login-form-button">
                        <Link to='/Connexion'>Connexion</Link>
                    </Button>
=======
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">S'inscrire</Button>
>>>>>>> modification connexion and inscription page english to french
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(Inscription)