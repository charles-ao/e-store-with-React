import React, { Component } from 'react';

const year = new Date().getFullYear();

class Footer extends Component {
    render() {
        return (
            <div className= "footer">
                <p>Adedunmola, {year}</p>
            </div>
        );
    }
}

export default Footer;