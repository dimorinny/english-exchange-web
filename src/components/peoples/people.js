import React, {Component, PropTypes} from 'react';
import {Icon, Flag, Popup, Table, Label, Image} from 'semantic-ui-react';
import EmptyField from './empty/empty';
import OnlineIndicator from './indicator/online';
import './people.css';

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

    static LEVEL_COLORS = {
        beginner: 'green',
        pre_intermediate: 'olive',
        intermediate: 'yellow',
        upper_intermediate: 'orange',
        advanced: 'red',
        native: 'black'
    };

    static propTypes = {
        people: PropTypes.shape({
            nickname: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            gender: fieldTypes.isRequired,
            level: fieldTypes.isRequired,
            country: fieldTypes.isRequired,
            topics: PropTypes.arrayOf(fieldTypes).isRequired,
            contacts: PropTypes.arrayOf(fieldTypes).isRequired,
        }).isRequired
    };

    render() {
        const {nickname, age, gender, level, country, topics, contacts} = this.props.people;

        return (
            <Table.Row>
                <Table.Cell>{ People.getNickname(nickname) }</Table.Cell>
                <Table.Cell>{ People.getGender(gender) }</Table.Cell>
                <Table.Cell>{ People.getAge(age) }</Table.Cell>
                <Table.Cell>{ People.getLevel(level) }</Table.Cell>
                <Table.Cell>{ People.getCountry(country) }</Table.Cell>
                <Table.Cell>{ People.getTopics(topics) }</Table.Cell>
                <Table.Cell>
                    { contacts.map((item, index) => People.getContact(item, index))}
                </Table.Cell>
            </Table.Row>
        );
    };

    static getNickname(nickname) {
        return (
            <div>
                <OnlineIndicator/>
                <span>{nickname}</span>
            </div>
        );
    };

    static getGender(gender) {
        if (gender.code) {
            const {avatar, info} = People.GENDER_INFO[gender.code];
            return (
                <Popup
                    trigger={
                        <Image src={avatar} avatar />
                    }
                    content={info}
                    positioning='top center'/>
            );
        } else {
            return <EmptyField/>;
        }
    };

    static getAge(age) {
        if (age > 0 && age < 150) {
            return <div>{age}</div>;
        } else {
            return <EmptyField/>;
        }
    };

    static getLevel(level) {
        return (
            <Label className='people_level_label'
                   color={People.LEVEL_COLORS[level.code]}>
                {level.name}
            </Label>
        );
    };

    static getCountry(country) {
        if (country.code) {
            return (
                <Popup
                    trigger={
                        <Flag name={country.code}/>
                    }
                    content={country.name}
                    positioning='right center'/>
            );
        } else {
            return <EmptyField/>;
        }
    };

    static getUrlByContact(contact) {
        if (contact.code == 'skype') {
            return 'skype:' + contact.name + '?chat';
        }
    }

    static getContact(contact, index) {
        return (
            <Popup
                key={index}
                trigger={
                    <a href={People.getUrlByContact(contact)}>
                        <Icon className='people_contact_skype' name={contact.code} size='large'/>
                    </a>
                }
                content='Contact with user'
                positioning='top center'
            />
        );
    };

    static getTopics(topics) {
        if (topics.length > 0) {
            return (
                <div className='people_interests'>
                    {
                        topics.map((item, index) => {
                            return (
                                <Label key={index} className='people_interest' horizontal>{item.name}</Label>
                            );
                        })
                    }
                </div>
            );
        } else {
            return <EmptyField/>;
        }
    };
};
