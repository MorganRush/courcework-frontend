import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import RegistrationWindow from './registrationWindow';

export default class authorizationWindow extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside(event) {
        const signInPage = document.getElementById('signInPageWrapperClick');
        if (!event.path.includes(signInPage)) {
            this.handleClose();
        }
    }

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    render() {
        return (
            <Modal
                trigger={<Button onClick={this.handleOpen}>SIGN IN</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Modal.Content>
                    <div id="signInPageWrapperClick" align="center">
                        <form>
                            <input type="text" id="login" placeholder="login" name="login"/><br/>
                            <input type="password" id="password" placeholder="password" name="password"/><br/>
                            <button type="submit" id="button">Login</button>
                            <Button onClick={this.handleClose} inverted>Close</Button>
                        </form>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}