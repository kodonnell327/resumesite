import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>Full Name:
                    <input type="text" name="fullName" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ContactForm;