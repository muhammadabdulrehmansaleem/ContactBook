import React from "react";
import ContactCard from "./contactCard";
const ContactList = (props) => {
    const renderContactList = props.Contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
    ));
    
    return (
        <div className="ui celled list">{renderContactList}</div>
    );
}

export default ContactList;
