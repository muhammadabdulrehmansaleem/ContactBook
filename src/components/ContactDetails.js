import React from "react";
import { useParams,useLocation } from "react-router-dom";
import user from '../images/user.png';

const ContactDetails = (props) => {
    const location=useLocation();
    console.log(location);

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">abd</div>
                    <div className="description">abd123</div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
