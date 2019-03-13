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
            callback('Les deux mots de passe sont differents!');
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
                            type: 'email', message: <p>{"Votre E-mail n'est pas valide!"}</p>,
                        }, {
                            required: true, message: 'Veuillez mettre votre E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Mot de passe"
                    className={classNames.inputItem}
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Veuillez mettre votre mot de passe!',
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
                    className={classNames.inputItem}
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Veuillez confirmer votre mot de passe!',
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
              Prénom
            </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Veuillez mettre votre prenom', whitespace: true }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    className={classNames.inputItem}
                    {...formItemLayout}
                    label={(
                        <span>
              Nom
            </span>
                    )}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Veuillez mettre votre nom', whitespace: true }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout} className={classNames.validationButton}>
                    <Button type="primary" htmlType="submit">S'inscrire</Button>
                    {"    Ou    "}
                    <Button type="ghost" htmlType="submit" className="login-form-button">
                        <Link to='/Connexion'>Connexion</Link>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(Inscription)