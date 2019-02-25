import React from 'react';
import 'antd/dist/antd.css';
import {
    Form, Input, Tooltip, Icon, Checkbox, Button
} from 'antd';
import classNames from "../Connexion/login.module.css";


class Inscription extends React.Component {
    state = {
        confirmDirty: false,

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
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
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Confirm Password"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="www.facebook.com">agreement</a></Checkbox>
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(Inscription)