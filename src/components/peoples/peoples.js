import React, {Component, PropTypes} from 'react';
import {Table, Header, Icon, Segment, Loader, Dimmer} from 'semantic-ui-react'
import People from './people';
import './peoples.css';

export default class Peoples extends Component {

    static propTypes = {
        peoples: PropTypes.array.isRequired,
        className: PropTypes.string,
        isPending: PropTypes.bool.isRequired,
        error: PropTypes.object
    };

    render() {
        const {className, peoples, isPending, error} = this.props;
        const containerClassName = className + ' peoples_segment border_blue';

        return (
            <Segment className={containerClassName}>
                {Peoples.renderProgress(peoples, isPending)}
                {Peoples.renderPeoples(peoples, isPending)}
            </Segment>
        );
    };

    static renderProgress(peoples, isPending) {
        if (isPending) {
            if (peoples.length == 0) {
                return (
                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                );
            } else {
                return (
                    <div className='peoples_progress_bar'/>
                );
            }
        }
    };

    static renderPeoples(peoples, isPending) {
        if (peoples.length != 0) {
            return (
                <Table className={'peoples_table'} basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nickname</Table.HeaderCell>
                            <Table.HeaderCell>Sex</Table.HeaderCell>
                            <Table.HeaderCell>Level</Table.HeaderCell>
                            <Table.HeaderCell>Country</Table.HeaderCell>
                            <Table.HeaderCell>Topics</Table.HeaderCell>
                            <Table.HeaderCell>Contact</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { peoples.map((item, index) => Peoples.renderPeople(item, index)) }
                    </Table.Body>
                </Table>
            );
        } else {
            if (!isPending) {
                return (
                    <Header className='peoples_empty' as='h3' color='grey'>
                        <Icon.Group size='medium'>
                            <Icon name='search' color='grey'/>
                        </Icon.Group>
                        Peoples not found
                    </Header>
                );
            }
        }
    };

    static renderPeople(people, index) {
        return (
            <People key={ index } people={ people }/>
        );
    };
};
