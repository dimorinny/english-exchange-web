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
                <SemanticHeader
                    className='header_container'
                    as='h2'>
                    <Icon name='talk outline'/>
                    <SemanticHeader.Content
                        className='header_text'>
                        English 365
                        <SemanticHeader.Subheader>
                            Learn English together
                        </SemanticHeader.Subheader>
                    </SemanticHeader.Content>
                </SemanticHeader>
            </div>
        );
    };
};
