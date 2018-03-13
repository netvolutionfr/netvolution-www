import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
    <div>
        <div className="row">
            <div className="col-md-2"> </div>
            <div className="col-md-4 no-padding-left">
                <h2>Nous contacter</h2>
            </div>
            <div className="col-md-4 no-padding-left">
                <p>
                    Don't hesitate to get in touch with us! We love the challenge of turning your ideas into reality
                    and are always ready to talk through any message.
                </p>
            </div>
            <div className="col-md-2"> </div>
        </div>
        <div className="row">
            <div className="col-md-2"> </div>
            <div className="col-md-2 no-padding-left col-sm-4">
                <div className="atail-place">
                    <span className="atail-place-title">Lille</span>
                    <span className="atail-place-text">Addresse<span>27, rue Branly<br/>59000 Lille<br/>France</span></span>
                    <span className="atail-place-text">Tél<span><a href="tel:+33366721352"><span>+33 3 66 72 13 52</span></a></span></span>
                </div>
            </div>
            <div className="col-md-2 no-padding-left col-sm-4">
            </div>
            <div className="col-md-4 no-padding col-sm-8">
                <form action="#" method="POST" className="contact-form">
                    <input type="text" placeholder="Nom" name="name" required="" />
                    <input type="email" placeholder="Email" name="email" required="" />
                    <textarea placeholder="Message" name="text" cols="30" rows="10" required=""></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
)

export default ContactPage
