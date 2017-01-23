import React, {Component} from 'react';
import {Popup} from 'semantic-ui-react';
import './online.css';

export default class OnlineIndicator extends Component {

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <Popup
                trigger={
                    <span className='online_indicator'/>
                }
                content='User online'
                positioning='top center'/>
        );
    };
}
