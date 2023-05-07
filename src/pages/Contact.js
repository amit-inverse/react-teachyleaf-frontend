import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Please fill out the form below to get in touch.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
