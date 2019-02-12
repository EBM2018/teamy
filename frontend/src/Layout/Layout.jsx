import React from 'react';
import PropTypes from 'prop-types';
import classNames from './layout.module.css';


export default class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };


    render() {
        return (
            <div>
                <header className={classNames.header}>
                    <div>HEADER</div>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}