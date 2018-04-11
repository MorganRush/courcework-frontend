import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
    form: {
        width: 150,
        height: 100,
    },
};

class RelativePortal extends React.Component {

    constructor(props) {
        super(props);
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
    }

    render() {
        return null;
    }

    componentDidUpdate() {
        ReactDOM.render(
            <div {...this.props} />,
            this.node
        );
    }

    componentWillUnmout() {
        document.body.removeChild(this.node);
    }

}

class ModalAuthentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenUp: false,
            isOpenIn: false,
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside(event) {
        const signUpPage = document.getElementById('signUp');
        const signInPage = document.getElementById('signIn');
        if (!event.path.includes(signUpPage)) {
            this.setState({isOpenUp: false})
        }
        if (!event.path.includes(signInPage)) {
            this.setState({isOpenIn: false})
        }
    }

    render() {
        const isOpenUp = this.state.isOpenUp;
        const isOpenIn = this.state.isOpenIn;

        return (
            <div>
                <button id='signUp' onClick={() => this.setState({isOpenUp: !isOpenUp})}>
                    SignUp
                </button>
                <RelativePortal>
                    {isOpenUp &&
                    <SignInForm/>
                    }
                </RelativePortal>
                <button id='signIn' onClick={() => this.setState({isOpenIn: !isOpenIn})}>
                    SignIn
                </button>
                <RelativePortal>
                    {isOpenIn &&
                    <SignInForm/>
                    }
                </RelativePortal>
            </div>
        );
    }
}

class SignInForm extends React.Component {
    render() {
        return (
            <div align="center" style={styles.form}>
                <form>
                    <input type="text" id="login" placeholder="login" name="login"/><br/>
                    <input type="password" id="password" placeholder="password" name="password"/><br/>
                    <button type="submit" id="button">Login</button>
                </form>
            </div>
        );
    }
}

class SignUpForm extends React.Component {
    render(){
        return(
            <div align="center" style={styles.form}>
                <form>
                    <input type="text" id="login" placeholder="login" name="login"/><br/>
                    <input type="password" id="password" placeholder="password" name="password"/><br/>
                    <input type="password" id="repeatPassword" placeholder="password"
                           name="repeatPassword"/><br/>
                    <button type="submit" id="button">Got</button>
                </form>
            </div>
        )
    }
}

export default (ModalAuthentication)