import React, {Component, PropTypes} from 'react';
import {Form, Button, Dimmer, Loader} from 'semantic-ui-react';
import './add-user-form.css';

function toSemanticItem(item) {
    return {
        text: item.name,
        value: item.code
    };
}

function getUserSkype(contacts) {
    const skypeItem = contacts.find((item) => item.code == 'skype');

    if (skypeItem) {
        return skypeItem.name
    } else {
        return null
    }
}

export default class UserForm extends Component {

    static propTypes = {
        className: PropTypes.string,
        user: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,
        isPending: PropTypes.bool.isRequired,
        error: PropTypes.object
    };

    render() {
        const {className, user, form, isPending, error} = this.props;

        return (
            <div className={className}>
                {UserForm.renderForm(form, user, isPending)}
            </div>
        );
    };

    static renderForm(form, user, isPending) {
        if (isPending) {
            return (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            );
        } else {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Nickname'
                            name='nickname'
                            defaultValue={user.nickname}
                            placeholder='Nickname'/>

                        <Form.Select
                            label='Gender'
                            name='gender'
                            options={form.gender.map(toSemanticItem)}
                            defaultValue={user.gender}
                            placeholder='Gender'/>

                        <Form.Select
                            label='Level'
                            name='level'
                            options={form.level.map(toSemanticItem)}
                            defaultValue={user.level}
                            placeholder='Level'/>

                        <Form.Select
                            label='Country'
                            name='country'
                            options={form.country.map(toSemanticItem)}
                            defaultValue={user.country.code}
                            placeholder='Country'
                            search/>
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Skype'
                            name='skype'
                            defaultValue={getUserSkype(user.contacts)}
                            placeholder='Skype'/>

                        <Form.Select
                            label='Topics'
                            name='topics'
                            options={form.topics.map(toSemanticItem)}
                            defaultValue={user.topics.map((item) => item.code)}
                            placeholder='Topics'
                            search
                            multiple/>
                    </Form.Group>
                    <Button primary type='submit'>Submit</Button>
                </Form>
            );
        }
    }
};
