import React, { Component } from 'react';
import { auth, googleAuthProvider } from "../firebase";
import { Section, Container, Content, Title, SubTitle, Button } from 'reactbulma'

class SignIn extends Component {
    render() {
        return(
            <div className='SignIn'>
                <Section>
                    <Container hasTextCentered>
                        <Content>
                            <Title is='1' style={{color:'white'}}>Better Barber</Title>
                            <br/>
                            <br/>
                            <SubTitle style={{color:'white'}}>Find and book a barber today</SubTitle>
                        </Content>
                    </Container>
                </Section>
                <Section>
                    <Container hasTextCentered>
                        <Button onClick={() => auth.signInWithRedirect(googleAuthProvider) } fullwidth>
                            Sign In
                        </Button>
                    </Container>
                </Section>
            </div>
        )
    }
}

export default SignIn