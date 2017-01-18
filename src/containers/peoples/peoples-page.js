import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Peoples from '../../components/peoples/peoples';
import * as actionCreators from '../../actions/home';
import './peoples-page.css';

@connect(mapStateToProps, mapDispatchToProps)
export default class PeoplesPage extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        peoplesState: PropTypes.object.isRequired
    };

    componentDidMount() {
        let {actions} = this.props;
        actions.loadPeoples();
        actions.loadHome();
    };

    render() {
        let {actions, peoplesState} = this.props;
        let {peoples, isPending, error} = peoplesState;

        return (
            <div>
                <Peoples
                    peoples={ peoples }
                    isPending={ isPending }
                    error={ error }/>
                <button onClick={() => PeoplesPage.handleLoadPeoplesButtonClicked(actions)}>Load</button>
            </div>
        );
    };

    static handleLoadPeoplesButtonClicked(actions) {
        actions.loadPeoples()
    };
}

function mapStateToProps(state) {
    return {
        peoplesState: state.people,
        homeState: state.home
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
