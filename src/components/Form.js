import React from 'react'
import { Section, Field, Tag, Control, Input, Icon, Button, Content } from 'reactbulma'

function Form() {
    return (
        <Section>
            <Content>
                <h1>User Details</h1>
            </Content>
            <Field>
                <Tag>First Name</Tag>
                <Control>
                    <Input type='text' placeholder='First Name'/>

                </Control>
            </Field>
            <Field>
                <Tag>Last Name</Tag>
                <Control>
                    <Input type='text' placeholder='Last Name'/>
                </Control>
            </Field>
            <Field>
                <Tag>Phone</Tag>
                <Control hasIconsLeft>
                    <Input type='text' placeholder='UserName' />
                    <Icon left>
                        <i className="fa fa-user" />
                    </Icon>
                </Control>
            </Field>
            <Field>
                <Tag>Email</Tag>
                <Control>
                    <Input type='text' placeholder='Email'/>
                </Control>
            </Field>
            <Button warning>Update Account</Button>
            <br/>
            <br/>
            <Button danger>Delete Account</Button>
        </Section>
    )
}

export default Form