import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import secrets from "../secrets.json"

class MyReCAPTCHA {
    onChange(value) {
        console.log("Captcha value:", value);
    }

    render() {
        return <ReCAPTCHA sitekey='' onChange={this.onChange} />;
    }
}

export default MyReCAPTCHA;