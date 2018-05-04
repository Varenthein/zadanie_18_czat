import React from 'react';

import styles from './UserForm.css'

class UserForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }

    hanfleChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
                <input 
                    className={styles.UserInput}
                    placeholder='Write your nickname and press enter'
                    onChange={e => this.handleChange(e)}
                    value={this.state.name}
                />
            </form>
        );
    }
}

export default UserForms;