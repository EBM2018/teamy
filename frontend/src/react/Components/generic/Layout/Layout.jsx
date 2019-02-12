import React from 'react';
import PropTypes from 'prop-types';
import classNames from './layout.module.css';
import SelectMode from "../SelectMode/SelectMode";

export default class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };
    render() {
        return (
                <div>
                    <header className={classNames.header}>
                        <SelectMode/>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
        )
    }
}