import React, {Component, PropTypes} from 'react';
import {Grid} from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Peoples from '../../components/peoples/peoples';
import * as actionCreators from '../../actions/people';
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
    }

    render() {
        let {actions, peoplesState} = this.props;
        let {peoples, isPending, error} = peoplesState;

        return (
            <div>
                <Grid centered>
                    <Grid.Column className='peoples_container' width={14}>
                        <Peoples
                            peoples={ peoples }
                            isPending={ isPending }
                            error={ error }/>
                    </Grid.Column>
                </Grid>
                <button onClick={() => PeoplesPage.handleLoadPeoplesButtonClicked(actions)}>Load</button>
            </div>
        );
    }

    static handleLoadPeoplesButtonClicked(actions) {
        actions.loadPeoples()
    }
}

function mapStateToProps(state) {
    return {peoplesState: state.people};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
