import React from 'react';

const Contact = () => {
    return (
       <div>
        <section id="contact">
        <div class="container">
            <h1>Contact Us</h1>

            <p>Please fill out the form below to contact us</p>
            <form class="cf" name = "myForm" action="/action_page.php" onsubmit="return validateForm()" method="GET">
                <label for="name">Name</label>
                <input type="text" id="name" />

                <label for="email">Email</label>
                <input type="text" id="email" />

                <label for="message">Message</label>
                <textarea id="message" placeholder="Give us your thoughts"></textarea>

                <button type="submit" id="submit" class="button">Submit</button>
            </form>
            </div>
            </section>
            </div>
            )
}

export default Contact;
