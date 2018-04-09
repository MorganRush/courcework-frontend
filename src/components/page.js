import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
    app: {
        overflow: 'hidden',
        position: 'relative',
        width: 100,
    },
    dropdown: {
        position: 'absolute',
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

class page extends React.Component {
    state = {
        isOpen: false
    };

    render() {
        const { isOpen } = this.state;

        return (
            <div>
                <button onClick={() => this.setState({isOpen: !isOpen})}>
                    Toggle
                </button>
                <RelativePortal>
                    {isOpen &&
                    <Dropdown />
                    }
                </RelativePortal>
            </div>
        );
    }
}

class Dropdown extends React.Component {
    render() {
        return (
            <div style={styles.dropdown} />
        );
    }
}

export default (DropdownLink)