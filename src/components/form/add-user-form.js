import React, {Component, PropTypes} from 'react';
import {Form, Button} from 'semantic-ui-react';
import './add-user-form.css';

const genders = [
    {text: 'Male', value: 'male'},
    {text: 'Female', value: 'female'},
];

const levels = [
    {text: 'Beginner', value: 'beginner'},
    {text: 'Pre-Intermediate', value: 'pre_intermediate'},
    {text: 'Intermediate', value: 'intermediate'},
    {text: 'Upper-Intermediate', value: 'upper_intermediate'},
    {text: 'Advanced', value: 'advanced'},
    {text: 'Native', value: 'native'}
];

const products = [
    {text: 'Hat', value: 'hat'},
    {text: 'Scarf', value: 'scarf'},
    {text: 'Jacket', value: 'jacket'},
    {text: 'T-Shirt', value: 't_shirt'},
    {text: 'Gloves', value: 'gloves'},
    {text: 'Watch', value: 'watch'},
    {text: 'Belt', value: 'belt'},
    {text: 'Pants', value: 'pants'},
    {text: 'Shoes', value: 'shoes'},
    {text: 'Socks', value: 'socks'},
];

export default class UserForm extends Component {

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const {className} = this.props;

        return (
            <div className={className}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Nickname'
                            name='nickname'
                            placeholder='Nickname'/>

                        <Form.Select
                            label='Gender'
                            name='gender'
                            options={genders}
                            placeholder='Gender'/>

                        <Form.Select
                            label='Level'
                            name='level'
                            options={levels}
                            placeholder='Level'/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select
                            label='Country'
                            name='country'
                            options={products}
                            placeholder='Search Country...'
                            search/>
                        <Form.Select label='Products' name='products' options={products} placeholder='Search...' search
                                     multiple/>
                    </Form.Group>
                    <Button primary type='submit'>Submit</Button>
                </Form>
            </div>
        );
    };
};
