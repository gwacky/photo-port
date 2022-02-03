import React from "react";

function ContactForm() {
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <input type='message' name='message' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;