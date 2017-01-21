import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Peoples from '../../components/peoples/peoples';
import UserForm from '../../components/form/add-user-form';
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
        actions.loadHome(actions);

        this.startPoll();
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startPoll() {
        this.interval = setInterval(() => {
            this.props.actions.loadPeoples();
        }, 15000);
    }

    render() {
        const {actions, peoplesState, homeState} = this.props;

        return (
            <div>
                {PeoplesPage.renderUserForm(homeState, actions)}
                {PeoplesPage.renderPeoples(peoplesState)}
            </div>
        );
    };

    static renderUserForm(homeState, actions) {
        const {home, isPending, addUserIsPending, error, addUserError} = homeState;
        const {form, user} = home;

        return (
            <UserForm
                isPending={isPending}
                addUserIsPending={addUserIsPending}
                error={error}
                addUserError={addUserError}
                form={form}
                addUserClicked={(_) => {
                    actions.createUser(actions, user)
                }}
                formChanged={(user) => {
                    actions.changeUser(user)
                }}
                user={user}/>
        );
    };

    static renderPeoples(peoplesState) {
        const {peoples, isPending, error} = peoplesState;

        return (
            <Peoples
                className='peoples_container'
                peoples={ peoples }
                isPending={ isPending }
                error={ error }/>
        );
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
