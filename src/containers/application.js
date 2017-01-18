import React, {Component, PropTypes} from 'react';
import {Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import Header from '../components/header/header';
import UserForm from '../components/form/add-user-form';
import './application.css';

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {

    static propTypes = {
        children: React.PropTypes.node.isRequired
    };

    render() {
        let {children} = this.props;

        return (
            <div>
                <Grid centered>
                    <Grid.Column className='container' width={14}>
                        <Header/>
                    </Grid.Column>
                    <Grid.Column className='container' width={14}>
                        <UserForm/>
                    </Grid.Column>
                    <Grid.Column className='container' width={14}>
                        { children }
                    </Grid.Column>
                </Grid>
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
