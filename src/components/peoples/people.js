import React, {Component, PropTypes} from 'react';
import {Image, Icon, Flag, Popup, Table, Label} from 'semantic-ui-react';

const fieldTypes = PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
});

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
            gender: fieldTypes.isRequired,
            level: fieldTypes.isRequired,
            country: fieldTypes.isRequired,
            topics: PropTypes.arrayOf(fieldTypes).isRequired,
            contacts: PropTypes.arrayOf(fieldTypes).isRequired,
        }).isRequired
    };

    render() {
        const {nickname, gender, level, country, topics, contacts} = this.props.people;

        return (
            <Table.Row>
                <Table.Cell>{ nickname }</Table.Cell>
                <Table.Cell>{ People.getAvatar(gender) }</Table.Cell>
                <Table.Cell>{ level.name }</Table.Cell>
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
        const {avatar, info} = People.GENDER_INFO[gender.code];
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
            <div>
                <Flag name={country.code}/>
                <span>{country.name}</span>
            </div>
        );
    };

    static getContact(contact, index) {
        return (
            <Popup
                key={index}
                trigger={<Icon name={contact.code} color='grey' size='large'/>}
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
