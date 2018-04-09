import React, {Component} from 'react'
import {Button, Modal } from 'semantic-ui-react'
import AuthorizationWindow from './authorizationWindow';

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
        const loginPage = document.getElementById('signUpPageWrapper');
        if (!event.path.includes(loginPage)) {
            this.handleClose();
        }
    }

    handleOpen = () => this.setState({modalOpen: true});

    handleClose = () => this.setState({modalOpen: false});

    render() {
        return (
            <Modal
                trigger={<Button onClick={this.handleOpen}>SIGN UP</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Modal.Content>
                    <div id="signUpPageWrapper" align="center">
                        <form>
                            <input type="text" id="login" placeholder="login" name="login"/><br/>
                            <input type="password" id="password" placeholder="password" name="password"/><br/>
                            <input type="password" id="repeatPassword" placeholder="password"
                                   name="repeatPassword"/><br/>
                            <button type="submit" id="button">Got</button>
                            <Button onClick={this.handleClose} inverted>Close</Button>
                        </form>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}