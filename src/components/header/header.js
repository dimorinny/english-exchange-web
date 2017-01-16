import React, {Component, PropTypes} from 'react';
import {Header as SemanticHeader, Icon} from 'semantic-ui-react';
import './header.css';

export default class Header extends Component {

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const {className} = this.props;

        return (
            <div className={className}>
                <SemanticHeader as='h2' icon textAlign='center'>
                    <Icon name='student'/>
                    <SemanticHeader.Content>
                        Learn English 365
                    </SemanticHeader.Content>
                </SemanticHeader>
            </div>
        );
    };
};
