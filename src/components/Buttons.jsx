import React from 'react'
import {
    FaEnvelope
} from "react-icons/fa";
import {
    FaLinkedin
} from "react-icons/fa";

function Buttons() {
    return (
        <div className='btn'>
            <button className='btn-socials'><FaEnvelope/><span>Email</span></button>
            <button id="linkedin-btn" className='btn-socials '><FaLinkedin/><span>LinkedIn</span></button>

        </div>
    )
}

export default Buttons
