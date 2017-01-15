import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/people';

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        children: React.PropTypes.node.isRequired
    };

    render() {
        let {children} = this.props;

        return (
            <div>
                { children }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {router: state.router};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
