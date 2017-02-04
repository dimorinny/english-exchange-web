import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../components/header/header';
import './application.css';

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {

    static propTypes = {
        children: React.PropTypes.node.isRequired
    };

    render() {
        let {children} = this.props;

        return (
            <div className='container'>
                <div className='container_row'>
                    <Header/>
                </div>
                <div className='container_row'>
                    { children }
                </div>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {router: state.router};
}

function mapDispatchToProps(dispatch) {
    return {};
}
