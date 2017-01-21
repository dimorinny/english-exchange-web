import React, {Component, PropTypes} from 'react';
import {Header as SemanticHeader} from 'semantic-ui-react';
import './header.css';

export default class Header extends Component {

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const {className} = this.props;

        return (
            <div className={className}>
                <SemanticHeader
                    className='header_container'
                    as='h2'
                    icon='talk outline'
                    content='365 English'
                />
            </div>
        );
    };
};
