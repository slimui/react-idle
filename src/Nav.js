import React from 'react';
import { Container, Segment, Menu, Button } from 'semantic-ui-react';

export default function Nav() {
    return (
        <Segment inverted textAlign="center" style={{ }} vertical>
            <Menu inverted pointing secondary size="large">
                <Container>
                    <Menu.Item as="a" active>
                        Home
                    </Menu.Item>
                    <Menu.Item as="a">About</Menu.Item>
                    <Menu.Item as="a">Contact</Menu.Item>
                    <Menu.Item as="a">Donate</Menu.Item>
                    <Menu.Item as="a">Help</Menu.Item>
                    <Menu.Item as="a">Settings</Menu.Item>
                    {/* <Menu.Item position="right">
                        <Button as="a" inverted>
                            Log in
                        </Button>
                        <Button as="a" inverted primary style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item> */}
                </Container>
            </Menu>
        </Segment>
    );
}
