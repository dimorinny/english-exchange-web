import React, {Component, PropTypes} from 'react';
import {Form, Button, Message, Icon} from 'semantic-ui-react';
import './add-user-form.css';

function toSemanticItem(item) {
    return {
        text: item.name,
        value: item.code
    };
}

function toFlagSemanticItem(item) {
    return {
        text: item.name,
        value: item.code,
        flag: item.code
    };
}

function getCode(item) {
    if (item.code) {
        return item.code;
    } else {
        return '';
    }
}

function getAge(age) {
    if (age != 0) {
        return age.toString()
    } else {
        return '';
    }
}

function getUserSkype(contacts) {
    const skypeItem = contacts.find((item) => item.code == 'skype');

    if (skypeItem) {
        return skypeItem.name
    } else {
        return ''
    }
}

export default class UserForm extends Component {

    static propTypes = {
        className: PropTypes.string,
        user: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,
        isPending: PropTypes.bool.isRequired,
        addUserIsPending: PropTypes.bool.isRequired,
        addUserClicked: PropTypes.func.isRequired,
        formChanged: PropTypes.func.isRequired,
        error: PropTypes.string,
        addUserError: PropTypes.string
    };

    render() {
        const {className} = this.props;

        return (
            <div className={className}>
                {this.renderError()}
                {this.renderForm()}
            </div>
        );
    };

    handleSubmit = (event, {formData}) => {
        event.preventDefault();
        const {addUserClicked} = this.props;
        addUserClicked(formData);
    };

    handleChange = (key, value) => {
        const {user, formChanged} = this.props;
        user[key] = value;
        formChanged(user);
    };

    handleChangeSelectionItem = (key, value) => {
        const {user, form, formChanged} = this.props;
        user[key] = {
            code: value,
            name: form[key].find((item) => item.code == value).name
        };
        formChanged(user);
    };

    handleChangeTopics = (key, value) => {
        const {user, form, formChanged} = this.props;
        user[key] = value.map((topic) => ({
            code: topic,
            name: form[key].find((item) => item.code == topic).name
        }));
        formChanged(user);
    };

    handleChangeContact = (key, value) => {
        const {user} = this.props;
        const item = user.contacts.find((item) => item.code == key);

        if (item) {
            this.handleChange('contacts', user.contacts.map((item) => {
                if (item.code == key) {
                    return {
                        code: key,
                        name: value
                    }
                }

                return item;
            }))
        } else {
            this.handleChange('contacts', user.contacts.concat({
                code: key,
                name: value
            }))
        }
    };

    renderError() {
        const {addUserError} = this.props;

        if (addUserError) {
            return (
                <Message warning attached='bottom'>
                    <Icon name='warning'/>
                    {addUserError}
                </Message>
            );
        }
    }

    renderForm() {
        const {user, form, isPending, addUserIsPending} = this.props;

        if (!isPending) {
            return (
                <Form
                    loading={addUserIsPending}
                    onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Nickname'
                            name='nickname'
                            value={user.nickname}
                            onChange={(event, {value}) => this.handleChange('nickname', value)}
                            placeholder='Nickname'/>

                        <Form.Select
                            label='Gender'
                            name='gender'
                            options={form.gender.map(toSemanticItem)}
                            value={getCode(user.gender)}
                            onChange={(event, {value}) => this.handleChangeSelectionItem('gender', value)}
                            placeholder='Gender'/>

                        <Form.Select
                            label='Level'
                            name='level'
                            options={form.level.map(toSemanticItem)}
                            value={getCode(user.level)}
                            onChange={(event, {value}) => this.handleChangeSelectionItem('level', value)}
                            placeholder='Level'/>

                        <Form.Select
                            label='Country'
                            name='country'
                            options={form.country.map(toFlagSemanticItem)}
                            value={getCode(user.country)}
                            onChange={(event, {value}) => this.handleChangeSelectionItem('country', value)}
                            placeholder='Country'
                            search/>
                    </Form.Group>

                    <Form.Group widths={16}>

                        <Form.Input
                            label='Age'
                            name='age'
                            width={4}
                            type='number'
                            value={getAge(user.age)}
                            onChange={(event, {value}) => this.handleChange('age', parseInt(value))}
                            placeholder='Age'/>

                        <Form.Input
                            label='Skype'
                            name='skype'
                            width={4}
                            value={getUserSkype(user.contacts)}
                            onChange={(event, {value}) => this.handleChangeContact('skype', value)}
                            placeholder='Skype'/>

                        <Form.Select
                            label='Topics'
                            name='topics'
                            width={8}
                            options={form.topics.map(toSemanticItem)}
                            value={user.topics.map((item) => item.code)}
                            onChange={(event, {value}) => this.handleChangeTopics('topics', value)}
                            placeholder='Topics'
                            search
                            multiple/>
                    </Form.Group>
                    <Button
                        className='add_user_form_submit_button'
                        circular
                        basic
                        icon='add'
                        content='Save to list'
                        type='submit'/>
                </Form>
            );
        }
    }
};
