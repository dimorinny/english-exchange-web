import React, {Component, PropTypes} from 'react';
import {Image, Icon, Flag, Popup, Table, Label} from 'semantic-ui-react'

export default class People extends Component {

    static GENDER_INFO = {
        male: {
            avatar: 'http://semantic-ui.com/images/avatar2/small/elyse.png',
            info: 'Male'
        },
        female: {
            avatar: 'http://semantic-ui.com/images/avatar2/small/lindsay.png',
            info: 'Female'
        }
    };

    static propTypes = {
        people: PropTypes.shape({
            nickname: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired,
            level: PropTypes.string.isRequired,
            country: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }),
            topics: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })),
            contacts: PropTypes.arrayOf(PropTypes.shape({
                type: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired
            }))
        }).isRequired
    };

    render() {
        const {nickname, gender, level, country, topics, contacts} = this.props.people;

        return (
            <Table.Row>
                <Table.Cell>{ nickname }</Table.Cell>
                <Table.Cell>{ People.getAvatar(gender) }</Table.Cell>
                <Table.Cell>{ level }</Table.Cell>
                <Table.Cell>{ People.getCountry(country) }</Table.Cell>
                <Table.Cell>
                    <div className='people_interests'>
                        { topics.map((item, index) => People.getTopic(item, index)) }
                    </div>
                </Table.Cell>
                <Table.Cell>
                    { contacts.map((item, index) => People.getContact(item, index))}
                </Table.Cell>
            </Table.Row>
        );
    };

    static getAvatar(gender) {
        const {avatar, info} = People.GENDER_INFO[gender];
        return (
            <Popup
                trigger={<Image src={avatar} avatar/>}
                positioning='right center'
                content={info}
            />
        );
    };

    static getCountry(country) {
        return (
            <Popup
                trigger={<Flag name={country.code}/>}
                content={country.name}
                positioning='right center'
            />
        );
    };

    static getContact(contact, index) {
        return (
            <Popup
                key={index}
                trigger={<Icon name={contact.type} color='grey' size='large'/>}
                content='Contact with user'
                positioning='top center'

            />
        );
    };

    static getTopic(topic, index) {
        return (
            <Label key={index} className='people_interest' horizontal>{topic.name}</Label>
        );
    };
};
