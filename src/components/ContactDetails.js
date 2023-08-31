import React from "react";
import { useParams } from "react-router-dom";
import user from '../images/user.png';

const ContactDetails = (props) => {
    const { id } = useParams();
    const contact = props.Contacts.find(contact => contact.id === id);

    if (!contact) {
        return <div>Loading...</div>;
    }

    const { name, email } = contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
