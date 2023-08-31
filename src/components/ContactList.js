import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./contactCard";
const ContactList = (props) => {
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.Contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact}  clickHandler={deleteContactHandler} />
        //
    ));
    
    return (
        <div className="main">
            <h2>
                Contact List
                <Link to={'/add'}>
                <button className="ui button blue" style={{position:'fixed',right:'20px'}}>AddContact</button>
                </Link>
                
            </h2>
        <div className="ui celled list">{renderContactList}</div>
        </div>
    );
}

export default ContactList;
