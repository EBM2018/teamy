
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={classNames.corps}>
                <Form.Item>
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item>

                    <Input prefix={<Icon type="lock" className={classNames.inputIconLock}/>} type="password"
                           placeholder="Mot de passe"/>
                    )}
                </Form.Item>
                <Form.Item>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Connexion
                    </Button>
                    Or <a href="www.facebook.com">register now!</a>
                </Form.Item>
            </Form>
        );
    }

};

export default Form.create()(Connexion)
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={classNames.corps}>
                <Form.Item>
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="Username"/>
                </Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Veuillez mettre votre e-mail!' }],
                    })(
                    <Input prefix={<Icon type="user" className={classNames.inputIconUser}/>} placeholder="E-mail"/>
                    )}
                    </Form.Item>
                <Form.Item>

                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Veuillez mettre votre mot de passe' }],
                    })(
                    <Input prefix={<Icon type="lock" className={classNames.inputIconLock}/>} type="password"
                           placeholder="Mot de passe"/>
                    )}
                </Form.Item>
                <Form.Item>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Connexion
                    </Button>
                    Or <a href="www.facebook.com">register now!</a>
                     Où <Link to='/Inscription'>Inscription</Link>
                </Form.Item>
            </Form>
        );
    }

};

export default Form.create()(Connexion)