import React from 'react';

import { ContactClass } from '../../models/contact.class';
import Contact from '../pure/forms/contact';


const ContactListComponent = () => {


    const defaultContact = new ContactClass("Roilan", "Lambert", 'roilan.lambert5@gmail.com', true)



    return (
        <div>
            <h2>
                Your contacts:
            </h2>
            <Contact contact={defaultContact}></Contact>



        </div>
    );



};



export default ContactListComponent;
